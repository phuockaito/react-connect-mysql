import axios from "axios";
const API_URL = "";
export default function ServerURL(endpoint, method, data,Token) {
    return(
      axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: data,
        headers:  { "Authorization": `Bearer ${Token}` }
      })
    )
  } 