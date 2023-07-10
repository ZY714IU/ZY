[rewrite_local]

^https:\/\/(cn|www)\.pornhub\.com\/_xa\/ads url reject-dict
^https?:/\/(cn|www)\.pornhub\.com\/($|(view|video).*$) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/pornhub.js

[mitm] 

hostname = *.pornhub.com

***********************************/











var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ddgksf2013/Html/pornhub.css" type="text/css">');
$done({ body });
