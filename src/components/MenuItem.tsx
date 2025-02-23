import { cn } from "@/utils/cn";
import React from "react";

interface ItemBarProps {
    amount: number;
    max: number;
    type: string;
    className?: string;
}

const ItemBar = ({ amount, max, type, className }: ItemBarProps) => {
    return (
        <div className="flex h-[50%] gap-2">
            <div className="relative w-[5px] bg-white h-full rounded-xl outline outline-2 outline-green4">
                <div
                    className={cn(
                        `w-full bg-green4 rounded-xl absolute bottom-0 min-h-[5px]`,
                        className
                    )}
                    style={{ height: (amount / max) * 100 + "%" }}
                ></div>
            </div>
            <div className="h-full w-[50px] flex flex-col items-start justify-end">
                <h1 className="font-bold md:text-sm text-xs">
                    {amount + " g"}
                </h1>
                <h2 className="text-gray-600 text-xs">{type}</h2>
            </div>
        </div>
    );
};

interface MenuItemProps {
    className?: string;
    allergens?: string[];
    name: string;
}

const MenuItem = ({ className, name, allergens }: MenuItemProps) => {
    return (
        <div className="lg:max-w-[45%] w-full bg-white h-[170px] rounded-xl flex flex-col justify-evenly items-center">
            <div className="w-full justify-start flex pl-[25px] text-xl font-semibold pt-[10px]">
                {name}
            </div>
            <div className="h-[20px] flex justify-start w-full items-center pl-[25px] pt-[5px] gap-2">
                {allergens &&
                    allergens.map((allergen, index) => (
                        <div
                            key={index}
                            className="text-xs rounded-md px-[10px] h-[20px] bg-green4 text-white flex justify-center items-center font-bold"
                        >
                            {allergen.toUpperCase()}
                        </div>
                    ))}
            </div>
            <div className="h-[70px] w-full flex items-center justify-start pl-[30px] md:gap-5">
                <ItemBar
                    amount={50}
                    max={100}
                    type="Protein"
                    className="bg-green3"
                />
                <ItemBar
                    amount={12}
                    max={50}
                    type="Fat"
                    className="bg-green2"
                />
                <ItemBar
                    amount={0}
                    max={50}
                    type="Carbs"
                    className="bg-green1"
                />
                <ItemBar
                    amount={100}
                    max={200}
                    type="Calories"
                    className="bg-gray-400"
                />
            </div>
        </div>
    );
};

export default MenuItem;
