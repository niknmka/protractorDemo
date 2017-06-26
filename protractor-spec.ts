import { browser, by, element } from 'protractor';
//import { protractor } from "protractor/built/ptor";
import { assert } from  'chai';
import {} from 'jasmine';
describe('first protractor demo test', function() {
    beforeEach(function () {
        return browser.waitForAngularEnabled(false)
    })
    it('should click the button', async function() {
        const but = element(by.buttonText('Clickclick'));
        var counter = element(by.id('span'));
        var arr = [];
        var expectedArr = ['1', '2', '4', '6', '7', '9', '10', '12', '13',
            '15', '16', '18', '19', '21', '22', '24', '25', '27', '28',
            '30', '31', '33', '34', '36', '37', '39', '40', '42', '43', '45'];


        await browser.get('http://localhost:63342/tsClassDemo/myHtml.html');
        for (let i = 0; i <= 29; i++){
            await but.click();
            await browser.sleep(300);
            arr[i] = await counter.getText();
            await expect(arr[i]).toEqual(expectedArr[i]);
        }
        console.log(arr);
    });
});