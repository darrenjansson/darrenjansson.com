<script>
  let { color = undefined, title = undefined, top = false, stretch = false, children } = $props();
</script>

<section
  class="c-section {color ? `c-section--${color}` : ''}"
  class:c-section--stretch={stretch}
  class:c-section--top={top}
>
  <div class="c-section__inner">
    {#if title}<h1 class="c-section__title">{title}</h1>{/if}
    {@render children?.()}
  </div>
</section>

<style lang="scss">
  .c-section {
    background-color: var(--color-grey-dark);
    color: #fff;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-bottom: 5vh;
    position: relative;

    &:before {
      background-color: var(--color-grey-dark);
      clip-path: polygon(0% 5vh, 100% 0%, 100% 100%, 0% 100%);
      content: '';
      display: block;
      height: 6vh;
      position: absolute;
      top: -5vh;
      width: 100%;
    }
  }

  .c-section--blue {
    background-color: var(--color-blue);
    background: linear-gradient(0deg, var(--color-purple), var(--color-blue));

    &:before {
      background-color: var(--color-blue);
    }
  }

  .c-section--pink {
    background-color: var(--color-pink);
    background: linear-gradient(0deg, #bb4499, var(--color-pink));

    &:before {
      background-color: var(--color-pink);
    }
  }

  .c-section--orange {
    background-color: var(--color-pink);
    background: linear-gradient(0deg, #ee5555, var(--color-pink));

    &:before {
      background-color: var(--color-pink);
    }
  }

.c-section--black {
  background-color: #333;
  background: linear-gradient(0deg, #222, #333);

  &:before {
    background-color: #333;
  }
}

.c-section--trans {
  background-color: var(--color-black-trans);

  &:before {
    background-color: var(--color-black-trans);
  }
}

  .c-section--white {
    background-color: #fff;
    background: linear-gradient(0deg, #eee, #fff);
    color: var(--color-grey-dark);

    &:before {
      background-color: #fff;
    }
  }

  .c-section--top {
    padding-top: 105px;
  }

  .c-section--stretch {
    flex-grow: 1;
  }

    .c-section__title {
      font-size: 3.275rem;
      font-weight: normal;
      line-height: 1.25;
      margin-top: 1.5em;
    }

    .c-section__inner {
      box-sizing: border-box;
      margin-bottom: 3.5rem;
      margin-left:  auto;
      margin-right: auto;
      max-width: var(--width-content-max);
      overflow: auto;
      padding-left:  1rem;
      padding-right: 1rem;
      width: 100%;

      .c-section--stretch & {
        position: absolute;
        display: flex;
        height: 100vh;
        left: 0;
        right: 0;
      }
    }
</style>
