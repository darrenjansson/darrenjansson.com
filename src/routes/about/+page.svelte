<svelte:head>
	<title>About | Darren Jansson – Frontend Engineer</title>
	<meta property="og:title" content="About | Darren Jansson – Frontend Engineer" />
</svelte:head>

<Section title="About" top={true} color="blue">
  <p>I&rsquo;m Darren Jansson, a staff frontend developer and engineer based in the UK. I&rsquo;ve been working both in-house and remotely for over {new Date().getFullYear() - 2004} years now, creating apps and websites for clients all over the world.</p>
  <p>I love problem solving and learning new things, which has led to me being supremely adaptable as a developer. I enjoy variety in what I do and working with people across all disciplines. </p>
  <p>I&rsquo;ve found it very rewarding mentoring apprentices recently, and I have a passion for helping the community. I&rsquo;ve attended many conferences, spoken at meetups and even organised a not for profit workshop with Harry Roberts, bringing together students and professionals for a day of learning.</p>
  <p>Outside of work I can often be found in the gym and I&rsquo;m into all the usual generic social interactions. During lockdown I renewed my love of glass blowing, something I&rsquo;ve not done since I was at uni. It&rsquo;s been great doing something creative and practical, plus who doesn&rsquo;t want to play with molten glass.</p>
  <div class="c-gallery">
    <div class="c-gallery__video">
      <div class="c-video">
        <iframe class="c-video__iframe" src="https://player.vimeo.com/video/645819602?h=8a411f6905" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Video of glass work" allowfullscreen></iframe>
      </div>
    </div>
    <div class="c-gallery__square">
      <picture>
        <source srcset="/images/glass-molten-widescreen.avif" media="(min-width: 570px)" type="image/avif">
        <source srcset="/images/glass-molten-widescreen.webp" media="(min-width: 570px)" type="image/webp">
        <source srcset="/images/glass-molten-widescreen.jpg" media="(min-width: 570px)" type="image/jpeg">
        <img class="c-gallery__img" src="/images/glass-molten.jpg" alt="Image of molten glass" loading="lazy" />
      </picture>
    </div>
    <div class="c-gallery__portrait">
      <picture>
        <source srcset="/images/glass-vase-widescreen.avif" media="(min-width: 570px)" type="image/avif">
        <source srcset="/images/glass-vase-widescreen.webp" media="(min-width: 570px)" type="image/webp">
        <source srcset="/images/glass-vase-widescreen.jpg" media="(min-width: 570px)" type="image/jpeg">
        <img class="c-gallery__img" src="/images/glass-vase.jpg" alt="Image of small blue glass vase" loading="lazy" />
      </picture>
    </div>
  </div>
  <script src="https://player.vimeo.com/api/player.js"></script>
</Section> 

<script>
  import Section from '../../components/section.svelte';
</script>

<style lang="scss">
  $breakpoint-gallery: 570px;

  .c-gallery {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    margin-top: 3.5rem;

    @media (min-width: $breakpoint-gallery) {
      grid-column-gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }
  }

    .c-gallery__img {
      display: block;
      max-width: 100%; 
    }

    .c-gallery__portrait {
      @media (min-width: $breakpoint-gallery) {
        grid-column: 2;
        grid-row: 1 / span 2;
        max-width: 75%;
      }
    }

    .c-gallery__square {
      max-width: 75%;

      @media (min-width: $breakpoint-gallery) {
        justify-self: end;
      }
    }

  .c-video {
    padding: 57.5% 0 0 0;
    position: relative;
  }

    .c-video__iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

  .u-trans {
    opacity: 0.75;
  }
</style>