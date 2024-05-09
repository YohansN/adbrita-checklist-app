export default function pdfTemplate(data: any): string{
    return `
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  @page {
    margin: 20px;
  }

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
    <td>${data.data}</td>
  </tr>
  <tr>
    <th>Hora</th>
    <td>${data.hora}</td>
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
    <th>Observação</th>
  </tr>
  <tr class="alt-row">
    <td>1.1 - FAROIS DIANTEIROS</td>
    <td>${data.faroisDianteiros}</td>
    <td>${data.obsFaroisDianteiros}</td>
  </tr>
  <tr>
    <td>1.2 - FAROIS TRASEIROS</td>
    <td>${data.faroisTraseiros}</td>
    <td>${data.obsFaroisTraseiros}</td>
  </tr>
  <tr class="alt-row">
    <td>1.3 - LÚZ DE FREIO</td>
    <td>${data.luzDeFreio}</td>
    <td>${data.obsLuzDeFreio}</td>
  </tr>
  <tr>
    <td>1.4 - SISTEMA DE PARTIDA</td>
    <td>${data.sistemaPartida}</td>
    <td>${data.obsSistemaPartida}</td>
  </tr>
  <tr class="alt-row">
    <td>1.5 - CONDIÇÕES DA BATERIA</td>
    <td>${data.condicoesBateria}</td>
    <td>${data.obsCondicoesBateria}</td>
  </tr>
  <tr>
    <td>1.6 - TAMPA DA BATERIA</td>
    <td>${data.tampaBateria}</td>
    <td>${data.obsTampaBateria}</td>
  </tr>
  <tr class="alt-row">
    <td>1.7 - FUNCIONAMENTO DO PAINEL</td>
    <td>${data.funcionamentoPainel}</td>
    <td>${data.obsFuncionamentoPainel}</td>
  </tr>
  <tr>
    <td>1.8 - ALARME DE RÉ</td>
    <td>${data.alarmeRe}</td>
    <td>${data.obsAlarmeRe}</td>
  </tr>
  <tr class="alt-row">
    <td>1.9 - BUZINA</td>
    <td>${data.buzina}</td>
    <td>${data.obsBuzina}</td>
  </tr>
</table>

<br>

<table>
  <tr>
    <th>2 - SISTEMA HIDRÁULICO</th>
    <th>Condição</th>
    <th>Observação</th>
  </tr>
  <tr class="alt-row">
    <td>2.1 - FIXAÇÃO DAS MANGUEIRAS</td>
    <td>${data.fixacaoMangueiras}</td>
    <td>${data.obsFixacaoMangueiras}</td>
  </tr>
  <tr>
    <td>2.2 - CONDIÇÕES DAS MANGUEIRAS</td>
    <td>${data.condicoesMangueiras}</td>
    <td>${data.obsCondicoesMangueiras}</td>
  </tr>
  <tr class="alt-row">
    <td>2.3 - VAZAMENTO DE ÓLEO DO MOTOR</td>
    <td>${data.vazamanetoOleoMotor}</td>
    <td>${data.obsVazamentoOleoMotor}</td>
  </tr>
  <tr>
    <td>2.4 - VAZAMENTO DE ÓLEO DIESEL</td>
    <td>${data.vazamentoOleoDiesel}</td>
    <td>${data.obsVazamentoOleoDiesel}</td>
  </tr>
  <tr class="alt-row">
    <td>2.5 - VAZAMENTO DE ÓLEO HIDRÁULICO</td>
    <td>${data.vazamentoOleoHidraulico}</td>
    <td>${data.obsVazamentoOleoHidraulico}</td>
  </tr>
  <tr>
    <td>2.6 - FIXAÇÃO DOS CILIDROS HIDRÁULICOS</td>
    <td>${data.fixacaoCilindrosHidraulicos}</td>
    <td>${data.obsFixacaoCilindrosHidraulicos}</td>
  </tr>
  <tr class="alt-row">
    <td>2.7 - PINOS E CONTRAPINOS DOS CILINDROS HIDRÁULICOS</td>
    <td>${data.pinosContrapinosHid}</td>
    <td>${data.obsPinosContrapinosHid}</td>
  </tr>
</table>


<br>

<table>
  <tr>
    <th>3 - GERAL</th>
    <th>Condição</th>
    <th>Observação</th>
  </tr>
  <tr class="alt-row">
    <td>3.1 - TRINCAS NA ESTRUTURA</td>
    <td>${data.trincasEstrutura}</td>
    <td>${data.obsTrincasEstrutura}</td>
  </tr>
  <tr>
    <td>3.2 - NÍVEL DO ÓLEO HIDRÁULICO</td>
    <td>${data.nivelOleoHid}</td>
    <td>${data.obsNivelOleoHid}</td>
  </tr>
  <tr class="alt-row">
    <td>3.3 - NÍVEL DA ÁGUA</td>
    <td>${data.nivelAgua}</td>
    <td>${data.obsNivelAgua}</td>
  </tr>
  <tr>
    <td>3.4 - NÍVEL DO ÓLEO DIESEL</td>
    <td>${data.nivelOleoDiesel}</td>
    <td>${data.obsNivelOleoDiesel}</td>
  </tr>
  <tr class="alt-row">
    <td>3.5 - PINOS E CONTRA PINAS DA CONCHA</td>
    <td>${data.pinosContraPinasConcha}</td>
    <td>${data.obsPinosContraPinasConcha}</td>
  </tr>
  <tr>
    <td>3.6 - PNEU STEP</td>
    <td>${data.pneuStep}</td>
    <td>${data.obsPneuStep}</td>
  </tr>
  <tr class="alt-row">
    <td>3.7 - CONDIÇÕES DOS PNEUS</td>
    <td>${data.condicoesPneus}</td>
    <td>${data.obsCondicoesPneus}</td>
  </tr>
  <tr>
    <td>3.8 - DOCUMENTOS DO VEÍCULO</td>
    <td>${data.documentosVeiculo}</td>
    <td>${data.obsDocumentosVeiculo}</td>
  </tr>
  <tr class="alt-row">
    <td>3.9 - AET</td>
    <td>${data.aet}</td>
    <td>${data.obsAet}</td>
  </tr>
</table>


<br>

<table>
  <tr>
    <th>4 - ITENS DE SEGURANÇA</th>
    <th>Condição</th>
    <th>Observação</th>
  </tr>
  <tr class="alt-row">
    <td>4.1 - LIMPADOR DE PARABRISA</td>
    <td>${data.limpadorParabrisa}</td>
    <td>${data.obsLimpadorParabrisa}</td>
  </tr>
  <tr>
    <td>4.2 - RETROVISORES LATERAIS</td>
    <td>${data.retrovisoresLaterais}</td>
    <td>${data.obsRetrovisoresLaterais}</td>
  </tr>
  <tr class="alt-row">
    <td>4.3 - FAIXAS REFLEXIVAS</td>
    <td>${data.faixasReflexivas}</td>
    <td>${data.obsFaixasReflexivas}</td>
  </tr>
  <tr>
    <td>4.4 - FAIXA REFLEXIVA DO PARACHOQUE</td>
    <td>${data.faixasReflexivasParachoque}</td>
    <td>${data.obsFaixasReflexivasParachoque}</td>
  </tr>
  <tr class="alt-row">
    <td>4.5 - ASSENTO DO MOTORISTA</td>
    <td>${data.assentoMotorista}</td>
    <td>${data.obsAssentoMotorista}</td>
  </tr>
  <tr>
    <td>4.6 - EXTINTOR</td>
    <td>${data.extintor}</td>
    <td>${data.obsExtintor}</td>
  </tr>
  <tr class="alt-row">
    <td>4.7 - KIT (TRIÂNGULO, MACACO E CHAVE DE RODA)</td>
    <td>${data.kit}</td>
    <td>${data.obsKit}</td>
  </tr>
  <tr>
    <td>4.8 - TACÓGRAFO</td>
    <td>${data.tacografo}</td>
    <td>${data.obsTacografo}</td>
  </tr>
  <tr class="alt-row">
    <td>4.9 - PARABRISAS</td>
    <td>${data.parabrisas}</td>
    <td>${data.obsParabrisas}</td>
  </tr>
</table>

<br>

<table>
  <tr>
    <th>5 - ITENS DE ESTRUTURA</th>
    <th>Condição</th>
    <th>Observação</th>
  </tr>
  <tr class="alt-row">
    <td>5.1 - BARRA DE DIREÇÃO</td>
    <td>${data.barraDirecao}</td>
    <td>${data.obsBarraDirecao}</td>
  </tr>
  <tr>
    <td>5.2 - GRAMPO DO CHASSI</td>
    <td>${data.grampoChassi}</td>
    <td>${data.obsGrampoChassi}</td>
  </tr>
  <tr class="alt-row">
    <td>5.3 - FEIXE DE MOLAS</td>
    <td>${data.feixeMolas}</td>
    <td>${data.obsFeixeMolas}</td>
  </tr>
  <tr>
    <td>5.4 - TRANSMISSÃO</td>
    <td>${data.transmissao}</td>
    <td>${data.obsTransmissao}</td>
  </tr>
</table>

<br>

<table>
  <tr>
    <th>6 - ADICIONAIS</th>
    <th>Condição</th>
    <th>Observação</th>
  </tr>
  <tr class="alt-row">
    <td>6.1 - PÁ</td>
    <td>${data.pa}</td>
    <td>${data.obsPa}</td>
  </tr>
  <tr>
    <td>6.2 - CALÇOS</td>
    <td>${data.calcos}</td>
    <td>${data.obsCalcos}</td>
  </tr>
  <tr class="alt-row">
    <td>6.3 - CINTA OU CABO DE AÇO</td>
    <td>${data.cintaCaboDeAco}</td>
    <td>${data.obsCintaCaboDeAco}</td>
  </tr>
</table>

<br>

<p class="declaracao">DECLARAMOS QUE O EQUIPAMENTO POR NÓS VISTORIADO, NOS ITENS ACIMA, ENCONTRA-SE EM: 
  <span>_______________________________________________________</span>
</p>
<br>
<p class="visto">VISTO DO MOTORISTA: 
  <span>_______________________________________________________</span></p>
</body>
</html>

`;
} 
            