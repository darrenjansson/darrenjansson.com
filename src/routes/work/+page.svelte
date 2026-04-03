<svelte:head>
	<title>Work | Darren Jansson – Frontend Engineer</title>
	<meta property="og:title" content="Work | Darren Jansson – Frontend Engineer" />
</svelte:head>

<Section title="Work" top={true} color="pink">
  <p>I&rsquo;ve been fortunate enough to work on some really amazing projects, with great agencies and clients. I&rsquo;ve listed a selection of some of them below.  </p>
  <p>If you'd like more detail or information on any of the work I've done then please <Link href="/contact">get in touch</Link>.</p>
</Section> 
<Section color="black">
  {#each work as item}
    <Work title={item.title} link={item.link} subtitle={item.subtitle} color={item.color} logo={item.logo} logoWidth={item.logoWidth} logoHeight={item.logoHeight} logoSpacingX={item.logoSpacingX} logoSpacingY={item.logoSpacingY}>
      {#if item.links}
        <p>({#each item.links as link, i}{#if i}, {/if}{#if link.href}<Link href={link.href}>{link.label}</Link>{:else}{link.label}{/if}{/each})</p>
      {/if}
      <p>{item.description}</p>
    </Work>
  {/each}
</Section>

<script>
  import Link from '../../components/link.svelte';
  import Section from '../../components/section.svelte';
  import Work from '../../components/work.svelte';
  import { work } from '$lib/work.js';
</script>
