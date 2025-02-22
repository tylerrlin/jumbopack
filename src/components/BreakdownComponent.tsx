type Category = {
    nutrition: string;
    weight: number;
    color: string;
};
// protein
// fat
// carbs
// fiber

export default function BreakdownComponent() {
    const categories: Category[] = [
        { nutrition: "Protein", weight: 25, color: "bg-blue-500" },
        { nutrition: "Fat", weight: 25, color: "bg-red-500" },
        { nutrition: "Carbs", weight: 25, color: "bg-green-500" },
        { nutrition: "Fiber", weight: 25, color: "bg-yellow-500" },
    ];

    return (
        <div className="w-full max-w-lg p-4 mx-auto">
            {/* Storage Bar */}
            <div className="flex h-6 w-full rounded-full overflow-hidden border border-gray-300">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`${category.color}`}
                        style={{ width: `${category.weight}%` }}
                    />
                ))}
            </div>

            {/* Legend */}
            <div className="mt-3 space-y-1">
                {categories.map((category, index) => (
                    <div key={index} className="flex items-center text-sm">
                        <span
                            className={`w-3 h-3 mr-2 rounded-full ${category.color}`}
                        />
                        <span>
                            {category.nutrition} ({category.weight}%)
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
