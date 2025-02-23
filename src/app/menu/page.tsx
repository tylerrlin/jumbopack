"use client";

import React, { useState } from "react";
import MenuHeader from "@/components/MenuHeader";
import MenuItem from "@/components/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
    menuItems: string[];
}

const Menu = ({ menuItems }: MenuProps) => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    return (
        <div className="w-full h-screen flex justify-center items-center">
            {/* <div className="bg-slate-500 w-[10%] h-full"></div> */}
            <div
                className={`${
                    activeItem !== null ? "opacity-30" : ""
                } relative w-[80%] h-full flex flex-col gap-5 justify-center items-center duration-300 transition-all`}
            >
                <MenuHeader className="w-full" />
                <div className="rounded-xl p-5 w-full flex flex-wrap justify-center overflow-y-scroll max-h-[640px] h-full items-center gap-5">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <MenuItem
                            key={index}
                            name="General Gao's Chicken"
                            allergens={["Gluten", "Dairy"]}
                            setActiveItem={setActiveItem}
                            index={index}
                        />
                    ))}
                </div>
            </div>
            {activeItem !== null && (
                <div className="fixed align-center bg-white md:w-[60%] md:h-[80%] w-full h-full rounded-xl shadow-lg flex flex-col gap-5 p-8">
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => setActiveItem(null)}
                        size={"2x"}
                        className="absolute right-3 top-3 hover:cursor-pointer"
                    />
                    <h1 className="text-3xl font-semibold">
                        General Gao's Chicken
                    </h1>
                </div>
            )}
        </div>
    );
};

export default Menu;
