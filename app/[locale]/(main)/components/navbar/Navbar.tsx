import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";
import LocaleSwitcher from "../locale-switcher/LocaleSwitcher";
import NavLinks from "./NavLinks";
import { NavBarLink } from "@/api/types";

// export interface NavLink {
//   id: number;
//   navlink: string;
//   label: string;
// }

// async function getAllNavLinks() {
//   const navLinksPromise = await fetch("http://localhost:1337/api/nav-bars");
//   const navLinksData = await navLinksPromise.json();
//   return navLinksData?.data;
// }

const Navbar = async ({ locale }: { locale: string }) => {
  console.log(locale);
  // const { data: globalContent } = await getGlobalContent(locale);
  // const navLinks = globalContent?.navbar;

  const navLinks: NavBarLink[] = [
    {
      id: 1,
      link: "/about",
      name: "About",
    },
    {
      id: 2,
      link: "/contact",
      name: "Contact",
    },
  ];

  return (
    <nav className="bg-blue-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo and Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              </Link>
            </div>
            <div className="hidden sm:ml-auto sm:block">
              <div className="flex space-x-4">
                <NavLinks navLinks={navLinks} />
                <div>
                  <LocaleSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLinks navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
