Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + '/reports/json';
exports.config = {
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
        await protractor_1.browser.manage().window().maximize();
        await reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        'require-module': 'ts-node/register',
        compiler: 'ts:ts-node/register',
        format: "json:./reports/json/cucumber_report.json",
        require: ['../../e2e/step_definitions/**/*.ts', '../../e2e/support/**/*.ts'],
        tags: '@SCW'
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    },
};
