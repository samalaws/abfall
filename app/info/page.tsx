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
  const filePath = path.join(process.cwd(), "data/strasse.json");
  const fileContents = await fs.promises.readFile(filePath, "utf8");
  const streetData: Street[] = JSON.parse(fileContents);

  const matchingStreet = streetData.find((s) => s.street === street);
  const chosenBZ = matchingStreet?.BZ || 0;

  return (
    <>
      <div className="my-auto flex flex-col w-full px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-5">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </Button>
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight pt-1">
            Development works
          </h1>
        </div>

        {/* Card Section */}
        <div className="flex justify-center pt-10">
          <Card className="w-full max-w-[380px] lg:max-w-[500px]">
            <CardHeader className="text-center">
              <div className="mx-auto">
                <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">
                  Abfallkalender
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  der Stadt Geilenkirchen
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <h1 className="text-base lg:text-lg text-center font-bold">
                {"Ihre Straße: "} {matchingStreet?.street || "Nicht gefunden"}
              </h1>
              <h1 className="text-base lg:text-lg text-center">
                {"Ihre Bezirksnummer: "} {matchingStreet?.BZ || "Nicht verfügbar"}
              </h1>

              {/* Client Components */}
              <div className="mt-4 space-y-4">
                <Yellow chosenBZ={chosenBZ} setChosenBZ={() => {}} />
                <Blue chosenBZ={chosenBZ} setChosenBZ={() => {}} />
                <Bio chosenBZ={chosenBZ} setChosenBZ={() => {}} />
                <Rest chosenBZ={chosenBZ} setChosenBZ={() => {}} />
              </div>
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
