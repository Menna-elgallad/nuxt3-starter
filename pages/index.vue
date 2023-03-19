<template lang="pug">
.container
  h1.text-red-500.text menna
  Button.mybuttn(label="Submit")
  Icon(name="fa-brands:bandcamp")
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".mybuttn", {
    autoAlpha: 0,
    duration: 1.5,
    y: -100,
  });
}
</script>
