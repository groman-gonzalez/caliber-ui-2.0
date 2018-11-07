import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /* HEADER TESTS */
  it('should display all links', () => {
    page.navigateTo();
    expect(page.getHomeLink()).toEqual('Home');
    expect(page.getManageLink()).toEqual('Manage Batch');
    expect(page.getAssessLink()).toEqual('Assess Batch');
    expect(page.getQualityLink()).toEqual('Quality Audit');
    expect(page.getPanelLink()).toEqual('Panel');
    expect(page.getReportsLink()).toEqual('Reports');

  });

  it('should click the home link and navigate to the home page', () => {
    page.navigateTo();
    expect(page.getNavHomeLink()).toEqual('home works!');
  });

  it('should click the manage link and navigate to the manage page', () => {
    page.navigateTo();
    expect(page.getNavManageLink()).toEqual('manage works!');
  });

  it('should click the logo and navigate to the home page', () => {
    page.navigateTo();
    expect(page.getNavImgLink()).toEqual('home works!');
  });

  /* FOOTER TESTS */
  it('should create footer with contact information', () => {
    page.navigateTo();
    expect(page.getFooterRevature()).toBeTruthy();
  });
});

describe('Batch Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should click Manage Batch and navigate to Manage Batch Page', () => {
    page.navigateTo2();
    expect(page.getManageBatch()).toEqual('Create Batch');
  });

  it('should click Create Batch and navigate to Create Batch Modal', () => {
    page.navigateTo2();
    expect(page.getBatchModal()).toEqual('createBatchModal');
  });

  it('should click Save on Create Batch Modal to make Error Modal Appear', () => {
    page.navigateTo2();
    expect(page.getErrorModal()).toEqual('checkBatchModalDate');
  });
});
