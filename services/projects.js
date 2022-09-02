import ApiService from './api'

//In general better to use .env file to store all the API, etc... but this is a test project so if req. All the data can be transmitted to .env
const API = 'https://api.quwi.com/v2/'
export default class Projects extends ApiService {
  projectsList(params) {
    return this.axios.$get(`${API}projects-manage/index`, {
      params: params
    })
  }
  updateProject(data) {
    return this.axios.$post(`${API}projects-manage/update`, data.project, {
      params: data.params
    })
  }
}
