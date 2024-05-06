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

interface FormPreviousSectionButtonProps {
    previousSection: FormSection;
    setPreviousSection: (nextSection: FormSection) => void;
}

export default function FormPreviousSectionButton({previousSection, setPreviousSection}: FormPreviousSectionButtonProps){
    return(
        <View>
            <TouchableOpacity onPress={() => setPreviousSection(previousSection)}>
                <View style={styles.nextIconContainer}>
                    <MaterialIcons name="navigate-before" size={50} color="#fff" />
                </View>
                <Text style={styles.text}>ANTERIOR</Text>
            </TouchableOpacity>
        </View>
    )
}