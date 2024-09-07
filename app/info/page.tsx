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
      <div className="flex h-screen w-full items-center justify-center">
        <Card className="w-[380px] mt-5">
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
            <Bio
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
            <Rest
              chosenBZ={chosenBZ}
              setChosenBZ={() => {
                /* Implement logic here */
              }}
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

// Enable server-side data fetching
export async function generateStaticParams() {
  return [];
}
