import reqCotent from "./request.js";
import navList from "../constants/nav-list.js";
export default function fetchNewsList(fn, displayTime = 0, type = "0") {
    let action = displayTime ? "0" : "1";
    let params = {};
    switch (type) {
        case "0":
            params = {
                tn: "bdapibaiyue",
                t: "newchosenlist",
                mid: "7C35091F8552AFD19AA4A03D0828F99B%3AFG%3D1",
                cuid: "",
                bduss: "",
                ln: "20",
                wf: "0",
                action: action,
                down: "0",
                display_time: displayTime.toString(),
                withtoppic: "1",
                baiduid: "7C35091F8552AFD19AA4A03D0828F99B%3AFG%3D1",
                orientation: "1",
                from: "news_webapp",
                pd: "webapp",
                os: "iphone",
                nids: "",
                remote_device_type: "1",
                os_type: "2",
                screen_size_width: window.innerWidth,
                screen_size_height: window.innerHeight
            };
            break;
        case "1":
            params = {
                tn: "bdapibaiyue",
                t: "getbaijialist",
                ln: 20,
                wf: 0,
                ver: 2,
                ts: 0,
                nids: "",
                time: 0
            };
            break;
        case "2":
            params = {
                tn: "bdapibaiyue",
                t: "localnewslist",
                mid: "03c7a16f2e8028127e42c5f7ca9e210b",
                loc: 0,
                ln: 20,
                an: 20,
                wf: 0,
                ver: 2,
                pd: "webapp",
                from: "news_webapp",
                nids: ""
            };
            break;
        default:
            params = {
                tn: "bdapibaiyue",
                t: "recommendlist",
                mid: "03c7a16f2e8028127e42c5f7ca9e210b",
                ts: displayTime.toString(),
                topic: navList.name[type],
                type: "info",
                token: "info",
                ln: 20,
                an: 20,
                withtopic: 0,
                wf: 0,
                "internet-subscribe": 0,
                ver: 4,
                pd: "webapp",
                nids: "",
                remote_device_type: 1,
                os_type: 2,
                screen_size_width: window.innerWidth,
                screen_size_height: window.innerHeight
            };
            break;
    }
    reqCotent(params, function(result) {
        if (result.data) {
            fn(result.data);
        } else {
            console.log(result);
        }
    });
    // console.log(reqCotent);
}
