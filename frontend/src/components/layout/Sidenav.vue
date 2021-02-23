<template>
  <div class="sidenav">
    <p class="sidenav-header">Список вопросов тут</p>
    <dropdown @update:model-value="updateChecked"
              v-for="questionnaire in questionnaires"
              :key="questionnaire.id"
              :questionnaire="questionnaire">
    </dropdown>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";

const api = require("@/utils/api")

export default {
  name: "Test",
  components: {Dropdown},
  data() {
    return {
      checked: {},
      questionnaires: [],
      questions: [],
    }
  },
  methods: {
    async getQuestionnairesList() {
      this.questionnaires = await api.getQuestionnairesList()
    },
    updateChecked(value, id) {
      this.checked[id] = value
    }
  },
  async created() {
    await this.getQuestionnairesList()
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/vars";

.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: $sidebar-width; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */


  &-header {
    font-size: 20px;
    color: white;
    padding: 10px;
  }
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }
}
</style>