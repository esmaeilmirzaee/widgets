import axios from 'axios';
// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=
export default Wikipedia = axios.create({
  baseURL: 'en.wikipedia.org/w/',
});
