import path from "path";
import fs from "fs";
import { getTodayDate } from "@/lib/action";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface BZ {
  chosenBZ: number;
  setChosenBZ: React.Dispatch<
    React.SetStateAction<number>
  >;
}

export default async function Rest({
  chosenBZ,
}: BZ) {
  const filePath = path.join(
    process.cwd(),
    "data/restabfall.json"
  );
  const fileContents =
    await fs.promises.readFile(
      filePath,
      "utf8"
    );
  const blueAbfall = JSON.parse(
    fileContents
  );
  const todayData = getTodayDate();

  const mathingBlue = blueAbfall.find(
    (s: { BZ: number }) => {
      if (s.BZ == chosenBZ) {
        return s;
      }
    }
  );
  const nextBlue =
    mathingBlue?.Datum.filter(
      (datum: string) =>
        datum >= todayData
    ) // Filter dates
      .sort() // Sort dates in ascending order
      .at(0);

  return (
    <>
    <Link href="/trennen">
        <div className="my-4 bg-gray-400 flex flex-col md:flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
          <div className="flex flex-col mb-4 md:mb-0 md:mr-4">
            <Label className="text-lg font-semibol">
              Restabfall
            </Label>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-bold">
            Nächster Abholtermin
            </h3>
            <h1 className="text-lg font-bold text-center md:text-left">
              {nextBlue}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
}
