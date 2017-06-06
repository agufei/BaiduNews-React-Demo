import axios from "axios";

export default function get(queryPar,fn) {
    axios
        .get("/news", { params: queryPar })
        .then(function(response) {
            // console.log(response);
            fn(response.data);
        })
        .catch(function(response) {
            return response;
        });
}
export function post(url, params) {}
export function getJsonp(url, params) {}
