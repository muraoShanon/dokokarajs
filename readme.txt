# 使い方
```
var doko = dokokara.dokokara();
(function main() {
   if (doko === null) return;
     console.log(doko);
})();
```

* 流入元が存在しない場合はnullが返ってきます。
* 流入元が存在する場合は以下オブジェクトが返ってきます。

channel: "Direct"
medium: "direct"
source: ""
campaignName: ""


rawquery
content
term

* channel

* medium
* source
* campaignName
* content
* term
* rawreferrer
* rawquery

パラメーターが付与されていない場合のチャネル定義は下記に準じます。
https://support.google.com/analytics/answer/3297892?hl=ja

