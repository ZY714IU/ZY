/*========
https://github.com/ddgksf2013/Scripts/blob/master/pornhub.js
^https?://(cn|www).pornhub.com/_xa/ads url reject-dict
^https?://(cn|www).pornhub.com/($|(view|video).*$) url script-response-body https://raw.githubusercontent.com/ZY714IU/ZY/main/Scripts/pornhub.js

========*/

var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/ZY714IU/ZY/main/Scripts/pornhub.css" type="text/css">');
$done({ body });