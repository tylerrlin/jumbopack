import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
type MealTypes = "breakfast" | "lunch" | "dinner" | "daily" | "late-night";

type QuestionResponse = {
    dhall: string,
    type: MealTypes,
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