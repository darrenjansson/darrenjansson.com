<script>
  import Link from '../../components/link.svelte';
  import Section from '../../components/section.svelte';

  let fields = $state({
    name: {
      value: '',
      field: undefined,
      errorRequired: undefined
    },
    email: {
      value: '',
      field: undefined,
      errorRequired: undefined
    },
    message: {
      value: '',
      field: undefined,
      errorRequired: undefined
    }
  });

  let errorMsg;

  const toggleErrorMessage = (toggle, field) => {
    const className = 'has-error';

    fields[field].errorRequired.hidden = !toggle;
    toggle ? fields[field].field.classList.add(className) : fields[field].field.classList.remove(className);
  }

  const submitContactForm = (e) => {
    e.preventDefault();
    let errors = 0;
    let data = new FormData();

    Object.keys(fields).forEach(field => {
      const error = fields[field].value.replace(/^\s+|\s+$/gm,'') === '';
      toggleErrorMessage(error, field);

      data.set(field, fields[field].value);

      errors = (error) ? errors + 1 : errors;
    })

    data.set('form-name', 'Contact');

    if(!errors) {
      return fetch("/contact/success", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      })
        .then((response) => {
          if (!response.ok) {
            errorMsg.hidden = false;
          } else {
            window.location.href = '/contact/success';
          }
        })
        .catch(() => {
          errorMsg.hidden = false;
        });
    }
  }
</script>

<svelte:head>
	<title>Contact | Darren Jansson – Frontend Engineer</title>
</svelte:head>

<Section title="Contact" top={true} color="white">
  <p>I'm not actively looking for new opportunities at the moment, but please feel free to get in touch if you would like to work with me. You can <Link href="mailto:darren@darrenjansson.com">email</Link> me or use the contact form below. </p>
  <form class="c-contact__form" method="post" name="Contact" onsubmit={submitContactForm} action="/contact/success">
    <div class="c-contact__field">
      <label class="c-contact__label" for="name">Name <span class="c-contact__error" bind:this={fields.name.errorRequired} hidden>is required</span></label>
      <input class="c-contact__input" type="text" name="name" bind:this={fields.name.field} bind:value={fields.name.value} required />
    </div>
    <div class="c-contact__field">
      <label class="c-contact__label" for="email">E-mail <span class="c-contact__error" bind:this={fields.email.errorRequired} hidden>is required</span></label>
      <input class="c-contact__input" type="email" name="email" bind:this={fields.email.field} bind:value={fields.email.value} required />
    </div>
    <div class="c-contact__field">
      <label class="c-contact__label" for="message">Message <span class="c-contact__error" bind:this={fields.message.errorRequired} hidden>is required</span></label>
      <textarea class="c-contact__input c-contact__textarea" name="message" bind:this={fields.message.field} bind:value={fields.message.value} required></textarea>
    </div>
    <p class="c-contact__error" bind:this={errorMsg} hidden>
      There was an error sending your message.
    </p>
    <button class="c-contact__submit" type="submit" onclick={submitContactForm} style="background: linear-gradient({Math.floor(Math.random() * 359) + 1}deg, var(--color-orange), var(--color-pink), var(--color-purple), var(--color-blue))">Send</button>
  </form>
</Section>

<style lang="scss">
  .c-contact__error {
    color: var(--color-pink);
  }

  .c-contact__field {
    margin-bottom: 1rem;
  }

  .c-contact__input {
    color: var(--color-grey-dark);
    font-family: var(--font-stack);
    font-size: 1rem;
    background-color: var(--color-white);
    border: 0.125rem solid var(--color-black-trans-mid);
    border-radius: 0;
    box-sizing: border-box;
    padding: 0.33rem;
    transition: border-color 0.25s;
    width: 100%;
    max-width: 25em;

    &:focus {
      border-color: var(--color-blue);
      border-radius: 0;
      outline: none;
    }

    &:global(.has-error) {
      border-color: var(--color-pink);
    }
  }

  .c-contact__label {
    display: block;
    padding-bottom: 0.33rem;
  }

  .c-contact__submit {
    animation: gradient 60s ease infinite;
    background-size: 500% 500% !important;
    border: none;
    border-radius: 0;
    color: var(--color-white);
    cursor: pointer;
    font-family: var(--font-stack);
    font-size: 1rem;
    padding: 0.455rem 0.625rem;
    transition: box-shadow 0.25s;

    &:focus {
      border: none;
      border-radius: 0;
      box-shadow: inset 0 0 0 100px var(--color-black-trans-mid);
      outline: none;
    }
  }

  .c-contact__textarea {
    height: 4rem;
  }
</style>
