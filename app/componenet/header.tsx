import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="min-h-32 flex border-b border-gray-700  mb-5 items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="https://www.alaws.de" passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-thin hover:underline"
          >
            <h1>
              Samer<span className="font-bold">Alaws</span>
            </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <nav className="flex-grow flex justify-center space-x-8">
          <Link href="/" passHref
          className="text-xl font-thin hover:text-gray-400"
          >Home
          </Link>
          <Link href="/impressum" passHref
            className="text-xl font-thin hover:text-gray-400"
          >
            Impressum
          </Link>
        </nav>  
        <div className="ml-4">
          <ModeToggle />
        </div>
      </div>   
    </header>
  );
}
