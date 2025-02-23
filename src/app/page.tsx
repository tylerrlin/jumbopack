"use client";

import StorageBreakdown from "@/components/BreakdownComponent";
import { getFoodInfo, getMacros } from "@/utils/menuHelper";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Home() {
    const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_AI_API_KEY;
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: {
            parts: [
                {
                    text: `You are a menu recommendation engine. Your task is to analyze a provided list of menu items—each with detailed nutritional macros (e.g., calories, protein, carbs, fiber, fats, vitamins), dietary labels (halal, pescatarian, vegetarian, vegan), and boolean tags (such as beef, chicken, hasPork, hasSeafood)—against a user's nutritional goals and dietary restrictions.

        After evaluating all options, output exactly four menu items that best match the user's criteria. Your response must be a valid JSON array containing four objects. Each object should include:
        - "name": The name of the menu item.
        - "macros": An object detailing the nutritional information (calories, protein, carbs, fiber, etc.).
        - "diets": An array of applicable diet labels (e.g., ["halal", "vegetarian"]).
        - "tags": An object with boolean properties such as hasBeef, hasChicken, hasPork, hasSeafood.

        Output only the JSON array without any additional text or commentary.
        `,
                },
            ],
        },
    });

    const prompt = "Explain how AI works";

    model.generateContent(prompt).then((response) => {
        console.log(response);
    });

    fetch("/api/menu/dewick-dining/lunch/2025-02-22")
        .then((res) => res.json())
        .then((data) => {
            const foodInfo = getFoodInfo(data, "2025-02-22");
            const macros = getMacros("Halal Chicken Curry", data, "2025-02-22");
            console.log(macros);
            console.log(foodInfo);
        });

    return <>{<StorageBreakdown />}</>;
}
