import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <div className="h-32 flex items-center justify-between">
      <div >
        <h1 className="text-2xl font-thin">
          Samer<span className="font-extrabold">Alaws</span>
        </h1>
      </div>
      <div>
        <ModeToggle/>
      </div>
    </div>
  );
}
