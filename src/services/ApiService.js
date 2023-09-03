import axios from "axios"

const ReqGet = async (url) => {
  return await axios
    .get(url)
    .then(resp => {
        return resp
    })
    .catch(err => console.log(err))
}

const ApiService = {
    ReqGet,
}

export default ApiService;