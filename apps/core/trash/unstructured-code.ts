// ds/dt = i - q

import { ConversorMetrocubico } from "../conversions/cubic-meters-to-hecto-meters";

// Os parametros iniciais são coletados analisando o quando um rio ou efluentes levam em determinado tempo para acumular agua, assim saberemos a nossa vazao de entrada
interface ParametrosIniciais {
  espaco_inicial: number; //
  espaco_final: number; //
  tempo_de_analise: number; // Tempo de analise do rio
  vazao_de_entrada: number; // Afluentes
  vazao_de_saida: number; // Saída - Demanda de energia etc
}

class RegularizacaoDeReservatorios {
  constructor(private readonly params: ParametrosIniciais) {}

  fazerAnalise() {
    if (this.params.vazao_de_entrada < this.params.vazao_de_saida) {
    }
  }
}

// hec cubico (volume)
// metro cubco (vazao)

class BalancoHidrico {
  constructor() {}

  calculate(params: { volumeUtil: number; demanda: number }) {
    return;
  }
}

const conversorMetroCubico = new ConversorMetrocubico();
console.log(conversorMetroCubico.convertToHectoMeters(60));

// 500(?) + 155.52(volume util) - 142.56(demanda)
