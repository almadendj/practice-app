"use client";
import Link from "next/link";

type HeaderItemProps = {
  children: React.ReactNode;
  href?: string;
};

const HeaderItem = ({ children, href }: HeaderItemProps) => {
  return (
    <Link
      href={href ?? "#"}
      target={href && "_blank"}
      className="font-semibold text-white cursor-pointer hover:scale-105 duration-150"
    >
      {children}
    </Link>
  );
};

export default HeaderItem;
