const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('basic interactions', () => {
  let document;
  let window;
  beforeAll(() => {
    const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
    window = dom.window;
    document = dom.window.document;
  });

  test('notification close button hides banner', () => {
    const closeBtn = document.querySelector('.h-notification__remove');
    const notification = document.querySelector('.h-notification');
    expect(notification.style.display).not.toBe('none');
    closeBtn.dispatchEvent(new window.Event('click'));
    expect(notification.style.display).toBe('none');
  });
});
