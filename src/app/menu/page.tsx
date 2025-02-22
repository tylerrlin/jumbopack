"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface MenuHeaderCardProps {
    className?: string;
    title: string;
    value: string;
    dropdown_options?: string[];
    setVal?: (val: string) => void;
    dropdownOpen?: boolean;
    setDropdownOpen?: (val: boolean) => void;
}

const MenuHeaderCard = ({
    className,
    title,
    value,
    dropdown_options,
    setVal,
    dropdownOpen,
    setDropdownOpen,
}: MenuHeaderCardProps) => {
    return (
        <div
            className={cn(
                "relative max-w-[180px] flex-grow h-[90px] rounded-xl flex-col justify-center items-center w-full select-none",
                dropdown_options
                    ? "hover:cursor-pointer hover:bg-green1 hover:text-black duration-200 transition-all"
                    : "pointer-events-none",
                className
            )}
            onClick={() => setDropdownOpen(!dropdownOpen)}
        >
            <div className="flex justify-start text-sm font-semibold pl-[15px] pt-[15px] h-[10%] w-full">
                {title}
            </div>
            <div className="text-xl font-semibold flex pl-[20px] items-end pb-[22px] h-[90%] w-full">
                {value}
            </div>
            {dropdown_options && (
                <FontAwesomeIcon
                    icon={faCaretDown}
                    className="absolute right-5 bottom-5"
                />
            )}
            {dropdownOpen && (
                <div
                    className={cn(
                        "absolute top-[100px] w-full rounded-xl shadow-lg",
                        className
                    )}
                >
                    {dropdown_options.map((option, index) => (
                        <button
                            key={index}
                            className="w-full h-[40px] text-sm font-semibold flex justify-start items-center pl-[15px]"
                            onClick={() => {
                                setDropdownOpen(false);
                                setVal(option);
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const Menu = () => {
    const [location, setLocation] = useState("Dewick");
    const [mealPeriod, setMealPeriod] = useState("Lunch");
    const [sortBy, setSortBy] = useState("None");
    const [dropdowns, setDropdowns] = useState({
        location: false,
        mealPeriod: false,
        sortBy: false,
    });

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[80%] flex gap-3 justify-center items-center">
                <MenuHeaderCard
                    className="bg-green1 text-black"
                    title="Current Date"
                    value="Mon Feb 22"
                />
                <MenuHeaderCard
                    className="bg-green2 text-black"
                    title="Location"
                    value={location}
                    dropdown_options={["Dewick", "Carmichael"]}
                    setVal={setLocation}
                    dropdownOpen={dropdowns.location}
                    setDropdownOpen={(val) =>
                        setDropdowns({
                            location: val,
                            mealPeriod: false,
                            sortBy: false,
                        })
                    }
                />
                <MenuHeaderCard
                    className="bg-green3 text-white"
                    title="Meal Period"
                    value={mealPeriod}
                    dropdown_options={["Breakfast", "Lunch", "Dinner"]}
                    setVal={setMealPeriod}
                    dropdownOpen={dropdowns.mealPeriod}
                    setDropdownOpen={(val) =>
                        setDropdowns({
                            location: false,
                            mealPeriod: val,
                            sortBy: false,
                        })
                    }
                />
                <MenuHeaderCard
                    className="bg-green4 text-white"
                    title="Sort By"
                    value={sortBy}
                    dropdown_options={["None", "Calories", "Protein", "Fat"]}
                    setVal={setSortBy}
                    dropdownOpen={dropdowns.sortBy}
                    setDropdownOpen={(val) =>
                        setDropdowns({
                            location: false,
                            mealPeriod: false,
                            sortBy: val,
                        })
                    }
                />
            </div>
        </div>
    );
};

export default Menu;
