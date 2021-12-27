export const config: WebdriverIO.Config = {
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu']
        }
    }],

    specs: [
        'scenario/**/*.test.ts',
    ],

    maxInstances: 10,

    mochaOpts: {
        ui: 'bdd',
        timeout: 60 * 60 * 1000,
    },
}