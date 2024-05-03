import { Text, TextInput, View } from 'react-native';
import {styles} from './styles';

interface FormItemNoteProps{
    onChangeText: (value: string) => void;
}

export default function FormItemNote({onChangeText}: FormItemNoteProps){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Observação:</Text>
            <TextInput style={styles.input} placeholder="Adicione uma observação se necessário" onChangeText={onChangeText}/>
        </View>
    )
}