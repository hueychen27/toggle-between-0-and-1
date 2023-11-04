/**
 * Do a bunch of toggling stuff
 * @property {number} toggleTimes - How many times the toggle method has been called
 * @property {number} value - The current value of the toggle
 * @example <caption>Example usage of the `Toggle` class</caption>
 * const something = new Toggle(0); // Value property is initialized to 0 (default)
 * something.toggle(); // Makes value property 1
 * something.toggle(); // Makes value property 0
 * something.toggleTimes; // Returns 2
 * something.resetToggleTimes(); // Resets toggleTimes to 0
 * something.value = 132481; // Sets value property to 1 because 132481 % 2 = 1
 * something.value; // Returns 1
 */
module.exports = class Toggle {
    #toggleTimes = 0;
    #value;
    /**
     * @param {number|void} value 
     */
    constructor (value = 0) {
        this.#value = value % 2;
    }

    get toggleTimes() {
        return this.#toggleTimes;
    }

    get value() {
        return this.#value;
    }

    set value(val) {
        this.#value = val % 2;
    }

    /**
     * Toggle between 0 and 1
     */

    toggle() {
        this.#value = this.#value == 0 ? 1 : 0
        this.#toggleTimes++;
    }
    /**
     * Reset the `toggleTimes` private property
     */
    resetToggleTimes() {
        this.#toggleTimes = 0;
    }
}