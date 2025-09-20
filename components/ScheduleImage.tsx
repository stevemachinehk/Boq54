import { Image } from "expo-image";
import stylesUIX from '../components/Style';


type Props = {
    imgSource: string;
};

export default function ScheduleImage({imgSource}: Props)

{

    return <Image source= {imgSource} style = {stylesUIX.schedule}></Image>


}