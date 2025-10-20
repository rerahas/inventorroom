//材料力学計算_はりのたわみ

//計算ボタンフォーカス
function focusA($this) {
	$this.style.borderStyle = "solid";
	$this.style.borderColor = "black";
	$this.style.borderwidth = "10px";
}
function blurA($this) {
  $this.style.borderStyle = "none";
  $this.style.borderColor = "none";
  $this.style.borderwidth = "none";
}

//ラジオボタンの値を取得する
function set_value(obj) {
  var v = obj.value.split("|");
  document.getElementById("sg").value = v[0];
  document.getElementById("ym").value = v[1];
}

//セレクトメニューで選択された項目の値を取得する
function setText(o) {
  var idx = o.selectedIndex;
  var val = o.options[idx].value;
  o.form.sg.value = "";
  o.form.ym.value = "";
  if (val.length > 0) {
    var s = val.split("|");
    o.form.sg.value = s[0];
    o.form.ym.value = s[1];
  }
}

//空欄があったら警告する

//はりの値
function check20() {
  txt = document.nForm.sg.value;
  if (txt == "")
    alert("材質が選択されていません！又は\r\n比重が入力されていません！");
  txt = document.nForm.ym.value;
  if (txt == "") alert("ヤング率が入力されていません！");
  txt = document.nForm.p.value;
  if (txt == "") alert("荷重が入力されていません！");
  txt = document.nForm.l.value;
  if (txt == "") alert("長さが入力されていません！");
}
//四角の値
function check30() {
  txt = document.nForm.sikakuw.value;
  if (txt == "") alert("bが入力されていません！");
  txt = document.nForm.sikakuh.value;
  if (txt == "") alert("hが入力されていません！");
}
//角パイプの値
function check31() {
  txt = document.nForm.kakupaw.value;
  if (txt == "") alert("bが入力されていません！");
  txt = document.nForm.kakupah.value;
  if (txt == "") alert("hが入力されていません！");
  txt = document.nForm.kakupat.value;
  if (txt == "") alert("tさが入力されていません！");
}
//円形の値
function check32() {
  txt = document.nForm.enkeid.value;
  if (txt == "") alert("dが入力されていません！");
}
//丸パイプの値
function check33() {
  txt = document.nForm.marupad.value;
  if (txt == "") alert("dが入力されていません！");
  txt = document.nForm.marupat.value;
  if (txt == "") alert("tが入力されていません！");
}
//H形鋼Aの値
function check34() {
  txt = document.nForm.hsth.value;
  if (txt == "") alert("hが入力されていません！");
  txt = document.nForm.hstb.value;
  if (txt == "") alert("bが入力されていません！");
  txt = document.nForm.hstt1.value;
  if (txt == "") alert("t1が入力されていません！");
  txt = document.nForm.hstt2.value;
  if (txt == "") alert("t2が入力されていません！");
}
//H形鋼Bの値
function check35() {
  txt = document.nForm.hsth_2.value;
  if (txt == "") alert("hが入力されていません！");
  txt = document.nForm.hstb_2.value;
  if (txt == "") alert("bが入力されていません！");
  txt = document.nForm.hstt1_2.value;
  if (txt == "") alert("t1が入力されていません！");
  txt = document.nForm.hstt2_2.value;
  if (txt == "") alert("t2が入力されていません！");
}
//溝形鋼Aの値
function check36() {
  txt = document.nForm.msth.value;
  if (txt == "") alert("hが入力されていません！");
  txt = document.nForm.mstb.value;
  if (txt == "") alert("bが入力されていません！");
  txt = document.nForm.mstt1.value;
  if (txt == "") alert("t1が入力されていません！");
  txt = document.nForm.mstt2.value;
  if (txt == "") alert("t2が入力されていません！");
}
//溝形鋼Bの値
function check37() {
  txt = document.nForm.msth_2.value;
  if (txt == "") alert("hが入力されていません！");
  txt = document.nForm.mstb_2.value;
  if (txt == "") alert("bが入力されていません！");
  txt = document.nForm.mstt1_2.value;
  if (txt == "") alert("t1が入力されていません！");
  txt = document.nForm.mstt2_2.value;
  if (txt == "") alert("t2が入力されていません！");
}
//山形鋼の値
function check38() {
  txt = document.nForm.ysta.value;
  if (txt == "") alert("aが入力されていません！");
  txt = document.nForm.ystb.value;
  if (txt == "") alert("bが入力されていません！");
  txt = document.nForm.ystt.value;
  if (txt == "") alert("tが入力されていません！");
}

//KgfをNに換算
function nk() {
  {
    k = eval(document.nForm.k.value);
    v = k * 9.8067;
  }
  v = v.toFixed(3); // 桁を調整
  document.nForm.p.value = v;
}

// 各値取得
function sdata() {
  sg = eval(document.nForm.sg.value); //比重
  ym = eval(document.nForm.ym.value); //ヤング率
  p = eval(document.nForm.p.value); //荷重
  l = eval(document.nForm.l.value); //長さ
}

function ttl20() {
  //自重計算 - 四角
  sikakuw = eval(document.nForm.sikakuw.value);
  sikakuh = eval(document.nForm.sikakuh.value);
  jij = sikakuw * sikakuh * l * sg * 0.001 * 0.0098067;
  //断面二次モーメント計算 - 四角
  sm = (sikakuw * Math.pow(sikakuh, 3)) / 12;
  sm = sm.toFixed(6); // 桁を調整
  sm = parseFloat(sm); //文字列を数値にする
  document.nForm.smoment.value = sm;
}
function ttl21() {
  //自重計算 - 角パイプ
  kakupaw = eval(document.nForm.kakupaw.value);
  kakupah = eval(document.nForm.kakupah.value);
  kakupat = eval(document.nForm.kakupat.value);
  jij =
    (kakupaw * kakupah - (kakupaw - kakupat * 2) * (kakupah - kakupat * 2)) *
    l *
    sg *
    0.001 *
    0.0098067;
  //断面二次モーメント計算 - 角パイプ
  sm =
    (kakupaw * Math.pow(kakupah, 3) -
      (kakupaw - kakupat * 2) * Math.pow(kakupah - kakupat * 2, 3)) /
    12;
  sm = sm.toFixed(6); // 桁を調整
  sm = parseFloat(sm); //文字列を数値にする
  document.nForm.smoment.value = sm;
}
function ttl22() {
  //自重計算 - 円形
  enkeid = eval(document.nForm.enkeid.value);
  jij = ((Math.PI * Math.pow(enkeid, 2)) / 4) * l * sg * 0.001 * 0.0098067;
  //断面二次モーメント計算 - 円形
  sm = (Math.PI * Math.pow(enkeid, 4)) / 64;
  sm = sm.toFixed(6); // 桁を調整
  sm = parseFloat(sm); //文字列を数値にする
  document.nForm.smoment.value = sm;
}
function ttl23() {
  //自重計算 - 丸パイプ
  marupad = eval(document.nForm.marupad.value);
  marupat = eval(document.nForm.marupat.value);
  jij =
    ((Math.PI * (Math.pow(marupad, 2) - Math.pow(marupad - marupat * 2, 2))) /
      4) *
    l *
    sg *
    0.001 *
    0.0098067;
  //断面二次モーメント計算 - 丸パイプ
  sm =
    (Math.PI * (Math.pow(marupad, 4) - Math.pow(marupad - marupat * 2, 4))) /
    64;
  sm = sm.toFixed(6); // 桁を調整
  sm = parseFloat(sm); //文字列を数値にする
  document.nForm.smoment.value = sm;
}
function ttl24() {
  //自重計算 - H形鋼A
  hsth = eval(document.nForm.hsth.value);
  hstb = eval(document.nForm.hstb.value);
  hstt1 = eval(document.nForm.hstt1.value);
  hstt2 = eval(document.nForm.hstt2.value);
  jij =
    (hstt1 * (hsth - 2 * hstt2) + 2 * hstb * hstt2) *
    l *
    sg *
    0.001 *
    0.0098067;
  //断面二次モーメント計算 - H形鋼
  sm =
    (hstb * Math.pow(hsth, 3) -
      (hstb - hstt1) * Math.pow(hsth - 2 * hstt2, 3)) /
    12;
  sm = sm.toFixed(6); // 桁を調整
  sm = parseFloat(sm); //文字列を数値にする
  document.nForm.smoment.value = sm;
}
function ttl25() {
  //自重計算 - H形鋼B
  hsth_2 = eval(document.nForm.hsth_2.value);
  hstb_2 = eval(document.nForm.hstb_2.value);
  hstt1_2 = eval(document.nForm.hstt1_2.value);
  hstt2_2 = eval(document.nForm.hstt2_2.value);
  jij =
    (hstt1_2 * (hsth_2 - 2 * hstt2_2) + 2 * hstb_2 * hstt2_2) *
    l *
    sg *
    0.001 *
    0.0098067;
  //断面二次モーメント計算 - H形鋼2
  sm =
    (hstt2_2 * 2 * Math.pow(hstb_2, 3) +
      (hsth_2 - hstt2_2 * 2) * Math.pow(hstt1_2, 3)) /
    12;
  sm = sm.toFixed(6); // 桁を調整
  sm = parseFloat(sm); //文字列を数値にする
  document.nForm.smoment.value = sm;
}
function ttl26() {
  //自重計算 - 溝形鋼A
  msth = eval(document.nForm.msth.value);
  mstb = eval(document.nForm.mstb.value);
  mstt1 = eval(document.nForm.mstt1.value);
  mstt2 = eval(document.nForm.mstt2.value);
  jij =
    (msth * mstt1 + 2 * mstt2 * (mstb - mstt1)) * l * sg * 0.001 * 0.0098067;
  //断面二次モーメント計算 - 溝形鋼
  sm =
    (mstb * Math.pow(msth, 3) -
      (mstb - mstt1) * Math.pow(msth - 2 * mstt2, 3)) /
    12;
  sm = sm.toFixed(6); // 桁を調整
  sm = parseFloat(sm); //文字列を数値にする
  document.nForm.smoment.value = sm;
}
function ttl27() {
  //自重計算 - 溝形鋼B
  msth_2 = eval(document.nForm.msth_2.value);
  mstb_2 = eval(document.nForm.mstb_2.value);
  mstt1_2 = eval(document.nForm.mstt1_2.value);
  mstt2_2 = eval(document.nForm.mstt2_2.value);
  jij =
    (msth_2 * mstt1_2 + 2 * mstt2_2 * (mstb_2 - mstt1_2)) *
    l *
    sg *
    0.001 *
    0.0098067;
  //断面二次モーメント計算 - 溝形鋼2
  e1 =
    (mstt2_2 * 2 * Math.pow(mstb_2, 2) +
      (msth_2 - mstt2_2 * 2) * Math.pow(mstt1_2, 2)) /
    (2 * (mstt2_2 * 2 * mstb_2 + (msth_2 - mstt2_2 * 2) * mstt1_2));
  sm =
    (msth_2 * Math.pow(e1, 3) -
      (msth_2 - mstt2_2 * 2) * Math.pow(e1 - mstt1_2, 3) +
      mstt2_2 * 2 * Math.pow(mstb_2 - e1, 3)) /
    3;
  sm = sm.toFixed(6); // 桁を調整
  sm = parseFloat(sm); //文字列を数値にする
  document.nForm.smoment.value = sm;
}
function ttl28() {
  //自重計算 - 山形鋼
  ysta = eval(document.nForm.ysta.value);
  ystb = eval(document.nForm.ystb.value);
  ystt = eval(document.nForm.ystt.value);
  jij = ystt * (ysta + ystb - ystt) * l * sg * 0.001 * 0.0098067;
  //断面二次モーメント計算 - 山形鋼
  e1 =
    (ystt * Math.pow(ysta, 2) + (ystb - ystt) * Math.pow(ystt, 2)) /
    (2 * (ystt * ysta + (ystb - ystt) * ystt));
  sm =
    (ystb * Math.pow(e1, 3) -
      (ystb - ystt) * Math.pow(e1 - ystt, 3) +
      ystt * Math.pow(ysta - e1, 3)) /
    3;
  sm = sm.toFixed(6); // 桁を調整
  sm = parseFloat(sm); //文字列を数値にする
  document.nForm.smoment.value = sm;
}

//片持ちはり集中荷重
function ttl30() {
  //(荷重のみ）
  ksk = (p * Math.pow(l, 3)) / (3 * ym * sm);
  ksk = ksk.toFixed(6); // 桁を調整
  ksk = parseFloat(ksk); //文字列を数値にする
  document.nForm.resulta1.value = ksk;
  //(自重のみ(等分布荷重))
  ktk = ((jij / l) * Math.pow(l, 4)) / (8 * ym * sm);
  //荷重+自重
  kht = ksk + ktk;
  kht = kht.toFixed(6);
  kht = parseFloat(kht); //文字列を数値にする
  document.nForm.resulta2.value = kht;
}
function ttl31() {
  //片持ちはり等分布荷重
  //(荷重のみ）
  ksk = ((p / l) * Math.pow(l, 4)) / (8 * ym * sm);
  ksk = ksk.toFixed(6); // 桁を調整
  ksk = parseFloat(ksk); //文字列を数値にする
  document.nForm.resulta1.value = ksk;
  //(自重のみ(等分布荷重))
  ktk = ((jij / l) * Math.pow(l, 4)) / (8 * ym * sm);
  //荷重+自重
  kht = ksk + ktk;
  kht = kht.toFixed(6);
  kht = parseFloat(kht); //文字列を数値にする
  document.nForm.resulta2.value = kht;
}
function ttl32() {
  //単純支持はり集中荷重
  //(荷重のみ）
  tsk = (p * Math.pow(l, 3)) / (48 * ym * sm);
  tsk = tsk.toFixed(6); // 桁を調整
  tsk = parseFloat(tsk); //文字列を数値にする
  document.nForm.resulta1.value = tsk;
  //(自重のみ(等分布荷重))
  ttk = (((5 * jij) / l) * Math.pow(l, 4)) / (384 * ym * sm);
  //荷重+自重
  tht = tsk + ttk;
  tht = tht.toFixed(6); // 桁を調整
  tht = parseFloat(tht); //文字列を数値にする
  document.nForm.resulta2.value = tht;
}
function ttl33() {
  //単純支持はり等分布荷重
  //(荷重のみ）
  tsk = (((5 * p) / l) * Math.pow(l, 4)) / (384 * ym * sm);
  ttt = 5 * p * Math.pow(l, 4);
  uuu = 384 * ym * sm;
  tsk = tsk.toFixed(6); // 桁を調整
  tsk = parseFloat(tsk); //文字列を数値にする
  document.nForm.resulta1.value = tsk;
  //(自重のみ(等分布荷重))
  ttk = (((5 * jij) / l) * Math.pow(l, 4)) / (384 * ym * sm);
  //荷重+自重
  tht = tsk + ttk;
  tht = tht.toFixed(6); // 桁を調整
  tht = parseFloat(tht); //文字列を数値にする
  document.nForm.resulta2.value = tht;
}
function ttl34() {
  //両端固定はり集中荷重
  //(荷重のみ）
  rsk = (p * Math.pow(l, 3)) / (192 * ym * sm);
  rsk = rsk.toFixed(6); // 桁を調整
  rsk = parseFloat(rsk); //文字列を数値にする
  document.nForm.resulta1.value = rsk;
  //(自重のみ(等分布荷重))
  rtk = ((jij / l) * Math.pow(l, 4)) / (384 * ym * sm);
  //荷重+自重
  rht = rsk + rtk;
  rht = rht.toFixed(6); // 桁を調整
  rht = parseFloat(rht); //文字列を数値にする
  document.nForm.resulta2.value = rht;
}
function ttl35() {
  //両端固定はり等分布荷重
  //(荷重のみ）
  rsk = ((p / l) * Math.pow(l, 4)) / (384 * ym * sm);
  rsk = rsk.toFixed(6); // 桁を調整
  rsk = parseFloat(rsk); //文字列を数値にする
  document.nForm.resulta1.value = rsk;
  //(自重のみ(等分布荷重))
  rtk = ((jij / l) * Math.pow(l, 4)) / (384 * ym * sm);
  //荷重+自重
  rht = rsk + rtk;
  rht = rht.toFixed(6); // 桁を調整
  rht = parseFloat(rht); //文字列を数値にする
  document.nForm.resulta2.value = rht;
}
