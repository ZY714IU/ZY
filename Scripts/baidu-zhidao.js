/*================
https://github.com/RuCu6/QuanX/blob/main/Scripts/webpage/baidu-zhidao.js
ScriptName 百度_知道搜索广告
^https?://zhidao\.baidu\.com/(question|index|\?(fr|word)) url script-response-body
================*/

let rHead = "<head>";
let newStyle =
  "<head><style> .ec_ad_results, .ad-icon, .wpbyuwfarr-ecom-ads, div[class*=fc-][tplid], .w-question-list[data-sign], .ec-ad{display:none!important} </style>";
let body = $response.body.replace(rHead, newStyle);
$done({ body });
