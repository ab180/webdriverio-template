describe('blank page', () => {
    it('connect to about:blank', async () => {
        await browser.url('about:blank')
    })

    it('document has 3 child', async () => {
        expect(await $$('//*').length).toBe(3)
    })

    it('body has 0 child', async () => {
        expect(await $$('//body/*').length).toBe(0)
    })
})