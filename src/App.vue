<template>
  <Sortable tag="ul">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
  </Sortable>
</template>

<script>
import Sortable from "./components/Sortable.vue";
export default {
  name: "App",
  components: { Sortable },
};
</script>
