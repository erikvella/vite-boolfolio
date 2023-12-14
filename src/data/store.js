import { reactive } from 'vue';

export const store = reactive({
  apiUrl : 'http://127.0.0.1:8001/api/',
  projects : [],
  tecnologies : [],
  types : [],
  paginator : {
    links : [],
    firstPageUrl : '',
    lastPageUrl : '',
  },
    isLoaded : false,
    titleBlog : 'Elenco di tutti i progetti',

});
