import axios from "axios";

export const services = {
    getImages: (product) => {
        const params = {
            key: "AIzaSyB7hIqJsizkHONLUZKqgPcykUVFW3aTq5A",
            cx: "011035205865915778799:rk2dz4shj8o",
            searchType: "image",
            lr: "lang_pt",
            num: 1,
            q: product,
        }
        return axios.get("https://www.googleapis.com/customsearch/v1", { params })
        .then(response => response.data.items[0].link)
        .catch(error => console.log("Erro :", error))
    }
}