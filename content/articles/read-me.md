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
# [Forestry](https://forestry.io) & [NuxtJS](https://nuxtjs.org)

## About

Juniperus is a blog template that utilizes Nuxt and Forestry. Nuxt is a Vue Javascript framework and Forestry is a git based headless content management system.

### Scope / Thought Process

The scope of this project was to learn how a headless cms works all while familiarizing myself more with Nuxt. Since the scope of the project is overwhelmingly broad, I made the main goal for the end product to be a template. As in, anyone could use it how they see fit. I chose to do this project in the form of a template because it would mean other people besides myself could use it. Keeping that in mind, I wanted to make everything as User and Developer friendly.

Features:

* Blog Page / List /
* Scroll to Top
* Time to Read
* Author(s) List / Profile / Posts By
* Tags / Filtering
* Featured Posts
* Dark / Light / Sepia (Read) / System modes

Todo List:

* Docs
* Comments
* Page Transitions
* Touch up styling and Tailwindcss classes
* MD styles

## Getting Started

### Local Development

    #clone repo
    
    $ git clone https://github.com/toxicmuffin/juniperus.git
    
    $ cd juniperus
    
    # install dependencies$ yarn install
    # serve with hot reload at localhost:3000$ yarn dev

### [Import to Forestry](https://forestry.io/docs/quickstart/setup-site)

Importing the repo to Forestry is straight forward. Create an account or login with git. Once you do that, navigate to the dashboard if it didn't already.

Dashboard > Add Site > Other > Select Git Provider > Choose Repository and Branch

![Step by step image](/uploads/instructions_unclear.jpg "Instructions Unclear")

### Production

    # generate static project
    $ yarn generate
    $ yarn start

### Deploy to your favorite static hosting site