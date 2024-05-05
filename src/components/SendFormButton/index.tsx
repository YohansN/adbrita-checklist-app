import { Text, TouchableOpacity, View } from "react-native";
import {styles} from './styles';

export default function SendFormButton({action}: {action: () => void}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={action}>
                <Text style={styles.text}>Gerar PDF</Text>
            </TouchableOpacity>
        </View>
    )
}