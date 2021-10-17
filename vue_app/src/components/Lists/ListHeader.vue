<template>
  <div class="flex w-full justify-center bg-gray-100 rounded-md">
    <h3 class="flex justify-center text-2xl">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
