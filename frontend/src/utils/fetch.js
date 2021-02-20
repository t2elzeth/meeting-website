import axios from "axios";
import urls from "@/utils/api";
import auth from "@/utils/auth";


export const fetchData = {
  get: urlKey => axios.get(urlKey)
}

export const fetchDataWithCred = {
  get: (urlKey, extraConfig = {}) => axios.get(urls[urlKey], {...auth.getCredentials(), ...extraConfig})
}
