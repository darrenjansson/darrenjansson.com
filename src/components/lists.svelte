<script>
  let { lists } = $props();
</script>

<div class="c-list">
  {#each lists as list}
    <div class="c-list__item">
      <ul>
        {#each list as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style lang="scss">
  $d-gutter: 1rem;

  .c-list {
    display: flex;
    flex-wrap: wrap;
    margin: -#{$d-gutter};
  }

    .c-list__item {
      flex: 1 0 $d-gutter;
      margin: 0 $d-gutter;
      flex-basis: calc(100% - #{$d-gutter * 2});

      @media (min-width: 30em) {
        flex-basis: calc(50% - #{$d-gutter * 2});
      }
    }
</style>
