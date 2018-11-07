import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  /* FOR HEADER TESTS */
  getHomeLink() {
    return element(by.css('app-root #home-link')).getText();
  }
  getManageLink() {
    return element(by.css('app-root #manage-link')).getText();
  }
  getAssessLink() {
    return element(by.css('app-root #assess-link')).getText();
  }
  getQualityLink() {
    return element(by.css('app-root #quality-link')).getText();
  }
  getPanelLink() {
    return element(by.css('app-root #panel-link')).getText();
  }
  getReportsLink() {
    return element(by.css('app-root #reports-link')).getText();
  }

  getNavHomeLink() {
    element(by.css('app-root #home-link')).click();
    return element(by.css('app-root p')).getText();
  }

  getNavManageLink() {
    element(by.css('app-root #manage-link')).click();
    return element(by.css('app-root p')).getText();
  }

  getNavImgLink() {
    element(by.css('app-root #img-link')).click();
    return element(by.css('app-root p')).getText();
  }

  /* FOR FOOTER TESTS */

  getFooterRevature() {
   return element(by.css('app-root #footer-id'));

  }

  navigateTo2() {
    return browser.get('/caliber');
  }

   /** Batch Tests */
   getManageBatch() {
    element(by.css('app-root #manage-link')).click();
    browser.sleep(1000);
    return element(by.css('app-root #createBatch')).getText();
  }

  getBatchModal() {
    element(by.css('app-root #manage-link')).click();
    browser.sleep(1000);
    element(by.id('createBatch')).click();
    browser.sleep(1000);
    return element(by.id('createBatchModal')).getAttribute('id');
  }

  getErrorModal() {
    /** Click Manage Batch */
    element(by.css('app-root #manage-link')).click();
    browser.sleep(1000);
    /** click Create Batch */
    element(by.id('createBatch')).click();
    browser.sleep(1000);
    /** fill out form */
    element(by.id('trainingName')).sendKeys('1808 Aug27 Java');
    element(by.name('trainingType')).by.cssContainingText('option', 'Revature').click();
    element(by.name('skillType')).by.cssContainingText('option', 'Microservices').click();
    element(by.name('location')).by.cssContainingText('option', 'Revature, 123 Sesame Street, Tampa FL 11111').click();
    element(by.name('trainer')).by.cssContainingText('option', 'Nickolas Jurczak').click();
    element(by.name('co-trainer')).by.cssContainingText('option', 'None').click();
    element(by.id('start-date')).sendKeys('08/27/2018');
    element(by.id('end-date')).sendKeys('11/10/2018');
    element(by.id('goodGrade')).sendKeys('80');
    element(by.id('borderlineGrade')).sendKeys('70');
    /** click Save */
    element(by.id('saveButton')).click();
    browser.sleep(1000);
    /** Return id of Error Modal */
    return element(by.id('checkBatchModalDate')).getAttribute('id');
  }
}
