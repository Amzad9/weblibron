<script lang="ts" setup>
import Navigation from "@/components/Navigation.vue";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Service from "@/pages/Service.vue";
import Contact from "@/pages/Contact.vue";
meta: [
  { hid: 'description', name: 'description', content: 'Your page description goes here.' },
  { hid: 'keywords', name: 'keywords', content: 'Web Design, Web Development, E-commerce Solutions, Mobile App Development, SEO Services, Content Management, UX/UI Design, Website Maintenance, Crafting, Visually stunning, Captivate, Elevate brands, Robust, Scalable, Tailored, Unique business requirements, Empowering businesses, Seamless, Online shopping experiences, Drive sales, Satisfaction, Intuitive, Feature-rich, Engage users, Drive growth, Optimizing websites, Rank higher, Search engines, Visibility, Traffic, Easy-to-use systems, Manage, Update website content, User-centric, Interfaces, Usability, Satisfaction, Experiences, Ongoing support, Maintenance services, Secure, Optimized, Solutions, Business goals, Innovative, Technology, Collaboration, Cutting-edge, Digital experiences, Partner' }
]
useHead({
  title: 'Weblibron | Lightning-Fast Web Development Services',
  meta: [
    { name: 'description', content: 'Welcome to Weblibron, your gateway to unparalleled digital experiences. Explore our array of innovative web solutions, including captivating web design, robust development services, seamless e-commerce solutions, intuitive mobile app development, and expert SEO services. With a focus on user-centric design and cutting-edge technology, we empower businesses to elevate their online presence and drive growth. Whether you are seeking engaging content management systems, elegant UX/UI design, or reliable website maintenance, we are your trusted partner in crafting the digital future. Join us in shaping exceptional digital journeys tailored to your unique needs.' },
    { name: 'keywords', content: 'Web Design, Web Development, E-commerce Solutions, Mobile App Development, SEO Services, Content Management, UX/UI Design, Website Maintenance, Crafting, Visually stunning, Captivate, Elevate brands, Robust, Scalable, Tailored, Unique business requirements, Empowering businesses, Seamless, Online shopping experiences, Drive sales, Satisfaction, Intuitive, Feature-rich, Engage users, Drive growth, Optimizing websites, Rank higher, Search engines, Visibility, Traffic, Easy-to-use systems, Manage, Update website content, User-centric, Interfaces, Usability, Satisfaction, Experiences, Ongoing support, Maintenance services, Secure, Optimized, Solutions, Business goals, Innovative, Technology, Collaboration, Cutting-edge, Digital experiences, Partner' }
  ],
})
</script>
<template>
  <div class="bg-bodyDark">
    <NuxtLayout>
      <Navigation />
      <Home />
      <About />
      <Service />
      <Contact />
    </NuxtLayout>
  </div>
</template>
<style></style>
