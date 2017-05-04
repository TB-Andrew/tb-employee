import { EmployeesPage } from './app.po';

describe('employees App', () => {
  let page: EmployeesPage;

  beforeEach(() => {
    page = new EmployeesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
