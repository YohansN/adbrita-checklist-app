import { Text, TouchableOpacity, View } from "react-native";
import {styles} from "./styles";

interface FormRadioButtonProps{
    itemName: string;
    options: string[];
    selected: number;
    onChangeSelect: (option: string, index: number) => void; 
}

export default function FormRadioButton({itemName, options, selected, onChangeSelect}: FormRadioButtonProps){
    return(
        <View style={styles.container}>
            <Text style={styles.itemLabel}>{itemName}</Text>
            <View style={styles.optionsWrapper}>
                {options.map((option, index) => (
                    <TouchableOpacity key={index} onPress={() => onChangeSelect(option, index)} style={styles.optionsContainer}>
                        <View style={styles.outterCircle}>
                            {selected === index ? <View style={styles.innerCircle}/> : null}
                        </View>
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}