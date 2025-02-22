"use client";

import StorageBreakdown from "@/components/BreakdownComponent";
import { getFoodInfo, getMacros } from "@/utils/menuHelper";

export default function Home() {
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
