import React, { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { departureAirlines, nonCommercialCodes } from '@/data/airlines';

interface DepartureAirlineComboboxProps {
  value: string;
  onChange: (value: string) => void;
}

export const DepartureAirlineCombobox = ({ value, onChange }: DepartureAirlineComboboxProps) => {
  const [open, setOpen] = useState(false);
  const selectedAirline = departureAirlines.find(a => a.code === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "h-12 w-full justify-between border-2 border-gray-200 hover:border-primary focus:border-primary",
            !value && "text-muted-foreground"
          )}
        >
          {selectedAirline ? selectedAirline.name : "Select airline..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full min-w-[300px] p-0 z-50 bg-white" align="start">
        <Command>
          <CommandInput placeholder="Search airline..." />
          <CommandList>
            <CommandEmpty>No airline found.</CommandEmpty>
            <CommandGroup heading="Commercial Airlines">
              {departureAirlines.filter(a => !nonCommercialCodes.includes(a.code)).map(airline => (
                <CommandItem
                  key={airline.code}
                  value={airline.name}
                  onSelect={() => {
                    onChange(airline.code);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === airline.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {airline.name}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Non-Commercial">
              {departureAirlines.filter(a => nonCommercialCodes.includes(a.code)).map(airline => (
                <CommandItem
                  key={airline.code}
                  value={airline.name}
                  onSelect={() => {
                    onChange(airline.code);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === airline.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {airline.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
