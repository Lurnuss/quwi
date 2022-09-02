<template>
  <div>
    <ProjectList v-if="projects" :projects="projects" @openModal="openModal($event)"/>
    <Modal :show="modal" @toggle="modal = false">
      <Form :project="currentProject" @update="updateProject($event)"/>
    </Modal>
  </div>
</template>

<script>
import ProjectList from "~/components/ProjectList";
import Modal from "~/components/common/Modal";
import Form from "~/components/common/Form";
export default {
  layout: 'projects',
  name: 'IndexPage',
  components: {Form, Modal, ProjectList},
  async asyncData({ app }) {
    const response = await app.$services.projects.projectsList()
    return { projects: response.projects }
  },
  data: () => ({
    modal: false,
    currentProject: null,
  }),
  methods: {
    openModal(data) {
      this.currentProject = data
      this.modal = true
    },
    async updateProject(project) {
      if (project.name === this.currentProject.name) {
        this.modal = false
        return
      }
      const data = {
        project: project,
        params: {
          id: this.currentProject.id
        }
      }
      try {
        this.$services.projects.updateProject(data)
        this.modal = false
        this.$toast.success('The project name was successfully updated')
      } catch(e) {
        this.$toast.error(e.response?.data?.message ? e.response.data.message : 'oops, something went wrong')
        e.response ? console.log(e.response.data) : console.log(e)
      }
    }
  }
}
</script>
