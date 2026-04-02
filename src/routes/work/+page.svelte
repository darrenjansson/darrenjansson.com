<svelte:head>
	<title>Work | Darren Jansson – Frontend Engineer</title>
	<meta property="og:title" content="Work | Darren Jansson – Frontend Engineer" />
</svelte:head>

<Section title="Work" top={true} color="pink">
  <p>I&rsquo;ve been fortunate enough to work on some really amazing projects, with great agencies and clients. I&rsquo;ve listed a selection of some of them below.  </p>
</Section> 
<Section color="black">
  <Work title="Cinch" color="#8C32BE" logo="/images/logo-bg-cinch.svg" logoWidth={75} logoHeight={27} logoSpacingX={20} logoSpacingY={40}>
    <p>I&rsquo;m currently a Senior Engineer at Cinch. I've been working on our new greenfield design system, working with the team on the strategic and technical planning of creating and integrating a new design system into an existing codebase.</p>
  </Work>
  <Work title="Auto Trader" link="https://www.autotrader.co.uk/cars/new" subtitle="Vehicle retail site" color="#222b5e" logo="/images/logo-bg-autotrader.svg" logoWidth={156} logoHeight={20} logoSpacingX={20} logoSpacingY={40}>
    <p>Senior Frontend Developer, working mainly with a Storybook design system, porting exiting pages over to the new system and creating new pages for marketing campaigns.</p>
  </Work>
  <Work title="Co-op Shifts" link="https://shifts.coop.co.uk/" subtitle="Staff shift management progressive web app" color="#00B1E7" logo="/images/logo-bg-coop.svg" logoWidth={47} logoHeight={50} logoSpacingX={20} logoSpacingY={70}>
    <p>Front-end developer for React application, interfacing with a Java backend. Test-driven development, extensive pair and mob programming. Mentoring and leadership of development team.</p>
  </Work>
  <Work title="CDL" subtitle="White label insurance application site" color="#222" logo="/images/logo-bg-cdl.svg" logoWidth={90} logoHeight={20} logoSpacingX={20} logoSpacingY={50}>
    <p>Working with the in-house team on a bespoke Node.js application, allowing the modular construction of insurance application sites by less experienced team members. Used for clients such as Sainsbury's, Swinton and Tesco. Test-driven development.</p>
  </Work>
  <Work title="Channel Mum" link="https://www.channelmum.com/" subtitle="Parenting community progressive web app" color="#f55e62" logo="/images/logo-bg-channelmum.svg" logoWidth={124} logoHeight={34.84} logoSpacingX={20} logoSpacingY={60}>
    <p>Lead frontend developer for React application, front end process (including test-driven development), architecture and development. Utilises Redux, Algolia and Contenful API.</p>
  </Work>
  <Work title="Go Euro (now Omio)" link="https://www.omio.co.uk/" subtitle="Travel aggregator booking site" color="#132968" logo="/images/logo-bg-goeuro.svg" logoWidth={133} logoHeight={24.7} logoSpacingX={20} logoSpacingY={60}>
    <p>Working with the in-house team to re-factor and re-architect an Angular application to utilise component structures and a new backend API. Test-driven development. Remote and on-site in Berlin.</p>
  </Work>
  <Work title="Seesaw by Netmums" subtitle="Activity and event listing app" color="#f7d100" logo="/images/logo-bg-seesaw.svg" logoWidth={124} logoHeight={39.4} logoSpacingX={20} logoSpacingY={60}>
    <p>Cross platform (iOS and Android) Ionic and Angular app development, also incorporating various map, weather and analytics APIs.</p>
  </Work>
  <Work title="Go-Ahead Group" subtitle="Multiple train booking and information sites" color="#0e78be" logo="/images/logo-bg-goahead.svg" logoWidth={133} logoHeight={21.2} logoSpacingX={20} logoSpacingY={50}>
    <p>(London Midland, <Link href="https://www.southeasternrailway.co.uk/">Southeastern</Link>, <Link href="https://www.southernrailway.com/">Southern</Link>, <Link href="https://www.greatnorthernrail.com/">Great Northern</Link>, <Link href="https://www.thameslinkrailway.com/">Thameslink</Link>, <Link href="https://www.gatwickexpress.com/">Gatwick Express</Link>)</p>
    <p>Lead frontend developer for Sitecore project, front end process (including test-driven development), architecture and development, multisite, running 6 themes from a shared codebase.</p>
  </Work>
  <Work title="Amnesty International" link="https://www.amnesty.org/" subtitle="Global human rights site" color="#ff0" logo="/images/logo-bg-amnesty.svg" logoWidth={133} logoHeight={44.7} logoSpacingX={20} logoSpacingY={64.7}>
    <p>Lead frontend developer for Umbraco project, front end process, architecture and development, multilingual including Arabic right to left layout.</p>
  </Work>
  <Work title="Bupa" link="https://www.bupa.co.uk/" subtitle="Private healthcare site" logo="/images/logo-bg-bupa.svg" color="#00aeef" logoWidth={47} logoHeight={47} logoSpacingX={20} logoSpacingY={77}>
    <p>Rapid prototyping and contributing to creation of component library for new site.</p>
  </Work>
  <Work title="HMV" link="https://www.hmv.com/" subtitle="Music retailer site" color="#ed0677" logo="/images/logo-bg-hmv.svg" logoWidth={133} logoHeight={28.2} logoSpacingX={20} logoSpacingY={56.4}>
    <p>Majority of front end development for initial launch of site. I killed Nipper! I was the one who removed Nipper the dog from the HMV logo on the site when they rebranded. Sad times.</p>
  </Work>
</Section>

<script>
  import Link from '../../components/link.svelte';
  import Section from '../../components/section.svelte';
  import Work from '../../components/work.svelte';
</script>
