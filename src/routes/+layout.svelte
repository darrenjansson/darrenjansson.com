<script>
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';

  import { onMount } from 'svelte';

  let { children } = $props();

  onMount(() => {
    document.querySelector('body').classList.add('has-js');
  });
</script>

<Header />
<main class="c-main">
  {@render children?.()}
</main>
<Footer />

<svelte:head>
  <meta name="description" content="Frontend developer based in Manchester" />
  <meta name="keywords" content="freelance, permenant, frontend, front end, front-end, developer, engineer, Manchester, remote, in-house, contractor" />

  <meta property="og:type" content="website">
  <meta property="og:image" content="https://www.darrenjansson.com/images/social-share.png" />

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="https://www.darrenjansson.com/images/social-share.png">
</svelte:head>

<style lang="scss">
  :root {
    --color-black-trans: rgba(0,0,0,0.25);
    --color-black-trans-mid: rgba(0,0,0,0.5);
    --color-black-trans-dark: rgba(0,0,0,0.85);
    --color-grey-dark: #2f3132;
    --color-orange: #ff6633;
    --color-pink: #ff3366;
    --color-purple: #6633ff;
    --color-blue: #3366ff;
    --color-white: #fff;

    --font-stack: 'Open Sans', sans-serif;
    --font-weight: 300;

    --width-content-max: 928px;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-v16-latin-300.woff') format('woff'),
        url('/fonts/open-sans-v16-latin-300.woff2') format('woff2');
    font-weight: var(--font-weight);
    font-style: normal;
  }


  @keyframes -global-gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }

  :global(html) {
    font-size: 1rem;

    @media (min-width: 48em) {
      font-size: 1.25rem;
    }
  }

  :global(body) {
    background-color: var(--color-grey-dark);
    color: var(--color-white);
    font-family: var(--font-stack);
    line-height: 1.5;
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }

  :global(body.nav-open) {
    overflow: hidden;
  }

  :global(#svelte) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .c-main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
