"use client";

import React, { useState } from "react";
import MenuHeader from "@/components/MenuHeader";
import MenuItem from "@/components/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
    menuItems: string[];
}

const Menu = ({ menuItems }: MenuProps) => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            {/* <div className="bg-slate-500 w-[10%] h-full"></div> */}
            <div className="relative w-[80%] h-full flex flex-col gap-5 justify-center items-center">
                <MenuHeader className="w-full" />
                <div className="rounded-xl p-5 w-full flex flex-wrap justify-center overflow-y-scroll h-[590px] items-center gap-5">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <MenuItem
                            key={index}
                            name="General Gao's Chicken"
                            allergens={["Gluten", "Dairy"]}
                        />
                    ))}
                </div>
                {/* <div className="absolute align-center bottom-7">
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        className="text-green3 text-5xl animate-bounce"
                    />
                </div> */}
            </div>
        </div>
    );
};

export default Menu;
