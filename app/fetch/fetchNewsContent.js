import reqCotent from "./request.js";

export default function fetchNewsContent(id, fn) {
    let params = {
        tn: "bdapibaiyue",
        t: "recommendinfo",
        cuid: "",
        bduss: "",
        wf: "1",
        baiduid: "7C35091F8552AFD19AA4A03D0828F99B%3AFG%3D1",
        os: "iphone",
        nids: id,
        remote_device_type: "1",
        os_type: "2",
        screen_size_width: window.innerWidth,
        screen_size_height: window.innerHeight
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
