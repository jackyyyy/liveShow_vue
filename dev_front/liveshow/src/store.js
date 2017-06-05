const STORAGE_HEY = 'todos-vuejs'
const REGISTER_HEY = 'registerdb'
export default {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_HEY)) || []
  },
  save: function (items) {
    window.localStorage.setItem(STORAGE_HEY, JSON.stringify(items))
  },
  registerGet: function () {
    return JSON.parse(window.localStorage.getItem(REGISTER_HEY)) || []
  },
  registerSet: function (items) {
    window.localStorage.setItem(REGISTER_HEY, JSON.stringify(items))
  }
}
