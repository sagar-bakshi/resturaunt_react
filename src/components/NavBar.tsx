import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";
import Menu from "./Menu";

function NavBar() {
  const user = false;
  return (
    <div
      className="h-12 border-b-2 border-b-red-500 flex justify-between p-2 items-center uppercase
    text-red-500 md:h-24
    "
    >
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 px-4">
        <Link href="/home">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold">
        <Link href="/home">Massimo</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right LINKS */}
      <div className="hidden md:flex gap-4 px-4 justify-center items-center">
        <div className=" flex cursor-pointer text-white  gap-2 bg-orange-300 p-1 border rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123-456-789</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default NavBar;
