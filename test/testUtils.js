/**
 * Returns ShallowWrapper containing node(s) with given data-test attribute value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} attrVal - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, attrVal) => {
  return wrapper.find(`[data-test='${attrVal}']`)
}
