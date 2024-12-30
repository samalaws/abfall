import path from "path";
import fs from "fs";
import { getNextDate } from "@/lib/action";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface BZ {
  chosenBZ: number;
  setChosenBZ: React.Dispatch<
    React.SetStateAction<number>
  >;
}

export default async function Blue({chosenBZ}: BZ) {
  const filePath = path.join(process.cwd(), 'data/altpapier.json');
  const fileContents = await fs.promises.readFile(filePath, 'utf8');
  const blueAbfall = JSON.parse(fileContents);
  const todayData: string = new Date().toLocaleDateString("de-DE");

  const matchingBlue = blueAbfall.find((s: { BZ: number; }) => {
    if (s.BZ == chosenBZ) {
      return s;
    }    
  });
  const nextBlue = getNextDate(todayData, matchingBlue.Datum);
  
  return (
    <>
      <Link href="/trennen">
        <div className="my-4 bg-blue-500 flex flex-col md:flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
          <div className="flex flex-col mb-4 md:mb-0 md:mr-4">
              <Label className="text-lg font-semibol">Altpapier</Label>
          </div>
          <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xs font-bold">Nächster Abholtermin</h3>
              <h1 className="text-lg font-bold text-center md:text-left">{nextBlue}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}
