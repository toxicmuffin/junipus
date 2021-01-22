---
author: Kai Asuncion
hero_image: "/uploads/_mg_7473-edit.jpg"
alt_tag: Place Holder
title: Read Me
description: 'A quick run down to Juniperus '
tags:
- Featured
- Juniper
- Web Development

---
<a _href_="https://juniperus.website/" _style_="inline">

<h1 _align_="center">

 Juniperus

<img _src_="static/uploads/somelogo.svg" _alt_="Juniperus logo" _height_="30">

</h1>

</a>

<p _align_="center">

<a _href_="[https://forestry.io/](https://forestry.io/ "https://forestry.io/")">

<img _src_="assets/brandLogos/forestry.svg" _alt_="Forestry Logo" _height_="30" />

</a>

&nbsp;

<a _href_="[https://nuxtjs.org/](https://forestry.io/ "https://forestry.io/")">

<img _src_="assets/brandLogos/nuxtjs-typo.svg" _alt_="Forestry Logo" _height_="30"/>

</a>

</p>

  
\[!\[Netlify Status\]([https://api.netlify.com/api/v1/badges/03655470-a822-4032-8bd3-e9e05268f4d9/deploy-status](https://api.netlify.com/api/v1/badges/03655470-a822-4032-8bd3-e9e05268f4d9/deploy-status "https://api.netlify.com/api/v1/badges/03655470-a822-4032-8bd3-e9e05268f4d9/deploy-status"))\]([https://app.netlify.com/sites/juniperus/deploys](https://app.netlify.com/sites/juniperus/deploys "https://app.netlify.com/sites/juniperus/deploys"))  
\## AboutJuniperus is a blog template that utilizes Nuxt and Forestry. Nuxt is a Vue Javascript framework and Forestry is a git based headless content management system.   
\### Scope / Thought Process  
The scope of this project was to learn how a headless cms works all while familiarizing myself more with Nuxt. Since the scope of the project is overwhelmingly broad, I made the main goal for the end product to be a template. As in, anyone could use it how they see fit. I chose to do this project in the form of a template because it would mean other people besides myself could use it. Keeping that in mind, I wanted to make everything as User and Developer friendly.   
Features:* Blog Page / List /* Scroll to Top* Time to Read* Author(s) List / Profile / Posts By* Tags / Filtering* Featured Posts* Dark / Light / Sepia (Read) / System modes  
Todo List:* Docs* Comments* Page Transitions* Touch up styling and Tailwindcss classes  
\## Getting Started  
\### Local Development  
\`\`\`bash

_#clone repo_

$ git clone [https://github.com/toxicmuffin/juniperus.git](https://forestry.io/ "https://forestry.io/")

  
$ cd juniperus

  
_# install dependencies_$ yarn install  
_# serve with hot reload at localhost:3000_$ yarn dev

\`\`\`

\### \[Import to Forestry\]([https://forestry.io/docs/quickstart/setup-site/](https://forestry.io/ "https://forestry.io/"))

Importing the repo to Forestry is straight forward. Create an account or login with git. Once you do that, navigate to the dashboard if it didn't already. 

  
Dashboard > Add Site > Other > Select Git Provider > Choose Repository and Branch

  
![Step by step image](/uploads/instructions_unclear.jpg "Instructions Unclear")

  
\### Production

\`\`\`bash

\# generate static project$ yarn generate  
$ yarn start

\`\`\`

  
\### Deploy to your favorite static hosting site.