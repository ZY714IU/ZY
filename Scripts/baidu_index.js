/*================
https://github.com/RuCu6/QuanX/tree/main/Scripts/baidu
ScriptName baidu-index 百度搜索首页净化
Author  @Adblock4limbo, @RuCu6
^https?://(www|m)\.baidu\.com(/|/\?ref.*)$ url script-response-body https://github.com/ZY714IU/ZY/raw/main/Scripts/baidu_index.js
右上角入口按钮(已删除) .square-enterance,
================*/

let rHead = "<head>";
let newStyle =
  "<head><style> #foot, .recordcode, .index-copyright, div[style*=overflow], article, .rn-container, .ns-square-point, .voice.call, .ts-image-uploader, .ts-image-uploader-icon, .ts-image-uploader-icon-point, .qrcode.call, .navs-bottom-bar, .tab_news_1, .s-loading-frame.bottom{display:none!important} </style>";
let body = $response.body.replace(rHead, newStyle);
$done({ body });
