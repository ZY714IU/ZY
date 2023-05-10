/*================
https://github.com/RuCu6/QuanX/blob/main/Scripts/webpage/baidu.js
ScriptName 百度搜索结果广告
^https?:\/\/(www|m)\.baidu\.com\/.*word=.* url script-response-body https://raw.githubusercontent.com/ZY714IU/ZY/main/QuantumultX/Scripts/baidu-search.js
================*/

let rHead = "";
let newStyle =
  "";
let body = $response.body.replace(rHead, newStyle);
$done({ body });
