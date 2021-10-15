/**
 * Verify whether an element is displayed or not
 *
 * @param   {Object}    targetElement - The element to interact with.
 *
 * @return {Promise}
 */
const verifyIsDisplayed = async (targetElement) => {
    await expect(targetElement).toBeDisplayed();
};

module.exports = {
    verifyIsDisplayed,
};
