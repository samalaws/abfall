import path from "path";
import fs from 'fs';
import { getTodayDate } from "@/lib/action";
import { Label } from "@/components/ui/label";

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
      <div className="my-4 bg-yellow-300 flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
        <div className="flex flex-col">
            <Label className="mb-1 text-sm font-semibold">Yellow Kalender</Label>
            <Label className=" text-xs">description of kalender</Label>
        </div>
        <div>
            <h3 className="text-sm font-bold">Next appointment</h3>
            <h1 className="font-bold text-center">{nextYellow}</h1>
        </div>
      </div>
    </>
  );
}
