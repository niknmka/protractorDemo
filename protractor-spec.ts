import { browser, by, element } from "protractor"
import { protractor } from "protractor/built/ptor";
describe('first protractor demo test', function() {
    beforeEach(function () {
        return browser.ignoreSynchronization = true
    })
    it('should click the button', async function() {
        const but = element(by.buttonText('Clickclick'));
        await browser.get('http://localhost:63342/tsClassDemo/myHtml.html')
        for (let i = 0; i <= 29; i++){
            await but.click();
            await browser.sleep(500);
        }
    });
});
