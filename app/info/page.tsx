import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import fs from "fs";
import path from "path";
import Yellow from "../componenet/yellow";
import Bio from "../componenet/bio";
import Blue from "../componenet/blue";
import Rest from "../componenet/rest";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// Define the Street interface
interface Street {
  id: number;
  street: string;
  BZ: number;
  AP: string;
}

// Server Component in the App Directory
export default async function Info({
  searchParams,
}: {
  searchParams: { value?: string };
}) {
  const street = searchParams.value;

  // Read the file at build time or on server request
  const filePath = path.join(
    process.cwd(),
    "data/strasse.json"
  );
  const fileContents =
    await fs.promises.readFile(
      filePath,
      "utf8"
    );
  const streetData: Street[] =
    JSON.parse(fileContents);

  const matchingStreet =
    streetData.find(
      (s) => s.street === street
    );
  const chosenBZ =
    matchingStreet?.BZ || 0;

  return (
    <>
      <div className="my-auto flex flex-col w-full">
        <div className="flex gap-3">
          <Button
            variant="outline"
            size={"icon"}
            asChild>
            <Link href="/">
              <ChevronLeft className="3-6 w-3" />
            </Link>
          </Button>
          <h1 className="pt-1 text-lg tracking-tighter">
            Development works
          </h1>
        </div>
        <div className="pt-10 justify-center mx-auto">
          <Card className="w-[380px] mt-5 ">
            <CardHeader className="flex flex-row justify-between">
              <div className="justify-center text-center mx-auto">
                <CardTitle>
                  Abfallkalender
                </CardTitle>
                <CardDescription>
                  der Stadt Geilenkirchen
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <h1 className="text-base text-center font-bold">
                {"Ihre Straße: "}{" "}
                {matchingStreet?.street ||
                  "Nicht gefunden"}
              </h1>
              <h1 className="text-base text-center">
                {"Ihre Bezirksnummer: "}{" "}
                {matchingStreet?.BZ ||
                  "Nicht verfügbar"}
              </h1>
              {/* Ensure these components are Client Components */}
              <Yellow
                chosenBZ={chosenBZ}
                setChosenBZ={() => {
                  /* Implement logic here */
                }}
              />
              <Blue
                chosenBZ={chosenBZ}
                setChosenBZ={() => {
                  /* Implement logic here */
                }}
              />
              <Bio
                chosenBZ={chosenBZ}
                setChosenBZ={() => {
                  /* Implement logic here */
                }}
              />
              <Rest
                chosenBZ={chosenBZ}
                setChosenBZ={() => {
                  /* Implement logic here */
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

// Enable server-side data fetching
export async function generateStaticParams() {
  return [];
}
