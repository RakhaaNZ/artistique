import Image from "next/image";
import React from "react";
import Logo from "./artistique-logo";
import Link from "next/link";
import { SignUpButton, LoginButton } from "./button";
import { CartIcon } from "./icons";
import { getServerSession } from "next-auth";
import LogoutButton from "../logout";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const ArtistiqueLogo = () => {
  return (
    <div className="flex-1">
      <Link href="/" className="btn btn-ghost text-xl text-base-200">
        <Logo />
      </Link>
    </div>
  );
};

export const Menu = () => {
  const links = [
    { name: "Arts", href: "/#arts-area" },
    { name: "Artists", href: "/menu/artists" },
    { name: "Auction", href: "/menu/auction" },
  ];
  const artsCategory = [
    { name: "Painting", dir: "painting" },
    { name: "Sculpture", dir: "sculpture" },
    { name: "Digital Arts", dir: "graphic" },
    { name: "Photography", dir: "photography" },
  ];

  return (
    <div className="flex-none gap-4">
      {links.map((link) => {
        return (
          <div className="dropdown dropdown-hover" key={link.name}>
            <label
              tabIndex={0}
              className="btn-neutral m-1 tracking-widest text-xl"
            >
              <Link href={link.href}>{link.name}</Link>
            </label>

            {/* untuk sub menu */}
            {link.name === "Arts" ? (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full lg:w-52"
              >
                {artsCategory.map((category) => (
                  <li key={category.name}>
                    <Link href={`/menu/arts/${category.dir}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

const CartAndProfile = () => {
  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle text-base-200">
          <Link href="/profile/cart">
            <ShoppingCartRoundedIcon fontSize="large" />
          </Link>
        </label>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
              alt="Tailwind CSS Navbar component"
              width={30}
              height={30}
              src="/profile-icon.webp"
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-full lg:w-52"
        >
          <li>
            <Link href="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default async function Navbar() {
  const session = await getServerSession();
  return (
    <div className="z-50 navbar glass flex flex-col lg:flex-row items-center gap-4 p-4 fixed top-0 w-[100vw]">
      <ArtistiqueLogo />
      <Menu />
      {!session && (
        <>
          <LoginButton href="/login" />
          <SignUpButton href="/signup" />
        </>
      )}
      {!!session && <CartAndProfile />}
    </div>
  );
}
