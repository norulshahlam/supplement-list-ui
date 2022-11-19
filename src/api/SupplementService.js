import axios from "axios";

const SUPPLEMENT_API_HOSTNAME = "http://localhost:8081";
const FETCH_ALL_SUPPLEMENTS_URI = "/get-all";
const DELETE_SUPPLEMENT = "/delete";
const UPDATE_SUPPLEMENT = "/update";

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
}
export default new SupplementService();
