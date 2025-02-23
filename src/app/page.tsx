'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';


const LandingPage = () => {
    return (
        <div className="flex-auto bg-gray-100 p-8">
                {/* Header */}
                <div className="bg-gray-200 p-4 rounded-lg">
                    <div className="text-3xl text-center font-bold">
                        <span className="text-blue-400">Jum</span>
                        <span className="text-brown-600">Belly</span>
                    </div>
                    <div className="text-center text-gray-600">
                        A New Dining Solution at Tufts
                    </div>                
                </div>

            
                <div className="grid h-auto grid-cols-2 gap-8 mt-8">
                    {/* See Menu */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl text-center font-bold">See Menu</h2>
                        <p className="text-gray-600 text-center font-semibold">Select Locations</p>
                        <div className="mt-4 bg-purple-100 p-4 rounded-lg max-h-64 overflow-y-auto">
                            {['All', 'Dewick', 'Carmichael', 'Hodgdon', 'Kindlevan', 'Pax', 'Commons', 'Hotung', 'Mugar', 'SMFA Cafe', 'Tower Cafe'].map((item, index) => (
                            <div key={index} className="flex items-center gap-8 text-lg">
                                <input type="checkbox" checked readOnly className="form-checkbox text-purple-600 w-6 h-6" />
                                <span className="text-xl">{item}</span>
                            </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-4">
                            <button className="bg-teal-800 text-white py-2 px-4 rounded-lg">See Options</button>
                        </div>
                    </div>
                    
                    {/* Generate a meal */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <h2 className="text-xl font-bold">Generate a meal for me</h2>
                        <div className="mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16m-8-8v16" />
                            </svg>
                        </div>
                    </div>
                </div>
                    
                </div>
        // </div>
   
                
    //             {/* Main Content */}
                // <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                //     {/* See Menu */}
                //     <div className="bg-white p-6 rounded-lg shadow-md">
                //         <h2 className="text-xl font-bold">See Menu</h2>
                //         <p className="text-gray-600 font-semibold">Select Locations</p>
                //         <div className="mt-4 bg-purple-100 p-4 rounded-lg">
                //             {[...Array(8)].map((_, index) => (
                //                 <div key={index} className="flex items-center gap-2">
                //                     <input type="checkbox" checked readOnly className="form-checkbox text-purple-600" />
                //                     <span>List item</span>
                //                 </div>
                //             ))}
                //         </div>
                //         <button className="mt-4 bg-brown-600 text-white py-2 px-4 rounded-lg">See Options</button>
                //     </div>
                    
                //     {/* Generate a meal */}
                //     <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                //         <h2 className="text-xl font-bold">Generate a meal for me</h2>
                //         <div className="mt-4">
                //             <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16m-8-8v16" />
                //             </svg>
                //         </div>
                //     </div>
                // </div>
    //         </div>
    //     </div>
    );
};

export default LandingPage;
// "use client";

// import StorageBreakdown from "@/components/BreakdownComponent";
// import { getFoodInfo, getMacros } from "@/utils/menuHelper";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// export default function Home() {
//     const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_AI_API_KEY;
//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({
//         model: "gemini-1.5-flash",
//         systemInstruction: {
//             parts: [
//                 {
//                     text: `You are a menu recommendation engine. Your task is to analyze a provided list of menu items—each with detailed nutritional macros (e.g., calories, protein, carbs, fiber, fats, vitamins), dietary labels (halal, pescatarian, vegetarian, vegan), and boolean tags (such as beef, chicken, hasPork, hasSeafood)—against a user's nutritional goals and dietary restrictions.

//         After evaluating all options, output exactly four menu items that best match the user's criteria. Your response must be a valid JSON array containing four objects. Each object should include:
//         - "name": The name of the menu item.
//         - "macros": An object detailing the nutritional information (calories, protein, carbs, fiber, etc.).
//         - "diets": An array of applicable diet labels (e.g., ["halal", "vegetarian"]).
//         - "tags": An object with boolean properties such as hasBeef, hasChicken, hasPork, hasSeafood.

//         Output only the JSON array without any additional text or commentary.
//         `,
//                 },
//             ],
//         },
//     });

//     const prompt = "Explain how AI works";

//     model.generateContent(prompt).then((response) => {
//         console.log(response);
//     });

//     fetch("/api/menu/dewick-dining/lunch/2025-02-22")
//         .then((res) => res.json())
//         .then((data) => {
//             const foodInfo = getFoodInfo(data, "2025-02-22");
//             const macros = getMacros("Halal Chicken Curry", data, "2025-02-22");
//             console.log(macros);
//             console.log(foodInfo);
//         });

//     return <>{<StorageBreakdown />}</>;
// }