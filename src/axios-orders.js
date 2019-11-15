import axios from 'axios'

const instance = axios.create({
  baseURL: "https://burger-builder-1c978.firebaseio.com/"
});

export default instance;