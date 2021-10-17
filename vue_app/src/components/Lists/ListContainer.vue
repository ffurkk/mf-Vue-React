<template>
  <div
    class="bg-green-100 flex flex-1 flex-col border-2 m-10 w-4/12 rounded-lg"
    style="height: 600px"
    @drop="onDrop($event)"
    @dragover="allowDrop($event)"
  >
    <ListHeader :title="listObj.title" />
    <List
      :items="items"
      :icon="listObj.icon"
      @deleteItem="deleteItem($event)"
    />
  </div>
</template>

<script>
import axios from "axios";
import List from "../Lists/List.vue";
import ListHeader from "../Lists/ListHeader.vue";

export default {
  props: ["listObj", "items", "onUpdate"],
  components: {
    List: List,
    ListHeader: ListHeader,
  },

  methods: {
    allowDrop(ev) {
      ev.preventDefault();
    },

    onDrop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      const _item = JSON.parse(data);

      if (_item.id && _item.status !== this.listObj.itemsKey) {
        this.updateItem(_item.id);
      }
    },

    deleteItem(deleteId) {
      axios
        .delete(
          "https://todo-app-96ede-default-rtdb.europe-west1.firebasedatabase.app/todoList/" +
            deleteId +
            ".json"
        )
        .then((res) => {
          this.$parent.getData();
        });
    },

    updateItem(id) {
      axios
        .patch(
          "https://todo-app-96ede-default-rtdb.europe-west1.firebasedatabase.app/todoList/" +
            id +
            ".json",
          {
            status: this.listObj.itemsKey,
          }
        )
        .then((res) => {
          this.$parent.getData();
        })
        .catch((err) => {});
    },
  },
};
</script>
