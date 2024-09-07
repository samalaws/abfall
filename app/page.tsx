"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {  CheckIcon } from "@radix-ui/react-icons";
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


  useEffect(() => {
    const loadStreets = async () => {
      try {
        const response = await fetch('/api/streets'); // Corrected path
        const data: Street[] = await response.json();
        setData(data);
      } catch (error) {
        console.error('Failed to fetch streets:', error);
      }
    };
    loadStreets();
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <div>  
        <h1 className="text-2xl font-thin text-center">Digitaler Abfallkalender der Stadt Geilenkirchen</h1>  
      </div>
      <div className="my-10">
        <Card>
          <CardHeader>
            <CardTitle>Straßen der Stadt Geilenkirchen</CardTitle>
            <CardDescription>Bitte waehlen Sie eine Straße aus</CardDescription>  
          </CardHeader>
          <CardContent className="min-h-[100px]">
            <form >
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    role="combobox"
                    aria-expanded={open}
                    className="w-[300px] justify-between"
                  >
                    {value ? data.find((street) => street.street === value)?.street : "Select Street"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Straße auswählen" className="h-9" />
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
          </CardContent>
        </Card>
      </div>
    </div>  
  );
}
