import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export function NavigationMenu({
    className,
    children,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
    return (
        <NavigationMenuPrimitive.Root
            className={cn(
                "relative z-10 flex max-w-max flex-1 items-center justify-center",
                className,
            )}
            data-slot="navigation-menu"
            {...props}
        >
            {children}
        </NavigationMenuPrimitive.Root>
    );
}

export function NavigationMenuList({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
    return (
        <NavigationMenuPrimitive.List
            className={cn(
                "group flex flex-1 list-none items-center justify-center space-x-1",
                className,
            )}
            data-slot="navigation-menu-list"
            {...props}
        />
    );
}

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const navigationMenuTriggerStyle = cva([
    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
    "focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 ",
    "text-muted-foreground data-[active=true]:text-accent-foreground",
    "hover:bg-accent focus:bg-accent data-[active=true]:bg-accent",
]);

export function NavigationMenuLink(
    props: NavigationMenuPrimitive.NavigationMenuLinkProps &
        React.RefAttributes<HTMLAnchorElement>,
) {
    return (
        <NavigationMenuPrimitive.Link
            {...props}
            className={navigationMenuTriggerStyle({
                className: props.className,
            })}
        >
            {props.children}
        </NavigationMenuPrimitive.Link>
    );
}
