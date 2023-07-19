import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="h-12 text-red-700 flex justify-between p-4 lg:p-20 xl:p24">
      <Link href="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      <p>© ALL RIGHTS RESERVED</p>
    </div>
  );
}

export default Footer;
