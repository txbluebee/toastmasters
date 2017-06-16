import { ToastmasterPage } from './app.po';

describe('toastmaster App', () => {
  let page: ToastmasterPage;

  beforeEach(() => {
    page = new ToastmasterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
