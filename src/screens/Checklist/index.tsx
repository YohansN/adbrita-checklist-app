import { Button, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import FormTextInput from "../../components/FormTextInput";
import FormRadioButton from "../../components/FormRadioButton";
import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { FormProps } from './props';
import SectionDivider from "../../components/SectionDivider";
import FormItemNote from "../../components/FormItemNote";
import { CheckListActions } from "./action";

export default function CheckList(){
    const options: string[] = ["Sim",  "Não", "N.A"];
    const { control, handleSubmit } = useForm<FormProps>();
    const [answers, setAnswers] = useState({
        q1: -1, q2: -1, q3: -1, q4: -1, q5: -1, q6: -1, q7: -1, q8: -1, q9: -1,
        q10: -1, q11: -1, q12: -1, q13: -1, q14: -1, q15: -1, q16: -1, q17: -1,
        q18: -1, q19: -1, q20: -1, q21: -1, q22: -1, q23: -1, q24: -1, q25: -1,
        q26: -1, q27: -1, q28: -1, q29: -1, q30: -1, q31: -1, q32: -1, q33: -1, 
        q34: -1, q35: -1, q36: -1, q37: -1, q38: -1, q39: -1, q40: -1, q41: -1,  
    })

    const generalInfo = () => (
        <View style={styles.textInfo}>
                <Text>Checklist ADBRITA</Text>
                
                <Controller 
                    control={control}
                    name="empresa"
                    render={({ field: {onChange} }) => (
                        <FormTextInput 
                            textLabel="empresa:"
                            placeholder="Nome da empresa"
                            onChangeText={onChange}
                        />
                    )}
                />
                
                <Controller 
                    control={control}
                    name="fabricante"
                    render={({ field: {onChange} }) => (
                        <FormTextInput 
                            textLabel="fabricante/modelo:"
                            placeholder="Nome da fabricante ou modelo"
                            onChangeText={onChange}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="inspetor"
                    render={({ field: {onChange} }) => (
                        <FormTextInput 
                            textLabel="inspecionado por:"
                            placeholder="Seu nome"
                            onChangeText={onChange}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="quilometragem"
                    render={({ field: {onChange} }) => (
                        <FormTextInput 
                            textLabel="km:"
                            placeholder="Quilometragem"
                            onChangeText={onChange}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="veiculo"
                    render={({ field: {onChange} }) => (
                        <FormTextInput 
                            textLabel="veículo:"
                            placeholder="Veículo"
                            onChangeText={onChange}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="motorista"
                    render={({ field: {onChange} }) => (
                        <FormTextInput 
                            textLabel="Motorista:"
                            placeholder="Nome do motorista"
                            onChangeText={onChange}
                        />
                    )}
                />

            </View>
    )
    const vehicleInfo = () => (
        <View style={styles.radioInfo}>
                
            <SectionDivider title="Sistema Elétrico"/>

            <Controller 
                control={control}
                name="faroisDianteiros"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Farois Dianteiros:" 
                        options={options} 
                        selected={answers.q1} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q1: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsFaroisDianteiros"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="faroisTraseiros"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Farois Traseiros:" 
                        options={options} 
                        selected={answers.q2} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q2: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsFaroisTraseiros"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="luzDeFreio"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Luz de Freio:" 
                        options={options} 
                        selected={answers.q3} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q3: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsLuzDeFreio"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="sistemaPartida"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Sistema de Partida:" 
                        options={options} 
                        selected={answers.q4} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q4: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsSistemaPartida"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="condicoesBateria"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Condições da Bateria:" 
                        options={options} 
                        selected={answers.q5} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q5: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsCondicoesBateria"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />


            <Controller 
                control={control}
                name="tampaBateria"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Tampa da bateria:" 
                        options={options} 
                        selected={answers.q6} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q6: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsTampaBateria"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="funcionamentoPainel"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Funcionamento do painel:" 
                        options={options} 
                        selected={answers.q7} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q7: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsFuncionamentoPainel"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="alarmeRe"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Alarme de Ré:" 
                        options={options} 
                        selected={answers.q8} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q8: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsAlarmeRe"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />
            
            <Controller 
                control={control}
                name="buzina"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Buzina:" 
                        options={options} 
                        selected={answers.q9} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q9: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsBuzina"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <SectionDivider title="Sistema Hidráulico"/>

            <Controller 
                control={control}
                name="fixacaoMangueiras"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Fixação das mangueiras:" 
                        options={options} 
                        selected={answers.q10} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q10: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsFixacaoMangueiras"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="condicoesMangueiras"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Condições das mangueiras:" 
                        options={options} 
                        selected={answers.q11} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q11: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsCondicoesMangueiras"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="vazamanetoOleoMotor"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Vazamento de óleo do motor:" 
                        options={options} 
                        selected={answers.q12} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q12: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsVazamentoOleoMotor"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="vazamentoOleoDiesel"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Vazamento de óleo diesel:" 
                        options={options} 
                        selected={answers.q13} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q13: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsVazamentoOleoDiesel"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="vazamentoOleoHidraulico"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Vazamento de óleo hidráulico:" 
                        options={options} 
                        selected={answers.q14} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q14: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsVazamentoOleoHidraulico"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="fixacaoCilindrosHidraulicos"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Fixação dos cilindros hidráulicos:" 
                        options={options} 
                        selected={answers.q15} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q15: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsFixacaoCilindrosHidraulicos"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="pinosContrapinosHid"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Pinos e contrapinos dos cilindros hidráulicos:" 
                        options={options} 
                        selected={answers.q16} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q16: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsPinosContrapinosHid"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <SectionDivider title="Geral"/>

            <Controller 
                control={control}
                name="trincasEstrutura"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Trincas na estrutura:" 
                        options={options} 
                        selected={answers.q17} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q17: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsTrincasEstrutura"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="nivelOleoHid"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Nível do óleo hidráulico:" 
                        options={options} 
                        selected={answers.q18} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q18: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsNivelOleoHid"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="nivelAgua"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Nível da água:" 
                        options={options} 
                        selected={answers.q19} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q19: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsNivelAgua"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="nivelOleoDiesel"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Nível do óleo diesel:" 
                        options={options} 
                        selected={answers.q20} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q20: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsNivelOleoDiesel"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="pinosContraPinasConcha"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Pinos e contra pinas da concha:" 
                        options={options} 
                        selected={answers.q21} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q21: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsPinosContraPinasConcha"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="pneuStep"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Pneu Step:" 
                        options={options} 
                        selected={answers.q22} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q22: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsPneuStep"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="condicoesPneus"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Condições dos pneus:" 
                        options={options} 
                        selected={answers.q23} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q23: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsCondicoesPneus"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="documentosVeiculo"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Documentos do veículo:" 
                        options={options} 
                        selected={answers.q24} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q24: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsDocumentosVeiculo"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="aet"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="AET:" 
                        options={options} 
                        selected={answers.q25} 
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q25: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsAet"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <SectionDivider title="Itens de Segurança" />

            <Controller 
                control={control}
                name="limpadorParabrisa"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Limpador de parabrisas:" 
                        options={options} 
                        selected={answers.q26}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q26: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsLimpadorParabrisa"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="retrovisoresLaterais"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Retrovisores laterais:" 
                        options={options} 
                        selected={answers.q27}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q27: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsRetrovisoresLaterais"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="faixasReflexivas"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Faixas reflexivas:"
                        options={options} 
                        selected={answers.q28}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q28: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsFaixasReflexivas"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="faixasReflexivasParachoque"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Faixas reflexivas do parachoque:"
                        options={options} 
                        selected={answers.q29}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q29: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsFaixasReflexivasParachoque"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="assentoMotorista"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Assento do motorista:"
                        options={options} 
                        selected={answers.q30}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q30: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsAssentoMotorista"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="extintor"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Extrintor:"
                        options={options} 
                        selected={answers.q31}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q31: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsExtintor"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="kit"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="KIT (Triângulo, Macaco e Chave de roda):"
                        options={options} 
                        selected={answers.q32}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q32: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsKit"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="tacografo"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Tacógrafo:"
                        options={options} 
                        selected={answers.q33}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q33: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsTacografo"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="parabrisas"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Parabrisas:"
                        options={options} 
                        selected={answers.q34}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q34: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsParabrisas"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <SectionDivider title="Itens de Estrutura"/>

            <Controller 
                control={control}
                name="barraDirecao"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Barra de direção:"
                        options={options} 
                        selected={answers.q35}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q35: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsBarraDirecao"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="grampoChassi"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Grampo do chassi:"
                        options={options} 
                        selected={answers.q36}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q36: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsGrampoChassi"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="feixeMolas"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Feixe de molas:"
                        options={options} 
                        selected={answers.q37}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q37: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsFeixeMolas"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="transmissao"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Transmissão:"
                        options={options} 
                        selected={answers.q38}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q38: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsTransmissao"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <SectionDivider title="Adicionais"/>

            <Controller 
                control={control}
                name="pa"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Pá:"
                        options={options} 
                        selected={answers.q39}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q39: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsPa"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="calcos"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Calços:"
                        options={options} 
                        selected={answers.q40}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q40: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsCalcos"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

            <Controller 
                control={control}
                name="cintaCaboDeAco"
                render={({ field: {onChange} }) => (
                    <FormRadioButton 
                        itemName="Cinta ou Cabo de aço:"
                        options={options} 
                        selected={answers.q41}
                        onChangeSelect={(value, index) => {onChange(value); setAnswers(prevState => ({...prevState, q41: index}))}}
                    />
                )}
            />
            <Controller 
                control={control}
                name="obsCintaCaboDeAco"
                render={({ field: {onChange} }) => (
                    <FormItemNote onChangeText={(note) => onChange(note)} />
                )}
            />

        </View>
    )

    return(
        <ScrollView style={styles.container}>
            {generalInfo()}
            {vehicleInfo()}
            <Button title="enviar dados" onPress={handleSubmit(CheckListActions.submitForm)}></Button>
        </ScrollView>
    )
}