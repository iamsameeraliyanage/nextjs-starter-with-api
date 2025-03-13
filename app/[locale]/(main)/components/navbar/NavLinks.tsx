"use client";

import { NavBarLink } from "@/api/types";
import { Link, usePathname } from "@/i18n/routing";
import React from "react";

const NavLinks = ({ navLinks }: { navLinks: NavBarLink[] }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <>
      {navLinks.map((link: NavBarLink) => (
        <Link
          key={link.id}
          href={link.link}
          className={`rounded-md px-3 py-2 text-sm font-medium ${
            isActive(link.link)
              ? "bg-blue-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
