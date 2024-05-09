import { printToFileAsync } from "expo-print";
import pdfTemplate from "./pdfTemplate";
import { FormProps } from "./props";
import { shareAsync } from "expo-sharing";
import moment from 'moment';

export const CheckListActions = {
    
    submitForm: async (data: FormProps) => {
        CheckListActions.getCurrentlyLocalDate(data);
        const html = pdfTemplate(data);
        await CheckListActions.generatePdf(html);
    },

    generatePdf: async(html: string) =>{
        const file = await printToFileAsync({
            html: html,
            base64: false
        });
        await shareAsync(file.uri);
    },

    getCurrentlyLocalDate: (data: FormProps) => {
        var currentlyDate = moment().utcOffset("-03:00").format("DD/MM/YYYY");
        var currentlyHour = moment().utcOffset("-03:00").format("hh:mm a");
        data.data = currentlyDate;
        data.hora = currentlyHour;
    }
}