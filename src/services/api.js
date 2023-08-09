import axios from 'axios';

//base da url:https://api.themoviedb.org/3/
//url da api:/movie/now_playing?api_key=afde1b0b7af75cd4bc990974ea294c67&language=pt-BR

const api=axios.create({
  baseURL:'https://api.themoviedb.org/3/'
});

export default api;