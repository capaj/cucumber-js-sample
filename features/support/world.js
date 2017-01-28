require('chromedriver')
const seleniumWebdriver = require('selenium-webdriver');
const {
  defineSupportCode
} = require('cucumber')

debugger
function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();
}

defineSupportCode(function ({setWorldConstructor, setDefaultTimeout}) {
  setWorldConstructor(CustomWorld)
  setDefaultTimeout(30000)
})