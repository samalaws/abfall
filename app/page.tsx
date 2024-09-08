"use client"
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {  CheckIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface Street {
  id: number;
  street: string;
  BZ: string;
  AP: string;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState<Street[]>([]);
  const router = useRouter();



  useEffect(() => {
    const loadStreets = async () => {
      try {
        const response = await fetch('./api/streets'); // Corrected path
        const data: Street[] = await response.json();
        setData(data);
      } catch (error) {
        console.error('Failed to fetch streets:', error);
      }
    };
    loadStreets();
  }, []);

  const handleWeiterClick = () => {
    // Navigate to 'info' page with the selected street as a query parameter
    router.push(`/info?value=${encodeURIComponent(value)}`);
  };

  return (
    <div className="flex flex-col mt-5 items-center px-4 sm:px-2 md:px-6 lg:px-8">
      <div className="w-full">  
        <h1 className="text-2xl font-thin text-center sm:text-xl md:text-lg lg:text-2xl">
          Digitaler Abfallkalender der Stadt Geilenkirchen
        </h1>  
      </div>
      
      <div className="mt-10 flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Label className="py-5 font-thin text-center text-sm md:text-base lg:text-lg">
          Bitte eine Straße auswählen
        </Label>

        <div className="w-full">
          <form onSubmit={(e) => e.preventDefault()}>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  role="combobox"
                  aria-expanded={open}
                  className="w-full py-4 sm:py-3 md:py-4 lg:py-5 justify-between text-sm md:text-base lg:text-lg"
                >
                  {value ? data.find((street) => street.street === value)?.street : "Select Street"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <Command>
                  <CommandInput placeholder="Straße auswählen" className="h-9 text-sm md:text-base" />
                  <CommandList>
                    <CommandEmpty>Keine Straßen gefunden</CommandEmpty>
                    <CommandGroup>
                      {data.map((street) => (
                        <CommandItem
                          key={street.id}
                          value={street.street}
                          onSelect={(selectedValue) => {
                            setValue(selectedValue);
                            setOpen(false);
                          }}
                        >
                          {street.street}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              value === street.street ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </form>
          <Button 
            className="mt-5 w-full py-3 sm:py-2 md:py-3 lg:py-4 text-sm md:text-base lg:text-lg" 
            variant="default" 
            onClick={handleWeiterClick}
          >
            Weiter
          </Button>
        </div>
      </div>
    </div>

  );
}
