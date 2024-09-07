import path from "path";
import fs from "fs";
import { getTodayDate } from "@/lib/action";
import { Label } from "@/components/ui/label";

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
      <div className="my-4 bg-gray-400 flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
        <div className="flex flex-col">
          <Label className="mb-1 text-sm font-bold">
            Bio Kalender
          </Label>
          <Label className=" text-xs">
            description of kalender
          </Label>
        </div>
        <div>
          <h3 className="text-sm font-semibold">
            Next appointment
          </h3>
          <h1 className="font-bold text-center">
            {nextBlue}
          </h1>
        </div>
      </div>
    </>
  );
}
