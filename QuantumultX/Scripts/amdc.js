/*================
https://github.com/RuCu6/QuanX/blob/main/Scripts/amdc.js
2023-03-31 17:20
^http?:\/\/amdc\.m\.taobao\.com\/amdc\/mobileDispatch$ url script-response-header https://raw.githubusercontent.com/ZY714IU/ZY/main/QuantumultX/Scripts/amdc.js
================*/

const url = $request.url;
const header = $request.headers;
let ua = header["User-Agent"] || header["user-agent"];
if (url.includes("/amdc/mobileDispatch")) {
  if (ua.includes("AMapiPhone") || ua.includes("Cainiao")) {
    $done({ status: "HTTP/1.1 404 Not Found" });
    return;
  }
}
$done({});



/*================
https://github.com/ddgksf2013/Scripts/blob/master/amdc.js
2022-04-25
^http:\/\/amdc\.m\.taobao\.com\/amdc\/mobileDispatch$ url script-response-header https://raw.githubusercontent.com/ZY714IU/ZY/main/QuantumultX/Scripts/amdc.js


const version = 'V1.0.4';
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"];-1!=ua.indexOf("AMap")||-1!=ua.indexOf("Cainiao")||-1!=ua.indexOf("%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C")?$done({body:"ddgksf2013"}):$done({});

================*/