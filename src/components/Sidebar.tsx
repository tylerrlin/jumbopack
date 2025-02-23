import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faBars,
    faWandMagicSparkles,
    faCompass,
    IconDefinition,
    faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface SidebarLinkProps {
    title: string;
    icon: IconDefinition;
    href: string;
}

const SidebarLink = ({ title, icon, href }: SidebarLinkProps) => {
    return (
        <a
            href={href}
            className="flex items-center justify-start w-full gap-3 text-black font-inter h-[70px] pl-8 hover:bg-green1 duration-200"
        >
            <div className="w-[15%] h-full flex items-center justify-center">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="w-[80%] flex justify-start pl-3 text-base font-semibold">
                {title}
            </div>
        </a>
    );
};

const Sidebar = () => {
    return (
        <div className="md:flex hidden h-screen left-0 w-[225px] bg-sidebar flex-col items-start justify-start">
            <div className="w-full flex flex-col items-center justify-start gap-8 mt-[70px]">
                <Image
                    src="/logo.svg"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
                <h1 className="text-black font-montserrat text-2xl font-bold flex justify-center items-center w-full">
                    JumBelly
                </h1>
            </div>
            <div className="flex flex-col mt-12 w-full">
                <SidebarLink title="Home" icon={faHouse} href="/" />
                <SidebarLink title="Menu" icon={faBars} href="/menu" />
                <SidebarLink
                    title="Suggest"
                    icon={faWandMagicSparkles}
                    href="/"
                />
                <SidebarLink title="About" icon={faAddressCard} href="/" />
            </div>
        </div>
    );
};

export default Sidebar;