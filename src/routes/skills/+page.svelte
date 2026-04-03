<svelte:head>
	<title>Skills | Darren Jansson – Frontend Engineer</title>
	<meta property="og:title" content="Skills | Darren Jansson – Frontend Engineer" />
</svelte:head>

<Section title="Skills" top={true} color="orange">
  <p>I specialise in frontend development, using CSS, HTML and JS to develop responsive, performant and accessible websites. I spent nearly a decade working as a freelancer, which led to me being especially adaptable, quickly getting to grips with each new client&rsquo;s setup and codebases.</p> 
  <Lists lists={[['Claude and Copilot', 'React, Angular, Gatsby and Svelte', 'TypeScript, JS, ES5, ES6+'], ['CI and TDD (Jest, Cypress, RTL, Percy)', 'CSS, Sass and CSS-in-JS', 'HTML']]} />
  <h2>AI Driven Development</h2>
  <p>Most recently, I have been extensively leveraging AI to enhance my productivity and workflow. I am currently using Claude and have been involved in setting up our team&rsquo;s agents, skills, and commands, with over {new Date().getFullYear() - 2004} years of experience to critically evaluate and verify their output.</p>
  <h2>React, Mongoose and Sass</h2>
  <p>I have worked almost exclusively in React for the better part of a decade, with data being stored in MongoDB. I currently use Mongoose and have previously used GraphQL. Most of my recent work with styles has been done using Sass, converting from JSS. I have previously used Styled Components, Vanilla Extract and CSS Modules.</p>  
  <h2>Test Driven Development</h2>
  <p>Jest and testing-library are my go to unit and integration test tools. I use Cypress for end to end tests and BackstopJS to create automated visual regression tests. Previously I have used Mocha and Chai as well as Jasmine and Karma.</p>
  <h2>Lean and agile</h2>
  <p>I have a good deal of experience working in a lean and agile environments across multiple agencies and clients, both in house and remotely. The majority of teams I have worked with used Jira, but I have most recently been using Linear along with its MCP server.</p>
  <h2>Mentoring and leadership</h2>
  <p>Previously I have mentored junior team members in both a casual format and in formal apprenticeship schemes, and I&rsquo;ve found it to be a very rewarding experience. As a staff engineer I often find myself working with colleagues, either pairing, mobbing or just being there for assistance when they need it. With having nearly two decades of experience I feel like I have a responsibility to help wherever I can. </p>
  <h2>CMS and backend integration</h2>
  <p>I have extensive experience working with a range of content management systems and backend frameworks across both PHP and .NET ecosystems. I am comfortable building on top of established platforms, including WordPress, Craft CMS, Sitecore, Umbraco, CakePHP, CodeIgniter, and Symfony.</p>  
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
