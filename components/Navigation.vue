
<template>
    <nav class="py-3 bg-bodyDark sticky top-0 left-0">
        <div class="container mx-auto px-4 flex justify-between">
            <nuxt-link to="">
                <img src="~/assets/tech/logo.png" class="w-64" alt="Discover Nuxt 3" />
            </nuxt-link>
            <ul class="flex items-center">
                <li><nuxt-link class="nav-link" to="#home">Home</nuxt-link></li>
                <li><nuxt-link class="nav-link" to="#about">About us</nuxt-link></li>
                <li><nuxt-link class="nav-link" to="#service">Services</nuxt-link></li>
                <li><nuxt-link class="nav-link" to="#testimonial">Testimonial</nuxt-link></li>
                <li><nuxt-link class="nav-link" to="#technology">Technology</nuxt-link></li>
                <li><nuxt-link class="nav-link" to="#team">Team</nuxt-link></li>
                <li><nuxt-link class="nav-link" to="#contact">Contcat us</nuxt-link></li>
            </ul>
        </div>
    </nav>
</template>
<style scoped>
.nav-link{
    @apply py-3 px-4 inline-block text-white;
}
</style>