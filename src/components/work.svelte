<script>
  import Link from '../components/link.svelte';

  let { color, link = undefined, logo, logoHeight, logoWidth, logoSpacingX, logoSpacingY, subtitle = undefined, title, children } = $props();

  let pos = $state(0);
</script>

<svelte:window bind:scrollY={pos} />

<article class="c-work">
  <div class="c-work__article" style="background-color: {color}">
    <div class="c-work__logo-bg" style="background: url('{logo}') -{pos}px calc(50% - {Math.round(logoHeight / 2)}px), url('{logo}') {pos + Math.round((logoWidth + logoSpacingX) / 2)}px calc(50% - {Math.round(logoHeight / 2)}px + {Math.round((logoHeight + logoSpacingY) / 2)}px);"></div>
    <div class="c-work__logo" style="background-image: url('{logo}'); width: {logoWidth}px; height: {logoHeight}px; background-size: {logoWidth + logoSpacingX}px;"></div>
  </div>
  <h1 class="c-work__title">{title}</h1>
  {#if subtitle && link}
  <h2 class="c-work__subtitle">
    <Link class="c-work__link" href={link}>{subtitle}</Link>
  </h2>
  {:else if subtitle}
  <h2 class="c-work__subtitle">{subtitle}</h2>
  {/if}
  {@render children()}
</article>

<style lang="scss">
  :global(.c-work) {
    & + & {
      margin-top: 5rem;
    }
  }

    .c-work__article {
      background-color: var(--color-grey-dark);
      clip-path: polygon(0% 5vh, 100% 0%, 100% calc(100% - 5vh), 0% 100%);
      position: relative;
    }

    :global(.c-work__link) {
      margin-left: -0.33rem;
    }

    .c-work__logo-bg {
      min-height: 150px;
      height: 30vh;
      max-height: 300px;
      opacity: 0.1;
      width: 100%;
      will-change: background;
    }

    .c-work__logo {
      background-size: 100%;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%) scale(1.5);
    }

    .c-work__subtitle {
      font-size: 1rem;
      font-weight: var(--font-weight);
      margin-bottom: 1em;
      margin-top: 0;
    }

    .c-work__title {
      font-size: 2rem;
      font-weight: var(--font-weight);
      margin-bottom: 0;
      margin-top: 1em;
    }
</style>
