declare module 'boleto.js' {
  type Code =
    `${number}.${number} ${number}${number} ${number}${number} ${number} ${number}`;
  // '00000.00000 00000.000000 00000.000000 0 00000000000000'

  export default class Boleto {
    /**
     * Initializes the class
     *
     * @constructor
     * @param {String} bankSlipNumber The bank slip number
     */
    constructor(bankSlipNumber: string)
    /**
     * Validates whether the bank slip number is valid or not
     *
     * The validation function ensures that the bank slip number is exactly 47
     * characters long, then applies the modulo-11 algorithm to the bank slip's
     * barcode. Finally, it verifies that the result of the algorithm equals the
     * checksum digit from the bank slip number.
     *
     * @return {Boolean} Whether the bank slip number is valid or not
     */
    valid: () => boolean;

    /**
     * Converts the printed bank slip number into the barcode number
     *
     * The bank slip's number is a rearrangement of its barcode, plus three
     * checksum digits. This function executes the inverse process and returns the
     * original arrangement of the code. Specifications can be found at
     * https://portal.febraban.org.br/pagina/3166/33/pt-br/layour-arrecadacao
     *
     * @return {String} The barcode extracted from the bank slip number
     */
    barcode: () => string;

    /**
     * Returns the bank slip's raw number
     *
     * @return {String} The raw bank slip number
     */
    number: () => string;

    /**
     * Returns the bank slip number with the usual, easy-to-read mask:
     * 00000.00000 00000.000000 00000.000000 0 00000000000000
     *
     * @return {String} The formatted bank slip number
     */
    prettyNumber: () => Partial<Code>;

    /**
     * Returns the name of the bank that issued the bank slip
     *
     * This function is able to identify the most popular or commonly used banks
     * in Brazil, but not all of them are included here.
     *
     * A comprehensive list of all Brazilian banks and their codes can be found at
     * http://www.buscabanco.org.br/AgenciasBancos.asp
     *
     * @return {String} The bank name
     */
    bank: () => string;

    /**
     * Returns the currency of the bank slip
     *
     * The currency is determined by the currency code, the fourth digit of the
     * barcode. A list of values other than 9 (Brazilian Real) could not be found.
     *
     * @return {String} The currency code, symbol and decimal separator
     */
    currency: () => string;

    /**
     * Returns the verification digit of the barcode
     *
     * The barcode has its own checksum digit, which is the fifth digit of itself.
     *
     * @return {String} The checksum of the barcode
     */
    checksum: () => string;

    /**
     * Returns the date when the bank slip is due
     *
     * The portion of the barcode ranging from its sixth to its nineth digits
     * represent the number of days since the 7th of October, 1997 up to when the
     * bank slip is good to be paid. Attempting to pay a bank slip after this date
     * may incurr in extra fees.
     *
     * @return {Date} The expiration date of the bank slip
     */
    expirationDate: () => Date;

    /**
     * Returns the bank slip's nominal amount
     *
     * @return {String} The bank slip's raw amount
     */
    amount: () => string;

    /**
     * Returns the bank slip's formatted nominal amount
     *
     * @return {String} The bank slip's formatted amount
     */
    prettyAmount: () => string;

    /**
     * Renders the bank slip as a child of the provided selector
     *
     * @param {String} selector The selector to the object where the SVG must be
     * appended
     *
     * @see {@link SVG#render}
     */
    toSVG: (selector?: string) => string;

    renderSVG: (height?: number) => string;
  }
}
