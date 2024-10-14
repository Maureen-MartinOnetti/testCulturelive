import { Movie } from '../data/movies';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { ThumbsDown, ThumbsUp, Trash2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type MyCardProps = { data: Movie };

function MyCard(props: MyCardProps) {
    const progress = (props.data.likes / (props.data.likes + props.data.dislikes)) * 100;

    return (
        <Card className="relative sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w1/5">
            <Button className="absolute top-2 right-2" size={'sm'} variant={'ghost'}>
                <Trash2 className="w-4 h-4 hover:text-red-500 " />
            </Button>

            <CardHeader>
                <CardTitle>{props.data.title}</CardTitle>
                <CardDescription>
                    <Badge>{props.data.category}</Badge>
                </CardDescription>
            </CardHeader>

            <CardContent className="flex justify-center items-center">
                <img className="w-auto max-h-80 min-h-80 " src={props.data.image} alt={props.data.title} />
            </CardContent>

            <CardFooter className="flex justify-end items-center ">
                <div className="flex flex-col gap-2 items-end">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <Button size={'sm'} className=" hover:bg-green-500 ">
                            <ThumbsUp className="w-5 h-5 mr-2" />
                            {props.data.likes}
                        </Button>

                        <Button size={'sm'} variant={'outline'} className="hover:bg-red-500 hover:text-white">
                            <ThumbsDown className="w-5 h-5 mr-2" />
                            {props.data.dislikes}
                        </Button>
                    </div>

                    <Progress className="w-48" value={progress} />
                </div>
            </CardFooter>
        </Card>
    );
}

export default MyCard;
