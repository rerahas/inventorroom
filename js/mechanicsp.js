//材料力学計算_座屈

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
function set_value(obj){
	var v = obj.value.split("|");
	document.getElementById("ym").value = v[1];
	console.log(v);
}
 

//空欄があったら警告する

//座屈の値
function check40() { 
	txt = document.nForm.ym.value;
	if (txt == "") alert("ヤング率が入力されていません！");
	txt = document.nForm.l.value;
	if (txt == "") alert("長さが入力されていません！");
}

//四角の値
function check50() {
	txt = document.nForm.sikakuw.value;
	if (txt == "") alert("bが入力されていません！");
	txt = document.nForm.sikakuh.value;
	if (txt == "") alert("hが入力されていません！");
}
//角パイプの値
function check51() {
	txt = document.nForm.kakupaw.value;
	if (txt == "") alert("bが入力されていません！");
	txt = document.nForm.kakupah.value;
	if (txt == "") alert("hが入力されていません！");
	txt = document.nForm.kakupat.value;
	if (txt == "") alert("tさが入力されていません！");
}
//円形の値
function check52() {
	txt = document.nForm.enkeid.value;
	if (txt == "") alert("dが入力されていません！");
}

//丸パイプの値
function check53() {
	txt = document.nForm.marupad.value;
	if (txt == "") alert("dが入力されていません！");
	txt = document.nForm.marupat.value;
	if (txt == "") alert("tが入力されていません！");
}
//H形鋼の値
function check54() {
	txt = document.nForm.hsth.value;
	if (txt == "") alert("hが入力されていません！");
	txt = document.nForm.hstb.value;
	if (txt == "") alert("bが入力されていません！");
	txt = document.nForm.hstt1.value;
	if (txt == "") alert("t1が入力されていません！");
	txt = document.nForm.hstt2.value;
	if (txt == "") alert("t2が入力されていません！");
}
//溝形鋼の値
function check55() {
	txt = document.nForm.msth.value;
	if (txt == "") alert("hが入力されていません！");
	txt = document.nForm.mstb.value;
	if (txt == "") alert("bが入力されていません！");
	txt = document.nForm.mstt1.value;
	if (txt == "") alert("t1が入力されていません！");
	txt = document.nForm.mstt2.value;
	if (txt == "") alert("t2が入力されていません！");
}
//山形鋼の値
function check56() {
	txt = document.nForm.ysta.value;
	if (txt == "") alert("aが入力されていません！");
	txt = document.nForm.ystb.value;
	if (txt == "") alert("bが入力されていません！");
	txt = document.nForm.ystt.value;
	if (txt == "") alert("tが入力されていません！");
}


// 各値取得
function bdata() {
	ym = eval(document.nForm.ym.value);　//ヤング率
	l = eval(document.nForm.l.value);　//長さ
}

function ttl40() {
//断面積 - 四角
	sikakuw = eval(document.nForm.sikakuw.value);
	sikakuh = eval(document.nForm.sikakuh.value);
	csa = sikakuw * sikakuh;
//断面二次モーメント計算 - 四角
	sm = sikakuw * Math.pow(sikakuh, 3) / 12;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
function ttl41() {
//断面積 - 角パイプ
	kakupaw = eval(document.nForm.kakupaw.value);
	kakupah = eval(document.nForm.kakupah.value);
	kakupat = eval(document.nForm.kakupat.value);
	csa = ((kakupaw * kakupah) - ((kakupaw - kakupat * 2) * (kakupah - kakupat * 2)));
//断面二次モーメント計算 - 角パイプ
	sm = ((kakupaw * Math.pow(kakupah, 3)) - ((kakupaw - kakupat * 2) * Math.pow((kakupah - kakupat * 2), 3))) / 12;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
function ttl42() {
//断面積 - 円形
	enkeid = eval(document.nForm.enkeid.value);
	csa = Math.PI * Math.pow(enkeid, 2) / 4;
//断面二次モーメント計算 - 円形
	sm = Math.PI * Math.pow(enkeid, 4) / 64;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
function ttl43() {
//断面積 - 丸パイプ
	marupad = eval(document.nForm.marupad.value);
	marupat = eval(document.nForm.marupat.value);
	csa = Math.PI * (Math.pow(marupad, 2) - Math.pow((marupad - marupat * 2), 2)) / 4;
//断面二次モーメント計算 - 丸パイプ
	sm = Math.PI * (Math.pow(marupad, 4) - Math.pow((marupad - marupat * 2), 4)) / 64;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
function ttl44() {
//断面積 - H形鋼
	hsth = eval(document.nForm.hsth.value);
	hstb = eval(document.nForm.hstb.value);
	hstt1 = eval(document.nForm.hstt1.value);
	hstt2 = eval(document.nForm.hstt2.value);
	csa = ((hstt1 * (hsth - 2 * hstt2)) + (2 * hstb * hstt2));
//断面二次モーメント計算 - H形鋼
	sm = ((hstb * Math.pow(hsth, 3)) - ((hstb - hstt1) * Math.pow((hsth - 2 * hstt2), 3))) / 12;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
function ttl45() {
//断面積 - 溝形鋼
	msth = eval(document.nForm.msth.value);
	mstb = eval(document.nForm.mstb.value);
	mstt1 = eval(document.nForm.mstt1.value);
	mstt2 = eval(document.nForm.mstt2.value);
	csa = ((msth * mstt1) + (2 * mstt2 * (mstb - mstt1)));
//断面二次モーメント計算 - 溝形鋼
	sm = ((mstb * Math.pow(msth, 3)) - ((mstb - mstt1) * Math.pow((msth - 2 * mstt2), 3))) / 12;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
function ttl46() {
//断面積 - 山形鋼
	ysta = eval(document.nForm.ysta.value);
	ystb = eval(document.nForm.ystb.value);
	ystt= eval(document.nForm.ystt.value);
	csa = ystt * (ysta + ystb - ystt);
//断面二次モーメント計算 - 山形鋼
    e1 = (ystt * Math.pow(ysta, 2) + (ystb - ystt) * Math.pow(ystt, 2)) / (2 * ((ystt * ysta) + (ystb - ystt) * ystt))
	sm = (ystb * Math.pow(e1, 3) - ((ystb - ystt) * Math.pow((e1 - ystt), 3)) + (ystt * Math.pow((ysta - e1), 3))) / 3;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	

//両端固定	
function ttl50() {
//相当細長比
	sratio = l / Math.sqrt(sm / csa) * 0.5;
	sratio = sratio.toFixed(3);　	// 桁を調整
	sratio = parseFloat(sratio); //文字列を数値にする
	document.nForm.resulta3.value = sratio;
//座屈荷重
    pk = 4 * Math.pow(Math.PI, 2) * ym * sm / Math.pow(l, 2)
	pk = pk.toFixed(3);　	// 桁を調整
	pk = parseFloat(pk); //文字列を数値にする
	document.nForm.resulta2.value = pk;
//座屈応力(オイラーの式)
    lc = Math.pow(Math.PI, 2) * ym / Math.pow(sratio, 2)
	lc = lc.toFixed(3);　	// 桁を調整
	lc = parseFloat(lc); //文字列を数値にする
	document.nForm.resulta1.value = lc;
}

//両端回転
function ttl51() {
//相当細長比
	sratio = l / Math.sqrt(sm / csa);
	sratio = sratio.toFixed(3);　	// 桁を調整
	sratio = parseFloat(sratio); //文字列を数値にする
	document.nForm.resulta3.value = sratio;
//座屈荷重
    pk = Math.pow(Math.PI, 2) * ym * sm / Math.pow(l, 2)
	pk = pk.toFixed(3);　	// 桁を調整
	pk = parseFloat(pk); //文字列を数値にする
	document.nForm.resulta2.value = pk;
//座屈応力
    lc = Math.pow(Math.PI, 2) * ym / Math.pow(sratio, 2)
	lc = lc.toFixed(3);　	// 桁を調整
	lc = parseFloat(lc); //文字列を数値にする
	document.nForm.resulta1.value = lc;
}


//回転 - 固定
function ttl52() {
//相当細長比
	sratio = l / Math.sqrt(sm / csa) * 0.7;
	sratio = sratio.toFixed(3);　	// 桁を調整
	sratio = parseFloat(sratio); //文字列を数値にする
	document.nForm.resulta3.value = sratio;
//座屈荷重
    pk = 2.046 * Math.pow(Math.PI, 2) * ym * sm / Math.pow(l, 2)
	pk = pk.toFixed(3);　	// 桁を調整
	pk = parseFloat(pk); //文字列を数値にする
	document.nForm.resulta2.value = pk;
//座屈応力
    lc = Math.pow(Math.PI, 2) * ym / Math.pow(sratio, 2)
	lc = lc.toFixed(3);　	// 桁を調整
	lc = parseFloat(lc); //文字列を数値にする
	document.nForm.resulta1.value = lc;
}


//自由 - 固定
function ttl53() {
//相当細長比
	sratio = l / Math.sqrt(sm / csa) * 2.0;
	sratio = sratio.toFixed(3);　	// 桁を調整
	sratio = parseFloat(sratio); //文字列を数値にする
	document.nForm.resulta3.value = sratio;
//座屈荷重
    pk = 0.25 * Math.pow(Math.PI, 2) * ym * sm / Math.pow(l, 2)
	pk = pk.toFixed(3);　	// 桁を調整
	pk = parseFloat(pk); //文字列を数値にする
	document.nForm.resulta2.value = pk;
//座屈応力
    lc = Math.pow(Math.PI, 2) * ym / Math.pow(sratio, 2)
	lc = lc.toFixed(3);　	// 桁を調整
	lc = parseFloat(lc); //文字列を数値にする
	document.nForm.resulta1.value = lc;
}