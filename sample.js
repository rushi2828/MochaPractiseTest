var webdriver = require('selenium-webdriver');

function googleSearch() {

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://bstackdemo.com').then(function () {
        driver.findElement(webdriver.By.linkText('Sign In')).click().then(function () {
            driver.getTitle().then(function (title) {
                setTimeout(function () {
                    console.log("Tite of the page is- "+title);
                    driver.quit();
                }, 5000);
            });
        });
    });
}
googleSearch();