import path from "path";
import fs from 'fs';
import { getTodayDate } from "@/lib/action";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface BZ {
  chosenBZ: number;
  setChosenBZ: React.Dispatch<React.SetStateAction<number>>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Yellow( {chosenBZ, setChosenBZ}: BZ) {

  const filePath = path.join(process.cwd(), 'data/Leichtverpackungen.json');
  const fileContents = await fs.promises.readFile(filePath, 'utf8');
  const yellowAbfall = JSON.parse(fileContents);
  const todayData = getTodayDate();

  const mathingYellow = yellowAbfall.find((s: { BZ: number; }) => {
    if (s.BZ == chosenBZ) {
      return s;
    }
  });
  const nextYellow = mathingYellow?.Datum
  .filter((datum: string) => datum >= todayData)  // Filter dates
  .sort()                                         // Sort dates in ascending order
  .at(0);                                         // Get the first matching date
  
  return (
    <>
      <Link href="/trennen">
        <div className="my-4 bg-yellow-400 flex flex-col md:flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
          <div className="flex flex-col mb-4 md:mb-0 md:mr-4">
              <Label className="text-lg font-semibol">Leichtverpackungen</Label>
          </div>
          <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xs font-bold">Nächster Abholtermin</h3>
              <h1 className="text-lg font-bold text-center md:text-left">{nextYellow}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}
