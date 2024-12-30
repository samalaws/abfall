import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="min-h-32 flex flex-col sm:flex-row items-center justify-between p-4">
        <div className="flex items-center mb-4 sm:mb-0">
            <h1>
              <span className="font-bold text-base"> Abfallkalender 2025 </span>
              <span className="font-thin text-base"> Stadt Geilenkirchen</span>
            </h1>
        </div>
        <nav className="flex flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Link href="/" passHref className=" font-thin hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/trennen" passHref className=" font-thin hover:text-gray-400 transition">
            Info
          </Link>
          <Link href="/impressum" passHref className=" font-thin hover:text-gray-400 transition">
            Impressum
          </Link>
          <div className="ml-4">
            <ModeToggle />
          </div>
        </nav>
      </header>
      <div className="border-b border-gray-700 sm:my-10"/>
    </>
    
  );
}
