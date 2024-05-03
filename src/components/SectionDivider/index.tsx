import { Text, View } from "react-native";
import {styles} from './styles';

interface SectionDividerProps{
    title: string;
}

export default function SectionDivider({title}: SectionDividerProps){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.divider} />
        </View>
    );
}