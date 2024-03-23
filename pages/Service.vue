<script lang="ts" setup>
import { Icon } from '#components'
const data = useState("data", () => [
  {
    "title": "Web Design",
    "description": "Crafting visually stunning websites that captivate audiences and elevate brands."
  },
  {
    "title": "Web Development",
    "description": "Building robust, scalable web solutions tailored to your unique business requirements."
  },
  {
    "title": "E-commerce Solutions",
    "description": "Empowering businesses with seamless online shopping experiences, driving sales and satisfaction."
  },
  {
    "title": "Mobile App Development",
    "description": "Creating intuitive, feature-rich mobile applications that engage users and drive growth."
  },
  {
    "title": "SEO Services",
    "description": "Optimizing websites to rank higher on search engines, increasing visibility and traffic."
  },
  {
    "title": "Content Management",
    "description": "Empowering clients with easy-to-use systems to manage and update website content."
  },
  {
    "title": "UX/UI Design",
    "description": "Designing user-centric interfaces that enhance usability, satisfaction, and experiences."
  },
  {
    "title": "Website Maintenance",
    "description": "Providing ongoing support and maintenance services to ensure websites remain secure and optimized."
  }
]);
</script>

<template>
  <section class="py-12" id="service">
    <div class="xl:container mx-auto px-5">
      <div class="grid grid-cols-12 mb-16 justify-center">
        <div class="col-span-12 md:col-span-12 text-center">
          <h1 class="text-5xl font-extrabold leading-tight text-white mb-3">Our <span class="text-green">Services</span></h1> 
          <p class="text-xs leading-snug text-white"> Transform your online presence with lightning-fast web solutions designed to revolutionize your digital footprint."</p>
        </div>
       </div>
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 md:col-span-3" v-for="item in data" :key="item.title">
          <div class="bg-card text-white border border-slate-700 shadow-md py-4 px-8 rounded-md">
            <div class="bg-[#040621] rounded-full mb-3 w-16 h-16 flex items-center justify-center">
              <Icon size="24" name="uil:globe" color="white" />
            </div>
            <h4 class="text-md font-semibold mb-2">{{ item.title }}</h4>
            <p class="text-xs leading-snug">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
