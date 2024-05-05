import { FormProps } from "react-hook-form";

export default function pdfTemplate(data: any): string{
    return `
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  h1 {
    text-align: center;
    background-color: #02407C;
    color: #F3F3F3;
    padding: 20px 0;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    border: 1px solid #8e8e8e;
    text-align: left;
    padding: 8px;
    width: 50%;
  }
  th {
    background-color: #e2e2e2;
  }
  .alt-row {
    background-color: #F2F2F2;
  }
  
  hr.rounded {
  border-top: 8px solid #bbb;
  border-radius: 5px;
  }

  p.declaracao{
    text-align: center;
    font-weight: bold;
  }
  p.declaracao>span{
    text-decoration: underline;
  }
  p.visto{
    text-align: center;
    font-weight: bold;
  }
  p.visto>span{
    text-decoration: underline;
  }


</style>
</head>
<body>

<H1>AD BRITA</H1>
<h2>CHECK LIST - INSPEÇÃO VEICULAR</h2>

<table>
  <tr>
    <th>Empresa</th>
    <td>${data.empresa}</td>
  </tr>
  <tr>
    <th>Fábrica/Modelo</th>
    <td>${data.fabricante}</td>
  </tr>
  <tr>
    <th>Inspencionado Por</th>
    <td>${data.inspetor}</td>
  </tr>
  <tr>
    <th>KM</th>
    <td>${data.quilometragem}</td>
  </tr>
  <tr>
    <th>Veículo</th>
    <td>${data.veiculo}</td>
  </tr>
  <tr>
    <th>Data</th>
    <td>01/10/2002</td>
  </tr>
  <tr>
    <th>Hora</th>
    <td>12:22</td>
  </tr>
  <tr>
    <th>Motorista</th>
    <td>${data.motorista}</td>
  </tr>
</table>

<h3>Itens vistoriados</h3>

<table>
  <tr>
    <th>1 - SISTEMA ELÉTRICO</th>
    <th>Condição</th>
  </tr>
  <tr class="alt-row">
    <td>1.1 - FAROIS DIANTEIROS</td>
    <td>${data.faroisDianteiros}</td>
  </tr>
  <tr>
    <td>1.2 - FAROIS TRASEIROS</td>
    <td>${data.faroisTraseiros}</td>
  </tr>
  <tr class="alt-row">
    <td>1.3 - LÚZ DE FREIO</td>
    <td>${data.luzDeFreio}</td>
  </tr>
  <tr>
    <td>1.4 - SISTEMA DE PARTIDA</td>
    <td>${data.sistemaPartida}</td>
  </tr>
  <tr class="alt-row">
    <td>1.5 - CONDIÇÕES DA BATERIA</td>
    <td>${data.condicoesBateria}</td>
  </tr>
  <tr>
    <td>1.6 - TAMPA DA BATERIA</td>
    <td>${data.tampaBateria}</td>
  </tr>
  <tr class="alt-row">
    <td>1.7 - FUNCIONAMENTO DO PAINEL</td>
    <td>${data.funcionamentoPainel}</td>
  </tr>
  <tr>
    <td>1.8 - ALARME DE RÉ</td>
    <td>${data.alarmeRe}</td>
  </tr>
  <tr class="alt-row">
    <td>1.9 - BUZINA</td>
    <td>${data.buzina}</td>
  </tr>
</table>

<br>

<table>
  <tr>
    <th>2 - SISTEMA HIDRÁULICO</th>
    <th>Condição</th>
  </tr>
  <tr class="alt-row">
    <td>2.1 - FIXAÇÃO DAS MANGUEIRAS</td>
    <td>${data.fixacaoMangueiras}</td>
  </tr>
  <tr>
    <td>2.2 - CONDIÇÕES DAS MANGUEIRAS</td>
    <td>${data.condicoesMangueiras}</td>
  </tr>
  <tr class="alt-row">
    <td>2.3 - VAZAMENTO DE ÓLEO DO MOTOR</td>
    <td>${data.vazamanetoOleoMotor}</td>
  </tr>
  <tr>
    <td>2.4 - VAZAMENTO DE ÓLEO DIESEL</td>
    <td>${data.vazamentoOleoDiesel}</td>
  </tr>
  <tr class="alt-row">
    <td>2.5 - VAZAMENTO DE ÓLEO HIDRÁULICO</td>
    <td>${data.vazamentoOleoHidraulico}</td>
  </tr>
  <tr>
    <td>2.6 - FIXAÇÃO DOS CILIDROS HIDRÁULICOS</td>
    <td>${data.fixacaoCilindrosHidraulicos}</td>
  </tr>
  <tr class="alt-row">
    <td>2.7 - PINOS E CONTRAPINOS DOS CILINDROS HIDRÁULICOS</td>
    <td>${data.pinosContrapinosHid}</td>
  </tr>
</table>

<br>

<table>
  <tr>
    <th>3 - GERAL</th>
    <th>Condição</th>
  </tr>
  <tr class="alt-row">
    <td>3.1 - TRINCAS NA ESTRUTURA</td>
    <td>${data.trincasEstrutura}</td>
  </tr>
  <tr>
    <td>3.2 - NÍVEL DO ÓLEO HIDRÁULICO</td>
    <td>${data.nivelOleoHid}</td>
  </tr>
  <tr class="alt-row">
    <td>3.3 - NÍVEL DA ÁGUA</td>
    <td>${data.nivelAgua}</td>
  </tr>
  <tr>
    <td>3.4 - NÍVEL DO ÓLEO DIESEL</td>
    <td>${data.nivelOleoDiesel}</td>
  </tr>
  <tr class="alt-row">
    <td>3.5 - PINOS E CONTRA PINAS DA CONCHA</td>
    <td>${data.pinosContraPinasConcha}</td>
  </tr>
  <tr>
    <td>3.6 - PNEU STEP</td>
    <td>${data.pneuStep}</td>
  </tr>
  <tr class="alt-row">
    <td>3.7 - CONDIÇÕES DOS PNEUS</td>
    <td>${data.condicoesPneus}</td>
  </tr>
  <tr>
    <td>3.8 - DOCUMENTOS DO VEÍCULO</td>
    <td>${data.documentosVeiculo}</td>
  </tr>
  <tr class="alt-row">
    <td>3.9 - AET</td>
    <td>${data.aet}</td>
  </tr>
</table>

<br>

<table>
  <tr>
    <th>4 - ITENS DE SEGURANÇA</th>
    <th>Condição</th>
  </tr>
  <tr class="alt-row">
    <td>4.1 - LIMPADOR DE PARABRISA</td>
    <td>${data.limpadorParabrisa}</td>
  </tr>
  <tr>
    <td>4.2 - RETROVISORES LATERAIS</td>
    <td>${data.retrovisoresLaterais}</td>
  </tr>
  <tr class="alt-row">
    <td>4.3 - FAIXAS REFLEXIVAS</td>
    <td>${data.faixasReflexivas}</td>
  </tr>
  <tr>
    <td>4.4 - FAIXA REFLEXIVA DO PARACHOQUE</td>
    <td>${data.faixasReflexivasParachoque}</td>
  </tr>
  <tr class="alt-row">
    <td>4.5 - ASSENTO DO MOTORISTA</td>
    <td>${data.assentoMotorista}</td>
  </tr>
  <tr>
    <td>4.6 - EXTINTOR</td>
    <td>${data.extintor}</td>
  </tr>
  <tr class="alt-row">
    <td>4.7 - KIT (TRIÂNGULO, MACACO E CHAVE DE RODA)</td>
    <td>${data.kit}</td>
  </tr>
  <tr>
    <td>4.8 - TACÓGRAFO</td>
    <td>${data.tacografo}</td>
  </tr>
  <tr class="alt-row">
    <td>4.9 - PARABRISAS</td>
    <td>${data.parabrisas}</td>
  </tr>
</table>

<br>

<table>
  <tr>
    <th>5 - ITENS DE ESTRUTURA</th>
    <th>Condição</th>
  </tr>
  <tr class="alt-row">
    <td>5.1 - BARRA DE DIREÇÃO</td>
    <td>${data.barraDirecao}</td>
  </tr>
  <tr>
    <td>5.2 - GRAMPO DO CHASSI</td>
    <td>${data.grampoChassi}</td>
  </tr>
  <tr class="alt-row">
    <td>5.3 - FEIXE DE MOLAS</td>
    <td>${data.feixeMolas}</td>
  </tr>
  <tr>
    <td>5.4 - TRANSMISSÃO</td>
    <td>${data.transmissao}</td>
  </tr>
</table>

<br>

<table>
  <tr>
    <th>6 - ADICIONAIS</th>
    <th>Condição</th>
  </tr>
  <tr class="alt-row">
    <td>6.1 - PÁ</td>
    <td>${data.pa}</td>
  </tr>
  <tr>
    <td>6.2 - CALÇOS</td>
    <td>${data.calcos}</td>
  </tr>
  <tr class="alt-row">
    <td>6.3 - CINTA OU CABO DE AÇO</td>
    <td>${data.cintaCaboDeAco}</td>
  </tr>
</table>

<br>

<p class="declaracao">DECLARAMOS QUE O EQUIPAMENTO POR NÓS VISTORIADO, NOS ITENS ACIMA, ENCONTRA-SE EM: 
  <span>resposta resposta resposta resposta resposta resposta resposta resposta</span>
</p>
<p class="visto">VISTO DO MOTORISTA: <span>                                 </span></p>
</body>
</html>

`;
} 
            