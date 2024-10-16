import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const parPage = [
    {
        value: 4,
        label: '4'
    },
    {
        value: 8,
        label: '8'
    },
    {
        value: 12,
        label: '12'
    }
];

type ParPageSelecteurProps = {
    onSelect: (arg: number) => void;
};

export function ParPageSelecteur(props: ParPageSelecteurProps) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(parPage[0].value);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-[80px] justify-between">
                    {value}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[80px] p-0">
                <Command>
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {parPage.map((el) => (
                                <CommandItem
                                    key={el.label}
                                    value={el.value.toString()}
                                    onSelect={(currentValue) => {
                                        const numberValue = Number(currentValue);
                                        setValue(numberValue);
                                        props.onSelect(numberValue);
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn('mr-2 h-4 w-4', value === el.value ? 'opacity-100' : 'opacity-0')}
                                    />
                                    {el.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
