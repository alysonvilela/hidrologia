export class ConversorMetrocubico {
  private FATOR_HECTOMETRO = 2592; // 2,592, foi um valor determinado baseado em um calculo de conversao de unidades
  private DECIMAL_HECTOMETRO = 1000;

  constructor() {}

  convertToHectoMeters(metroCubico: number) {
    return (metroCubico * this.FATOR_HECTOMETRO) / this.DECIMAL_HECTOMETRO;
  }
}
