import { printToFileAsync } from "expo-print";
import pdfTemplate from "./pdfTemplate";
import { FormProps } from "./props";
import { shareAsync } from "expo-sharing";

export const CheckListActions = {
    
    submitForm: async (data: FormProps) => {
        //console.log(data);
        const html = pdfTemplate(data);
        await CheckListActions.generatePdf(html);
    },

    generatePdf: async(html: string) =>{
        const file = await printToFileAsync({
            html: html,
            base64: false
        });
        await shareAsync(file.uri);
    }
}