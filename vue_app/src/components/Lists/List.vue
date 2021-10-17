<template>
  <div class="mt-6 p-2" style="overflow: overlay">
    <ListItem
      v-for="item in items"
      :key="item.text"
      :item="item"
      :icon="icon"
      @deleteItem="$emit('deleteItem', $event)"
    />
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  components: {
    ListItem: ListItem,
  },

  props: ["items", "icon"],
};
</script>
