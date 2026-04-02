<script>
  import { toggleNav } from './helpers.svelte';
</script>

<div class="hamburger" onclick={toggleNav} role="button" tabindex="0" onkeydown={(e) => e.key === 'Enter' && toggleNav()}>
  <a class="hamburger__link" href="/menu">Menu</a>
  <div class="hamburger__icon">
    <div class="hamburger__line hamburger__line--1"></div>
    <div class="hamburger__line hamburger__line--2"></div>
    <div class="hamburger__line hamburger__line--3"></div>
  </div>
</div>

<style lang="scss">
  @use 'sass:math';

  .hamburger {
    --color-line: var(--color-white);

    --size-hamburger-button: 30px;
    --size-hamburger-height: 21px;
    --size-hamburger-width: 30px;
    --size-hamburger-line: 3px;
    --size-hamburger-radius: 3px;

    --translate-to: calc((var(--size-hamburger-height) - var(--size-hamburger-line)) / 2);

    cursor: pointer;
    height: var(--size-hamburger-button);
    overflow: hidden;
    position: relative;
    transition: opacity 0.25s;
    width: var(--size-hamburger-button);

    &:hover {
      opacity: 0.5;
    }
  }

    .hamburger__icon {
      height: var(--size-hamburger-height);
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: var(--size-hamburger-width);
    }

    .hamburger__line {
      background-color: var(--color-line);
      border-radius: var(--size-hamburger-radius);
      height: var(--size-hamburger-line);
      left: 0;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .hamburger__line--1 {
      top: 0;
      transition: transform .3s ease-in-out, top .2s ease-in-out .3s;

      :global(.nav-open) & {
        top: var(--translate-to);
        transform: rotate(135deg);
        transition: top .3s ease-in-out, transform .3s linear .3s;
      }

      &:before {
        background-color: var(--color-line);
        border-radius: var(--size-hamburger-radius);
        content: '';
        height: var(--size-hamburger-line);
        position: absolute;
        transition: transform .1s ease-in-out .2s;
        width: 100%;

        :global(.nav-open) & {
          transform: rotate(90deg);
          transition: transform .1s ease-in-out .3s;
        }
      }
    }

    .hamburger__line--2 {
      bottom: 0;
      margin: auto;
      top: 0;
      transition: opacity .0s ease-in-out .3s;

      :global(.nav-open) & {
        opacity: 0;
        transition: opacity .0s ease-in-out .3s;
      }
    }

    .hamburger__line--3 {
      bottom: 0;
      transition: opacity .0s ease-in-out .3s, bottom .2s ease-in-out .3s;

      :global(.nav-open) & {
        bottom: var(--translate-to);
        opacity: 0;
        transition: bottom .3s ease-in-out, opacity .0s ease-in-out .3s;
      }
    }

    .hamburger__link {
      background: transparent;
      bottom: 0;
      font-size: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;

      :global(.has-js) & {
        display: none;
      }
    }
</style>
