declare module 'boleto.js' {
  /**
   * Calculates the modulo 11 checksum digit
   *
   * The specifications of the algorithm can be found at
   * https://portal.febraban.org.br/pagina/3166/33/pt-br/layour-arrecadacao
   *
   * @params {Array|String} number
   * @return {Integer} The modulo 11 checksum digit
   *
   * @example
   * // Returns 7
   * modulo11('123456789');
   */
  export function modulo11(number: number): number;
}
