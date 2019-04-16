import { browser, Config } from 'protractor';
import { Reporter } from '../support/reporter';
const jsonReports = process.cwd() + '/reports/json';

export const config: Config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub', // Use if not wanting chrome directly
    directConnect: true,
    baseUrl: 'https://portal.securecodewarrior.com/?utm_source=Empoweringdevs&utm_medium=webreferral&utm_campaign=Level%20Up#/website-trial/web/injection/sql/c_sharp/vanilla',
    capabilities: {
        browserName: 'chrome',
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        '../../e2e/features/**/*.feature'
    ],

    onPrepare: async () => {
        await browser.manage().window().maximize();
        await Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        'require-module': 'ts-node/register',
        compiler: 'ts:ts-node/register',
        format: "json:./reports/json/cucumber_report.json",
        require: ['../../e2e/step_definitions/**/*.ts', '../../e2e/support/**/*.ts'],
        tags: '@SCW'
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
