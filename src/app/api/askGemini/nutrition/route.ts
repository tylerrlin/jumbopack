import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

type DHall = "dewick-dining"
    | "hodgdon-food-on-the-run"
    | "carmichael-dining-hall"
    | "commons-marketplace"
    | "kindlevan-cafe"
    | "hotung-cafe"
    | "tower-cafe"
    | "smfa"
    | "pax-et-lox-glatt-kosher-deli"
    | "mugar-cafe";

type MealTypes = Map<DHall, string[]>

type QuestionResponse = {
    dhall: string,
    mealType: "breakfast" | "lunch" | "dinner" | "daily" | "late-night";
    diets: "vegan" | "vegetarian" | "pescatarian" | "halal" | "gluten-free"
    | "pescetarian";
    restrictions: "chicken" | "beef" | "dairy" | "pork" | "seafood";
    calories: number;
    protein: number;
    carbs: number;
    trans_fats: boolean;
}

// const userRequest = {
//         diets: ["vegetarian"],
//         restrictions: ["chicken"],
//         calories: 800,
//         protein: 20,
//         carbs: 45,
//         "trans-fats": false,
//     };

// Convert menuData nested map to JSON object
function mapToObject<T>(map: Map<string, T> | T): T {
    if (map instanceof Map) {
        return Object.fromEntries(
            [...map.entries()].map(([key, value]) => [key, mapToObject(value)])
        ) as T;
    }
    return map;
}

const populateMealTypes = () => {
    const mealTypes = new Map<DHall, string[]>();
    mealTypes.set("dewick-dining", ["breakfast", "lunch", "dinner"]);
    mealTypes.set("hodgdon-food-on-the-run", ["daily"]);
    mealTypes.set("carmichael-dining-hall", ["breakfast", "lunch", "dinner"]);
    mealTypes.set("commons-marketplace", ["daily", "dinner", "late-night"]);
    mealTypes.set("kindlevan-cafe", ["daily"]);
    mealTypes.set("hotung-cafe", ["daily"]);
    mealTypes.set("tower-cafe", ["daily"]);
    mealTypes.set("smfa", ["daily", "dinner"]);
    mealTypes.set("pax-et-lox-glatt-kosher-deli", ["lunch", "dinner"]);
    mealTypes.set("mugar-cafe", ["daily"]);
    return mealTypes;
}

// get 

// 

export async function GET(
    request: Request,
    {
        params,
    }: {
        params: Promise<{ questionResponses: QuestionResponse; parsedMenu: mapToObject(menuData); datetime: string }>

    }
    {
        const { questionResponses, parsedMenu, datetime } = await params;
    }
)