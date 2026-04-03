<svelte:head>
	<title>Darren Jansson – Frontend Engineer</title>
	<meta property="og:title" content="Darren Jansson – Frontend Engineer" />
</svelte:head>

<Masthead />

<Section title="I&rsquo;m a frontend engineer based in the UK.">
    <p>With over {new Date().getFullYear() - 2004} years of commercial experience I develop responsive, performant and accessible websites using HTML, CSS and JavaScript.</p>
    <p>I am currently a Staff Engineer at SamCart, working exclusively on Typeset, an AI-powered design and content creation platform for building slide decks, eBooks, social media content, and more.</p>
    <p><Link class="c-link--home" href="/about">More about</Link></p>
</Section>

<Section title="Skills" color="blue">
    <p>For the past few years I have worked almost exclusively in React, with some Gatsby and Jekyll thrown in as well. I have previously worked extensively in Angular.</p>
    <Lists lists={[['React, Angular, Gatsby and Svelte', 'TypeScript, JS, ES5, ES6+', 'CI and TDD (Jest, Cypress, RTL, Percy)'], ['CSS, Sass and CSS-in-JS', 'HTML', 'Node, Webpack and Gulp']]} />
    <p>I have integrated with many different content management systems using .NET (Sitecore and Umbraco), PHP (WordPress and Craft CMS) and of course with headless, cloud based systems such as Prismic and Contentful.</p>
    <p><Link class="c-link--home" href="/skills">More skills</Link></p>
</Section>

<Section title="Recent work" color="pink">
   <Work title="Typeset" link="https://www.samcart.com/typeset" subtitle="Content creation platform" color="#ff0074" logo="/images/logo-bg-typeset.svg" logoWidth={156} logoHeight={37} logoSpacingX={20} logoSpacingY={40}>
    <p>I am currently a Staff Engineer at SamCart, working exclusively on Typeset, an AI-powered design and content creation platform for building slide decks, eBooks, social media content, and more.</p>
  </Work>
  <p><Link class="c-link--home" href="/work">More work</Link></p>
</Section>

<script>
  import Link from '../components/link.svelte';
  import Lists from '../components/lists.svelte';
  import Masthead from '../components/masthead.svelte';
  import Section from '../components/section.svelte';
  import Work from '../components/work.svelte';

</script>

<style lang="scss">
  :global(.c-link--home) {
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    margin-top: 1.5rem;
    padding: 0.5rem;
    text-transform: uppercase;

    &:hover {
      color: var(--color-grey-dark) !Important;
    }

    :global(.c-link__effect) {
      background-image: linear-gradient(0deg, var(--color-white), var(--color-white)) !Important;
    }
  }
</style>
