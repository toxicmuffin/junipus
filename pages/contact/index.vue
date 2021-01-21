<template>
  <div class="flex flex-wrap-reverse items-center justify-center md:justify-evenly">
    <img :src="contact.contact_image" alt="contact image" class="sm:mr-4 sm:w-1/3 h-full">
    <div class="sm:w-1/3 mb-4">
      <h1 class="text-5xl">{{ contact.title }}</h1>
      <p class="text-3xl text-gray-700">{{ contact.phone_number }}</p>
      <p class="text-2xl text-gray-700 mb-8">{{ contact.email }}</p>
      <p class="prose prose-md">{{ contact.about}}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const contact = await $content('data/contactPage').fetch()
    return {
      contact
    }
  }
}
</script>
