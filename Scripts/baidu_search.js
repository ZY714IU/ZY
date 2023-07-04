/*================
https://github.com/RuCu6/QuanX/blob/main/Scripts/webpage/baidu.js
ScriptName 百度搜索结果广告
^https?://(www|m)\.baidu\.com/.*word=.* url script-response-body https://raw.githubusercontent.com/ZY714IU/ZY/main/Scripts/baidu_search.js
================*/

let rHead = "<head>";
let newStyle = "<head><style> .wpoScript, .ec_ad_results, .ec_wise_ad, .page-copyright, .c-line-clamp1{display:none!important} </style>";
let body = $response.body.replace(rHead, newStyle);
$done({ body });
