import React from "react";

interface MenuItemProps {
    className?: string;
    name: string;
}

const MenuItem = ({ className, name }: MenuItemProps) => {
    return (
        <div className="lg:max-w-[45%] w-full bg-white h-[150px] rounded-xl flex flex-col justify-center items-center">
            <div className="w-full justify-start flex pl-[25px] text-xl font-semibold">
                {name}
            </div>
            <div className="h-[80px] bg-red-200 w-full"></div>
        </div>
    );
};

export default MenuItem;
