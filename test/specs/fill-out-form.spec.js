describe('Access Forms Panel from webdriver.io', () => {
    it('Should fill out the form with success', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Teste WebDriverIO')
        await $('~switch').click()
        await $(`//android.widget.EditText[@text="Select an item..."]`).click()
        await $(`//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]`).click()
    })
})