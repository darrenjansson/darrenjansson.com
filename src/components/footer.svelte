<section class="c-footer">
  <div class="c-footer__inner">
    <p>&copy; {new Date().getFullYear()} Darren Jansson | <Link class="c-footer__link" href="https://github.com/darrenjansson/darrenjansson.com">View source code on GitHub</Link></p>
  </div>
</section>

<script>
  import Link from './link.svelte';
</script>

<style lang="scss">
  .c-footer {
    background-color: var(--color-grey-dark);
    color: #ddd;
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
  
    .c-footer__inner {
      margin-left:  auto;
      margin-right: auto;
      max-width: var(--width-content-max);
      overflow: auto;
      padding: 2vh 1rem;
    }
</style>