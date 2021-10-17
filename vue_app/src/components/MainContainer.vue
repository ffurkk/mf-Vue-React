<template>
  <div class="flex flex-1 flex-col bg-blue-200 justify-center h-screen w-full">
    <p class="flex p-8 justify-center">Vue App</p>
    <div id="reactRoot" />
    <div class="flex flex-row">
      <ListContainer
        v-for="list in lists"
        :key="list.itemsKey"
        :listObj="list"
        :items="getItems(list.itemsKey)"
      />
    </div>
  </div>
</template>

<script>
import ListContainer from "./Lists/ListContainer.vue";
import ReactWrapper from "remote/ReactWrapper";
import axios from "axios";

export default {
  components: {
    ListContainer: ListContainer,
  },

  data() {
    return {
      lists: [
        {
          title: "Todo",
          itemsKey: "todo",
          icon: "https://img.icons8.com/material/24/000000/deadline.png",
        },
        {
          title: "Inprogress",
          itemsKey: "inprogress",
          icon: "https://img.icons8.com/material/24/000000/in-progress--v1.png",
        },
        {
          title: "Done",
          itemsKey: "done",
          icon: "https://img.icons8.com/material/24/000000/checkmark--v1.png",
        },
      ],
      items: [],
    };
  },

  methods: {
    getItems(filt) {
      return this.items.filter((it) => it.status === filt);
    },

    onAdded() {
      console.log("new Item added from react");
      this.getData();
    },

    getData() {
      const _items = [];
      axios
        .get(
          "https://todo-app-96ede-default-rtdb.europe-west1.firebasedatabase.app/todoList.json"
        )
        .then((res) => {
          for (let key in res.data) {
            _items.push({ ...res.data[key], id: key });
          }
          this.items = _items;
        })
        .catch();
    },
  },

  mounted() {
    const root = document.getElementById("reactRoot");
    ReactWrapper(root);
  },

  created() {
    this.getData();
  },
};
</script>
