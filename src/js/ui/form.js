/**
 * Contact form: inline validation with accessible error messages, then an
 * AJAX submission to Formspree. If sending fails, the page says so plainly
 * and offers the email address instead of navigating away.
 */

const MESSAGES = {
  name: 'Enter your name.',
  email: 'Enter an email address like name@example.com.',
  message: 'Write a short message.',
};

export function initForm() {
  const form = document.querySelector('[data-form]');
  const success = document.querySelector('[data-form-success]');
  if (!form || !success) return;
  const note = form.querySelector('[data-form-note]');
  const submit = form.querySelector('[type="submit"]');
  const fields = [...form.querySelectorAll('.field__input')];

  const validate = (input) => {
    const error = document.getElementById(`${input.id}-error`);
    const valid = input.checkValidity();
    input.setAttribute('aria-invalid', String(!valid));
    if (error) {
      error.textContent = valid ? '' : MESSAGES[input.name] || 'Check this field.';
      input.setAttribute('aria-describedby', error.id);
    }
    return valid;
  };

  fields.forEach((input) => {
    input.addEventListener('blur', () => input.value && validate(input));
    input.addEventListener('input', () => input.getAttribute('aria-invalid') === 'true' && validate(input));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const invalid = fields.filter((input) => !validate(input));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Sending…';
    note.textContent = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.hidden = true;
      success.hidden = false;
      success.focus();
    } catch {
      submit.disabled = false;
      submit.textContent = 'Send message';
      note.innerHTML = 'The message could not be sent. Email <a class="link" href="mailto:prem@premlodhia.com">prem@premlodhia.com</a> directly instead.';
    }
  });
}
