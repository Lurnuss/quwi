<template>
<div class="project__list container">
  <Project
    @click="$emit('openModal', project)"
    v-for="project in projects"
    :project="project"
    :key="project.id"
  />
</div>
</template>

<script>
import Project from "~/components/Project";

export default {
  name: "ProjectList",
  components: { Project },
  props: {
    projects: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped lang="scss">
.project {
  &__list {
    margin: 30px auto 0;
   }
}
</style>
