<script>
  import Link from './link.svelte';

  import { closeNav } from './helpers.svelte';

  let { animate = false } = $props();
</script>

<nav
  class="c-nav"
  class:has-animation={animate}
>
  <ul class="c-nav__list">
    <li class="c-nav__list-item"><Link class="c-nav__link" onclick={closeNav} href="/about">About</Link></li>
    <li class="c-nav__list-item"><Link class="c-nav__link" onclick={closeNav} href="/skills">Skills</Link></li>
    <li class="c-nav__list-item"><Link class="c-nav__link" onclick={closeNav} href="/work">Work</Link></li>
    <li class="c-nav__list-item"><Link class="c-nav__link" onclick={closeNav} href="/contact">Contact</Link></li>
  </ul>
</nav>

<style lang="scss">
  .c-nav {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    overflow: hidden;
  }

    .c-nav__list {
      list-style: none;
      margin: -105px 0 0 0;
      padding: 0;
      text-align: center;
    }

    .c-nav__list-item {
      opacity: 1;
      position: relative;
      top: 0;
      transition: top 0.5s ease-in-out 0.5s, opacity 0.5s ease-in-out;
      will-change: opacity, top;

      :global(.has-animation) & {
        top: -5vh;
        opacity: 0;
      }

      & + & {
        margin-top: 1rem;
      }

      :global(.nav-open) & {
        top: 0;
        opacity: 1;
        transition: top 0.5s ease-in-out 0.35s, opacity 0.5s ease-in-out 0.35s;

        &:nth-of-type(2) {
          transition: top 0.5s ease-in-out 0.45s, opacity 0.5s ease-in-out 0.45s;
        }

        &:nth-of-type(3) {
          transition: top 0.5s ease-in-out 0.55s, opacity 0.5s ease-in-out 0.55s;
        }

        &:nth-of-type(4) {
          transition: top 0.5s ease-in-out 0.65s, opacity 0.5s ease-in-out 0.65s;
        }

        &:nth-of-type(4) {
          transition: top 0.5s ease-in-out 0.75s, opacity 0.5s ease-in-out 0.75s;
        }
      }
    }

    :global(.c-nav__link) {
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
      padding: 0.5rem;
      text-transform: uppercase;
    }
</style>
