<svelte:head>
	<title>Skills | Darren Jansson – Frontend Engineer</title>
	<meta property="og:title" content="Skills | Darren Jansson – Frontend Engineer" />
</svelte:head>

<Section title="Skills" top={true} color="orange">
  <p>I specialise in frontend development, using CSS, HTML and JS to develop responsive, performant and accessible websites for over {new Date().getFullYear() - 2004} years. I have spent nearly a decade working as a freelancer, which has led to me being especially adaptable, quickly getting to grips with each new client's setup and codebases.</p>    <Lists lists={[['React, Angular, Gatsby and Svelte', 'TypeScript, JS, ES5, ES6+', 'CI and TDD (Jest, Cypress, RTL, Percy)'], ['CSS, Sass and CSS-in-JS', 'HTML', 'Node, Webpack and Gulp']]} />
  <h2>React, GraphQL and Styled Components</h2>
  <p>I have worked almost exclusively in React for the past few years, with data being stored in MongoDB and accessed via GraphQL. Most of my recent work with styles has been done using CSS-in-JS solutions. I converted a Sass implementation into Styled Components and am currently working with Vanilla Extract and CSS Modules.</p>  
  <h2>Test Driven Development</h2>
  <p>Jest and testing-library are my go to unit and integration test tools. I use Cypress for end to end tests and BackstopJS to create automated visual regression tests. Previously I have used Mocha and Chai as well as Jasmin and Karma.</p>
  <h2>Lean and agile</h2>
  <p>I have a good deal of experience working in a lean and agile environments across multiple agencies and clients, both in house and remotely. The majority of teams I have worked with used Jira, but I have also used other tools such as Microsoft Team Foundation Server, LeanKit, Monday and of course Trello.</p>
  <h2>Mentoring and leadership</h2>
  <p>I've been working recently as a mentor to one of our apprentices, and I've found it to be a very rewarding experience. I've previously worked with junior developers and other colleagues, either by pairing, mobbing or just being there for advice when they need it. With having nearly two decads of experience I feel like I have a responsibility to help wherever I can. </p>
  <h2>Experienced with WordPress and Craft CMS</h2>
  <p>I have previously worked with extensively with WordPress, and more recently with Craft CMS. My previous work as an Object-Oriented PHP developer with CakePHP, CodeIgniter and Symfony allows me to get the most out of these systems.</p>
  <h2>Sitecore and Umbraco friendly</h2>
  <p>Many of the projects I have worked on in the last few years used a .NET CMS, and I am skilled at working with both Sitecore and Umbraco. I am adept at integrating Razor templates and have a working knowledge of editing controllers and tests.</p>
</Section> 

<script>
  import Lists from '../../components/lists.svelte';
  import Section from '../../components/section.svelte';
</script>

<style lang="scss">
  h2 {
    font-size: 1.5rem;
    font-weight: var(--font-weight);
    margin-bottom: 0;
    margin-top: 1em;
  }
</style>
