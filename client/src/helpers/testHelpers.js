import React from "react";
import { mount } from "enzyme";
import { IntlProvider } from "react-intl";
import messages from "../intl/messages";
import { DEFAULT_LOCALE } from "../constants";

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

/** Wrapper for testing components with react-intl
 * @param  {Function} component - React component
 * @param  {String} locale
 * @return  {Function} - React component
 * @example
 * // mountWithReactIntl(<Component />, locale)
 */
export const mountWithReactIntl = (component, locale = DEFAULT_LOCALE) => {
  return mount(
    <IntlProvider messages={messages[locale]} locale={locale}>
      {component}
    </IntlProvider>
  );
};
