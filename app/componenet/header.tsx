import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="h-32 flex items-center justify-between">
        <div>
          <Link
            href="https://www.alaws.de"
            target="_blank"
          >
            <h1 className="text-2xl font-thin">
              Samer<span className="font-extrabold">Alaws</span>
            </h1>
          </Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <div className="border-t border-gray-700 mb-10"/>
    </>
  );
}
