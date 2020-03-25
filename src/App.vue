<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Layout/Header";
export default {
  components: {
    "app-header": Header
  }
}
</script>

