import reqCotent from "./request.js";

export default function fetchHotWord(fn) {
    let params = {
        tn: "bdapipchot",
        m: "rddata",
        v: "hot_word",
        type: 0
    };
    reqCotent(params, function(result) {
        if (result.data) {
            fn(result.data);
        } else {
            console.log(result);
        }
    });
    // console.log(reqCotent);
}
