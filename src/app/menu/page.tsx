"use client";

import React, { useState } from "react";
import MenuHeader from "@/components/MenuHeader";
import MenuItem from "@/components/MenuItem";

interface MenuProps {
    menuItems: string[];
}

const Menu = ({ menuItems }: MenuProps) => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[80%] h-full flex flex-col gap-5 justify-center items-center">
                <MenuHeader className="w-full" />
                <div className="w-full flex flex-wrap justify-center overflow-y-scroll h-[500px] items-center gap-5">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <MenuItem key={index} name="General Gao's Chicken" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
