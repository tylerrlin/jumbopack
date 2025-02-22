export default function StorageBreakdown() {
    const categories = [
        { name: "Apps", value: 40, color: "bg-blue-500" },
        { name: "Photos", value: 25, color: "bg-yellow-500" },
        { name: "System", value: 15, color: "bg-gray-400" },
        { name: "Other", value: 10, color: "bg-green-500" },
        { name: "Free", value: 10, color: "bg-gray-300" },
    ];

    return (
        <div className="w-full max-w-lg p-4 mx-auto">
            {/* Storage Bar */}
            <div className="flex h-6 w-full rounded-full overflow-hidden border border-gray-300">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`${category.color}`}
                        style={{ width: `${category.value}%` }}
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
                            {category.name} ({category.value}%)
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
