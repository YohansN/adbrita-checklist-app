import { Text, TouchableOpacity, View } from "react-native";
import {styles} from './styles';
import { MaterialIcons } from '@expo/vector-icons';

enum FormSection {
    SistemaEletrico = "SistemaEletrico",
    SistemaHidraulico = "SistemaHidraulico",
    Geral = "Geral",
    ItensDeSeguranca = "ItensDeSeguranca",
    ItensDeEstrutura = "ItensDeEstrutura",
    Adicionais = "Adicionais",
}

interface FormNextSectionButtonProps {
    nextSection: FormSection;
    setNextSection: (nextSection: FormSection) => void;
}

export default function FormNextSectionButton({nextSection, setNextSection}: FormNextSectionButtonProps){
    return(
        <View>
            <TouchableOpacity onPress={() => setNextSection(nextSection)}>
                <View style={styles.nextIconContainer}>
                    <MaterialIcons name="navigate-next" size={50} color="#fff"/>
                </View>
                <Text style={styles.text}>PRÓXIMO</Text>
            </TouchableOpacity>
        </View>
    )
}