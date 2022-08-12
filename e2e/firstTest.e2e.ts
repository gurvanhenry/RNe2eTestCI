import {expect} from 'detox';

describe('Example', () => {
  it('should have welcome screen', async () => {
    // expect by id
    await expect(element(by.id('welcome'))).toBeVisible();
    // expect by text
    await expect(element(by.text('Welcome'))).toBeVisible();
    // try by label
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello World!!!'))).toBeVisible();
  });
});
