import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../app/fonts/font.woff2",
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transiton items-center gap-x-1 hidden md:flex">
        <Image src="/logo.svg" alt="Logo" width={30} height={30}></Image>
        <p
          className={cn("text-lg text-neutral-700 mt-1", headingFont.className)}
        >
          TaskKy
        </p>
      </div>
    </Link>
  );
};

export default Logo;
