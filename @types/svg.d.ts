declare module 'boleto.js' {
  class SVG {
    /**
     * Initializes the class
     *
     * @constructor
     * @param {Array} stripes The list of stripes to be drawn
     * @param {Integer} stripeWidth The width of a single-weighted stripe
     */
    constructor(stripes: string[], stripeWidth: number);

    /**
     * Appends an SVG object and renders the barcode inside it
     *
     * The structure of the SVG is a series of parallel rectangular stripes whose
     * colors alternate between black or white.
     * These stripes are placed from left to right. Their width will vary
     * depending on their weight, which can be either 1 or 2.
     *
     * @param {String} selector The selector to the object where the SVG must be
     * appended
     */
    render(selector: string): string | null;

    /**
     * Calculates the total width of the barcode
     *
     * The calculation method is the sum of the weight of the stripes multiplied
     * by the width of a single-wighted stripe
     *
     * @return {Integer} The width of a view box that fits the barcode
     */
    viewBoxWidth(): number;

    /**
     * Returns the appropriate color for each stripe
     *
     * Odd numbers will return white, even will return black
     *
     * @param {Integer} i The index of the stripe
     * @return {String} The stripe color
     *
     * @example
     * // Returns "#ffffff"
     * svg.color(1);
     * // Returns "#000000"
     * svg.color(2);
     */
    static color(i: number): string;
  }
}
