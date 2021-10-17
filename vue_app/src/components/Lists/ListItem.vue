<template>
  <div
    class="m-2 flex flex-1 justify-start pl-1 p-3 rounded-lg"
    :class="{
      'bg-red-300': this.item.status === 'todo',
      'bg-yellow-300': this.item.status === 'inprogress',
      'bg-green-300': this.item.status === 'done',
    }"
    draggable="true"
    :id="item.id"
    @dragstart="dragStart($event)"
  >
    <div style="width: 24px; height: 24px">
      <img
        width="24"
        height="24"
        style="max-height: 24px; max-width: 24px"
        :src="icon"
      />
    </div>

    <p class="text-xl flex flex-1 pl-2">
      {{ item.text }}
    </p>

    <button
      @click="$emit('deleteItem', item.id)"
      class="bg-red-600 p-2 rounded-lg h-12"
    >
      Del
    </button>
  </div>
</template>

<script>
export default {
  props: ["item", "icon"],

  methods: {
    dragStart(ev) {
      ev.dataTransfer.setData(
        "text",
        JSON.stringify({ id: this.item.id, status: this.item.status })
      );
    },
  },
};
</script>
