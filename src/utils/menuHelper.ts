/* eslint-disable @typescript-eslint/no-unused-vars */
type FoodContains = Map<string, boolean>;
type FoodDiet = Map<string, boolean>;
type FoodMacros = Map<string, number>;
type FoodAttributes = {
    contains: FoodContains;
    diet: FoodDiet;
    macros: FoodMacros;
};
type FoodMap = Map<string, FoodAttributes>;

// | "vegan"
// | "vegetarian"
// | "pescatarian"
// | "halal"
// | "kosher"
// | "gluten-free"

// Manually searching ingredients instead for accuracy
// Pull restrictions from food items by logos
// Returns: Array of restrictions/attributes from item logos (milk, vegan,
// vegetarian, halal) or empty array
function getAllergens(menuData, foodName, targetDate) {
    for (const day of menuData.days) {
        if (day.date === targetDate) {
            for (const item of day.menu_items || []) {
                if (
                    item.food &&
                    item.food.name.toLowerCase() === foodName.toLowerCase()
                ) {
                    return (item.food.icons?.food_icons || [])
                        .map((icon) => icon.slug)
                        .filter((name) => name);
                }
            }
        }
    }
    return [];
}

// Produce foodInfo structure
// Returns: Map of food name keys with attribute values
export function getFoodInfo(menuData, targetDate) {
    const foods = getFoodItemsByDate(menuData, targetDate);
    const foodData: FoodMap = new Map();
    for (const foodItem of foods) {
        const attributes: FoodAttributes = {
            contains: new Map(),
            diet: new Map(),
            macros: new Map(),
        };
        const restrictions = getAllergens(menuData, foodItem, targetDate);

        const entries = getMacros(foodItem, menuData, targetDate);
        for (const [key, value] of entries) {
            attributes.macros.set(key, value);
        }

        attributes.contains.set(
            "beef",
            hasIngredient(foodItem, "beef", menuData, targetDate)
        );

        attributes.contains.set(
            "chicken",
            hasIngredient(foodItem, "chicken", menuData, targetDate)
        );

        attributes.contains.set(
            "pork",
            hasIngredient(foodItem, "pork", menuData, targetDate) ||
                hasIngredient(foodItem, "bacon", menuData, targetDate)
        );

        attributes.contains.set(
            "dairy",
            hasIngredient(foodItem, "milk", menuData, targetDate) ||
                hasIngredient(foodItem, "cheese", menuData, targetDate)
        );

        attributes.contains.set(
            "seafood",
            hasIngredient(foodItem, "tuna", menuData, targetDate) ||
                hasIngredient(foodItem, "salmon", menuData, targetDate) ||
                hasIngredient(foodItem, "shrimp", menuData, targetDate) ||
                hasIngredient(foodItem, "lobster", menuData, targetDate) ||
                hasIngredient(foodItem, "crab", menuData, targetDate) ||
                hasIngredient(foodItem, "clam", menuData, targetDate) ||
                hasIngredient(foodItem, "oyster", menuData, targetDate) ||
                hasIngredient(foodItem, "mussel", menuData, targetDate) ||
                hasIngredient(foodItem, "scallop", menuData, targetDate) ||
                hasIngredient(foodItem, "squid", menuData, targetDate) ||
                hasIngredient(foodItem, "octopus", menuData, targetDate) ||
                hasIngredient(foodItem, "anchovy", menuData, targetDate) ||
                hasIngredient(foodItem, "anchovies", menuData, targetDate) ||
                hasIngredient(foodItem, "sardine", menuData, targetDate) ||
                hasIngredient(foodItem, "mackerel", menuData, targetDate) ||
                hasIngredient(foodItem, "herring", menuData, targetDate) ||
                hasIngredient(foodItem, "caviar", menuData, targetDate)
        );

        attributes.diet.set(
            "vegan",
            !attributes.contains.get("dairy") &&
                !attributes.contains.get("seafood") &&
                !attributes.contains.get("beef") &&
                !attributes.contains.get("chicken") &&
                !attributes.contains.get("pork")
        );

        attributes.diet.set(
            "vegetarian",
            !attributes.contains.get("seafood") &&
                !attributes.contains.get("beef") &&
                !attributes.contains.get("chicken") &&
                !attributes.contains.get("pork")
        );

        attributes.diet.set(
            "pescetarian",
            !attributes.contains.get("beef") &&
                !attributes.contains.get("chicken") &&
                !attributes.contains.get("pork")
        );

        attributes.diet.set("gluten-free", !restrictions.includes("gluten"));
        attributes.diet.set("halal", restrictions.includes("halal"));

        foodData.set(foodItem, attributes);
    }

    return foodData;
}

// Pull all items for a date (YYYY-MM-DD)
// Returns: Array of items, or empty array if empty menu for that day
function getFoodItemsByDate(menuData, targetDate) {
    for (const day of menuData.days) {
        if (day.date === targetDate) {
            return day.menu_items
                .filter((item) => item.food && item.food.name)
                .map((item) => item.food.name);
        }
    }
    return [];
}

// Check if food item for a date (YYYY-MM-DD) contains a specific ingredient
// Returns: null if food does not exist for specified day, true/false if item contains ingredient or not
function hasIngredient(foodName, ingredient, menuData, targetDate) {
    for (const day of menuData.days) {
        if (day.date === targetDate) {
            for (const item of day.menu_items || []) {
                if (
                    item.food &&
                    item.food.name.toLowerCase() === foodName.toLowerCase()
                ) {
                    const ingredients = item.food.ingredients
                        ? item.food.ingredients.toLowerCase()
                        : "";
                    return ingredients.includes(ingredient.toLowerCase());
                }
            }
        }
    }
    return false;
}

const available_macros = [
    "calories",
    "g_fat",
    "g_saturated_fat",
    "g_trans_fat",
    "mg_cholesterol",
    "g_carbs",
    "g_added_sugar",
    "mg_potassium",
    "mg_sodium",
    "g_fiber",
    "g_protein",
    "mg_iron",
    "mg_calcium",
    "mg_vitamin_c",
    "iu_vitamin_a",
    "re_vitamin_a",
    "mcg_vitamin_a",
    "mg_vitamin_d",
    "mcg_vitamin_d",
];

// Retrieve nutrition info for food item on a date YYYY-MM-DD
// Returns: macro value or null if macro cannot be found
export function getMacros(foodName, menuData, targetDate) {
    for (const day of menuData.days) {
        if (day.date === targetDate) {
            for (const item of day.menu_items || []) {
                if (
                    item.food &&
                    item.food.name.toLowerCase() === foodName.toLowerCase()
                ) {
                    return item.food.rounded_nutrition_info
                        ? (Object.entries(item.food.rounded_nutrition_info) as [
                              string,
                              number
                          ][])
                        : null;
                }
            }
        }
    }
}

// Retrieve serving size and units
export function getServingInfo(foodName, menuData, targetDate) {
    for (const day of menuData.days) {
        if (day.date === targetDate) {
            for (const item of day.menu_items) {
                // Extract serving size and format as a string
                const servingSizeAmount =
                    item.food.serving_size_info?.serving_size_amount;
                const servingSizeUnit =
                    item.food.serving_size_info?.serving_size_unit;
                const servingInfo =
                    servingSizeAmount && servingSizeUnit
                        ? `${servingSizeAmount} ${servingSizeUnit}`
                        : "Unknown"; // Fallback if data is missing

                return servingInfo;
            }
        }
    }
}
// Example usage
/* fetchMenu(menuUrl).then((menuData) => {
    if (menuData) {
        // Check if Grilled Tuna melt on 2025-02-22 contains rye bread
        console.log(
            hasIngredient(
                "Grilled Tuna Melt",
                "rye bread",
                menuData,
                "2025-02-22"
            )
        );

        // Return Grilled Tuna Melt on 2025-02-18's calories
        console.log(
            getMacro("Grilled Tuna Melt", "calories", "2025-02-18", menuData)
        );
    }
}); */
