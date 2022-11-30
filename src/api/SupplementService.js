import axios from "axios";

const SUPPLEMENT_API_HOSTNAME_DEV = "http://localhost:8081";
const SUPPLEMENT_API_HOSTNAME_PROD = "https://supplement-list-api.herokuapp.com";
const FETCH_ALL_SUPPLEMENTS_URI = "/get-all";
const DELETE_SUPPLEMENT = "/delete";
const UPDATE_SUPPLEMENT = "/update";
const EXPORT_SUPPLEMENT = "/download";

const SUPPLEMENT_API_HOSTNAME =
  process.env.NODE_ENV === 'production'
    ? SUPPLEMENT_API_HOSTNAME_PROD
    : SUPPLEMENT_API_HOSTNAME_DEV

class SupplementService {
  fetchAll() {
    console.log("in fetchAll supplement service");
    return axios.get(SUPPLEMENT_API_HOSTNAME + FETCH_ALL_SUPPLEMENTS_URI);
  }
  deleteSupplement(id) {
    console.log("in delete supplement service with id: " + id);
    return axios.delete(SUPPLEMENT_API_HOSTNAME + DELETE_SUPPLEMENT + "/" + id);
  }
  updateSupplement(supplement) {
    console.log("in update supplement service with id: " + supplement.productId);
    return axios.put(SUPPLEMENT_API_HOSTNAME + UPDATE_SUPPLEMENT, supplement);
  }
  exportSupplement(){
    console.log("in export supplement service: ");
    return axios.get(SUPPLEMENT_API_HOSTNAME + EXPORT_SUPPLEMENT);
  }
}
export default new SupplementService();
