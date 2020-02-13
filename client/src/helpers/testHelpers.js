/** Helper for testing reducer and helpers
 * @param  {Function} rootReducer - project rootReducer
 * @param  {*} initialState - optional root reducer initial state
 * @example
 * // testReducer(rootReducer, initialState)
 * //   .put(action(data1))
 * //   .expect(selector, value)
 * //   .put(action(data2))
 * //   .expect(selector, value2)
 */
export function testReducer(rootReducer, initialState) {
  if (!(this instanceof testReducer)) {
    return new testReducer(rootReducer, initialState);
  }

  this.state = rootReducer(initialState, { type: "MOCK_ACTION" });

  this.put = function(action) {
    this.state = rootReducer(this.state, action);
    return this;
  };

  this.expect = function(selector, value) {
    try {
      expect(selector(this.state)).toEqual(value);
    } catch (e) {
      console.log(e.stack);
    }

    return this;
  };
}
