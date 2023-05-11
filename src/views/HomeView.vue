<template>
  <div class="home">
    <h1>{{ $store.getters.fullName }}</h1>
    <BUTTON @click="addBycommit">{{ $store.getters.fullName }}</BUTTON>
    <BUTTON @click="addCountByMap">addCountByMap</BUTTON>
    <BUTTON @click="addByAysnc">addCountByAysnc</BUTTON>
    <BUTTON @click="addByAysncMap">addCountByAysnc</BUTTON>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["addCountByCommitMap"]),
    ...mapActions(["addCountByAysncMap"]),
    addBycommit() {
      this.$store.commit("addCountByCommit", 6);
    },
    addCountByMap() {
      this.addCountByCommitMap(6);
    },
    addByAysnc() {
      this.$store.dispatch("addCountByAysnc", 6);
    },
    addByAysncMap() {
      this.addCountByAysncMap(6);
    },
  },
};
</script>
