/*================
https://github.com/ddgksf2013/Scripts/blob/master/stay.js
^https://api\.shenyin\.name/stay-fork/browse/featured$ url script-response-body https://github.com/ZY714IU/ZY/raw/main/Scripts/stay.js
2022-10-17
================*/

let ZY = JSON.parse($response.body);
if (ZY.biz) {
    ZY.biz = Object.values(ZY.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(ZY) });
