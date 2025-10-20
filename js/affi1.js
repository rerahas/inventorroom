var ads = [
  ' <a href="https://hb.afl.rakuten.co.jp/hsc/1cbd19b7.4e6d7d2d.19b2443f.f41f09bc/?link_type=pict&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJwaWN0IiwiY29sIjoxLCJjYXQiOiI1OCIsImJhbiI6IjE1NTM2NDMiLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><img src="https://hbb.afl.rakuten.co.jp/hsb/1cbd19b7.4e6d7d2d.19b2443f.f41f09bc/?me_id=1&me_adv_id=1553643&t=pict" border="0" style="margin:2px" alt="" title=""></a>',
  '<a href="https://hb.afl.rakuten.co.jp/hsc/21f520f0.b569e865.19b2443f.f41f09bc/?link_type=pict&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJwaWN0IiwiY29sIjoxLCJjYXQiOiI1NyIsImJhbiI6IjE2MTUyNzkiLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><img src="https://hbb.afl.rakuten.co.jp/hsb/21f520f0.b569e865.19b2443f.f41f09bc/?me_id=1&me_adv_id=1615279&t=pict" border="0" style="margin:2px" alt="" title=""></a>',
  '<a href="https://hb.afl.rakuten.co.jp/hsc/21f5c226.f21ac43a.19b2443f.f41f09bc/?link_type=pict&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJwaWN0IiwiY29sIjoxLCJjYXQiOiIxMTMiLCJiYW4iOiIxMjMxMTc1IiwiYW1wIjpmYWxzZX0%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><img src="https://hbb.afl.rakuten.co.jp/hsb/21f5c226.f21ac43a.19b2443f.f41f09bc/?me_id=1&me_adv_id=1231175&t=pict" border="0" style="margin:2px" alt="" title=""></a>',
  '<a href="https://hb.afl.rakuten.co.jp/hsc/220933cd.7509d709.19b2443f.f41f09bc/?link_type=pict&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJwaWN0IiwiY29sIjoxLCJjYXQiOiIxMDMiLCJiYW4iOiIxNTY0NjA5IiwiYW1wIjpmYWxzZX0%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><img src="https://hbb.afl.rakuten.co.jp/hsb/220933cd.7509d709.19b2443f.f41f09bc/?me_id=1&me_adv_id=1564609&t=pict" border="0" style="margin:2px" alt="" title=""></a>'
];
var adnum = Math.floor( Math.random() * ads.length);
var adarea = document.getElementById("affi1");
adarea.innerHTML = ads[adnum];

