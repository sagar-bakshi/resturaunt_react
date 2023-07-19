"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, name: "Homepage", href: "/home" },
  { id: 2, name: "Menu", href: "/menu" },
  { id: 3, name: "Working Hours", href: "/" },
  { id: 4, name: "Contact", href: "/contact" },
];

const user = false;

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="flex flex-col justify-center items-center text-3xl space-y-5 text-white bg-red-500 absolute left-0 top-24 h-[calc(100vh-6rem)] w-full z-10">
          {links.map((link) => (
            <Link href={link.href} key={link.id} onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          ))}

          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}

          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
