declare module 'boleto.js' {
  /**
   * @module ITF
   */

  /**
   * Representations of each decimal digit
   *
   * @default
   * @constant
   */
  const WEIGHTS: string[];

  /**
   * Representation of Start portion of the barcode
   *
   * @default
   * @constant
   */
  const START: string;

  /**
   * Representation of Stop portion of the barcode
   *
   * @default
   * @constant
   */
  const STOP: string;

  /**
   * Converts a pair of digits into their ITF representation and interleave them
   *
   * @param {String} pair The pair to be interleaved
   * @return {String} The input pair encoded into its ITF representation
   *
   * @example
   * // Returns "1211212112"
   * ITF.interleavePair('01');
   */
  function interleavePair(pair: string): string;

  /**
   * Encodes a base-10 number into its Interleaved 2 of 5 (ITF) representation
   *
   * @param {String} number The number to be encoded
   * @return {String} The input number encoded into its ITF representation
   *
   * @example
   * // Returns "111121121111222121121112211222111112111122211121122211211"
   * ITF.encode('1234567890');
   */
  function encode(number: string): string;
}
