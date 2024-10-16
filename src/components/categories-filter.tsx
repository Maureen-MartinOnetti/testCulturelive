import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type CategoriesFilterProps = {
    categories: string[];
    onSelect: (category: string) => void;
};

export function CategoriesFilter(props: CategoriesFilterProps) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    //On écoute les changements du nombres de catégories que l'on
    //A chaque changement du nombre, le code à l'intérieur s'execute
    React.useEffect(() => {
        setValue(''); //On reset la selection
        props.onSelect(''); //On notifie le parent que l'on a reset la selection
    }, [props.categories.length]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-[300px] justify-between">
                    {value || 'Selectionner une catégorie'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0">
                <Command>
                    <CommandInput placeholder="rechercher une catégorie" />
                    <CommandList>
                        <CommandEmpty>Aucune catégorie trouvée</CommandEmpty>
                        <CommandGroup>
                            {props.categories.map((category) => (
                                <CommandItem
                                    key={category}
                                    value={category}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? '' : currentValue); //On change la valeur en interne du composant
                                        props.onSelect(currentValue === value ? '' : currentValue); //On notifie le parent de la nouvelle valeur
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn('mr-2 h-4 w-4', value === category ? 'opacity-100' : 'opacity-0')}
                                    />
                                    {category}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
