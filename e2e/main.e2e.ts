import {expect} from 'detox';

describe('Main', () => {
  it('should have welcome screen', async () => {
    // by testID (encouraged by detox)
    await expect(element(by.id('welcome'))).toBeVisible();
    // by text
    await expect(element(by.text('Welcome'))).toBeVisible();
    // by label
    await expect(element(by.label('Welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello World!!!'))).toBeVisible();
  });

  it('should show me what I typed', async () => {
    await expect(element(by.id('welcomeInput'))).toBeVisible();
    await element(by.id('welcomeInput')).typeText('wooaoo');
    await expect(element(by.id('welcomeTypeText'))).toHaveText(
      'You typed :wooaoo:',
    );
  });
});
