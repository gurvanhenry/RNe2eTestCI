import {expect, waitFor} from 'detox';

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

describe('Tricky', () => {
  // waitFor is equivalent to expect
  // eslint-disable-next-line jest/expect-expect
  it('should change screen after a delay of 3 seconds', async () => {
    await element(by.id('hello_button_delay')).tap();
    await waitFor(element(by.text('Hello World!!!')))
      .toBeVisible()
      .withTimeout(5000);
  });
});
