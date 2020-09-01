import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 5YzRHG59b2FgIEr-cSf4howxBQoiClx-0bkfJFDFB6SZV-fj-UIz-pHORUkOT339yG4Bw_k29E7-337eZ9BDCUmd7i-CBpzgEJqeKv-kw7LnK7AiIQb6HKOW_apMX3Yx",
  },
});
