import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

interface FormTextInputProps {
    textLabel: string;
    placeholder: string;
    onChangeText: (value: string) => void;
}

export default function FormTextInput({textLabel, placeholder, onChangeText}: FormTextInputProps){
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.label}>{textLabel}</Text>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} style={styles.textInput}/>
        </View>
    )
    
}