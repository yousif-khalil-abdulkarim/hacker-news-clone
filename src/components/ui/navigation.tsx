"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export interface MenuItem {
    title: string;
    href: string;
}

export interface NavigationProps {
    menuItems: MenuItem[];
}

export function Navigation({ menuItems }: NavigationProps) {
    const url = usePathname();

    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {menuItems.map((item, index) => {
                    const isActive = url === item.href;

                    return (
                        <NavigationMenuItem key={index}>
                            <Link legacyBehavior passHref href={item.href}>
                                <NavigationMenuLink data-active={isActive}>
                                    {item.title}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
