import Lang from '../utils/lang';
import Constants from '../utils/constants';
import { escapeHTML } from '../utils/utils';

// Import processed minified styles as a string.
import styles from '../../../dist/css/console-errors.min.css';
import sharedStyles from '../../../dist/css/shared.min.css';

export default class ConsoleErrors extends HTMLElement {
  constructor(error) {
    super();
    this.error = error;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    // Styles
    const style = document.createElement('style');
    style.innerHTML = styles + sharedStyles;
    shadow.appendChild(style);

    // Container
    const content = document.createElement('div');
    content.setAttribute('id', 'dialog');
    content.setAttribute('tabindex', '-1');

    // Google Form & GitHub error link.
    const url = window.location;
    const google = 'https://forms.gle/sjzK9XykETaoqZv99';
    const github = `https://github.com/ryersondmp/sa11y/issues/new?title=Bug%20report&body=%23%23%20Error%20Description%0A%60%60%60javascript%0A${encodeURIComponent(this.error.stack)}%0A%60%60%60%0A%0A%23%23%20URL%0A%60${url}%60%0A%0A%23%23%20Comments%0A`;

    // Message
    content.innerHTML = `
      <button class="close-btn" aria-label="${Lang._('ALERT_CLOSE')}"></button>
      <h2>${Lang._('ERROR')}</h2>
      <p>${Lang.sprintf('CONSOLE_ERROR', google, github)}</p>
      <p class="error">${escapeHTML(this.error.stack)}<br><br>URL: ${url}</p>
    `;
    shadow.appendChild(content);

    // Set focus and hide Sa11y's toggle.
    setTimeout(() => {
      Constants.Panel.toggle.style.display = 'none';
      const container = document.querySelector('sa11y-console-error');
      const dialog = container.shadowRoot.getElementById('dialog');
      dialog.focus();

      const close = container.shadowRoot.querySelector('.close-btn');
      close.addEventListener('click', () => {
        container.remove();
      });
    }, 0);
  }
}
