"use client";
import { z } from "zod"; // Import Zod
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define your Zod schema
const schema = z.object({
  street: z.string().nonempty("Straße ist erforderlich"), // Ensures street is not empty
});

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
  const [formValues, setFormValues] = useState({ street: "" });
  const [errors, setErrors] = useState<{ street?: string }>({});

  useEffect(() => {
    const loadStreets = async () => {
      try {
        const response = await fetch('./api/streets');
        const data: Street[] = await response.json();
        setData(data);
      } catch (error) {
        console.error('Failed to fetch streets:', error);
      }
    };
    loadStreets();
  }, []);

  const handleWeiterClick = () => {
    try {
      schema.parse(formValues); 
      router.push(`/info?value=${encodeURIComponent(value)}`);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: { street?: string } = {};
        error.errors.forEach((issue) => {
          formattedErrors[issue.path[0] as keyof typeof formattedErrors] = issue.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  const handleStreetSelect = (selectedValue: string) => {
    setValue(selectedValue);
    setOpen(false);
    setFormValues({ street: selectedValue }); // Update form values on selection
  };

  return (
    <div className="flex flex-col mt-5 items-center px-4 sm:px-2 md:px-6 lg:px-8">
      <div className="w-full">  
        <h1 className="text-2xl font-thin text-center sm:text-xl md:text-lg lg:text-2xl">
          Digitaler Abfallkalender der Stadt Geilenkirchen
        </h1>  
      </div>
      
      <div className="mt-10 flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <div className="w-[280px] mx-auto">
          <form onSubmit={(e) => e.preventDefault()}>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  role="combobox"
                  aria-expanded={open}
                  className="w-full py-4 sm:py-3 md:py-4 lg:py-5 justify-between text-sm md:text-base lg:text-lg"
                >
                  {value ? data.find((street) => street.street === value)?.street : "Eine Straße auswählen"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[280px]">
                <Command>
                  <CommandInput placeholder="Straße auswählen" className=" w-full h-9 text-sm md:text-base" />
                  <CommandList>
                    <CommandEmpty>Keine Straßen gefunden</CommandEmpty>
                    <CommandGroup>
                      {data.map((street) => (
                        <CommandItem
                          key={street.id}
                          value={street.street}
                          onSelect={handleStreetSelect}
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
          {errors.street && <p className="text-red-500 font-thin text-xs mt-1">{errors.street}</p>}
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
