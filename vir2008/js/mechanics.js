//重量計算

//空欄があったら警告する
function check1() { 
//直方体
	txt = document.nForm.w.value;
	if (txt == "") alert("幅が入力されていません！");
	txt = document.nForm.l.value;
	if (txt == "") alert("長さが入力されていません！");
	txt = document.nForm.t.value;
	if (txt == "") alert("厚さが入力されていません！");
}
function check2() {
//円柱
	txt = document.nForm.d.value;
	if (txt == "") alert("直径が入力されていません！");
	txt = document.nForm.l.value;
	if (txt == "") alert("長さが入力されていません！");
}
function check3() {
//H形鋼
	txt = document.nForm.h.value;
	if (txt == "") alert("高さが入力されていません！");
	txt = document.nForm.b.value;
	if (txt == "") alert("辺が入力されていません！");
	txt = document.nForm.t1.value;
	if (txt == "") alert("厚さt1が入力されていません！");
	txt = document.nForm.t2.value;
	if (txt == "") alert("厚さt2が入力されていません！");
	txt = document.nForm.r.value;
	if (txt == "") alert("rが入力されていません！");
	txt = document.nForm.l.value;
	if (txt == "") alert("長さが入力されていません！");
}
function check4() {
//溝形鋼
	txt = document.nForm.h.value;
	if (txt == "") alert("高さが入力されていません！");
	txt = document.nForm.b.value;
	if (txt == "") alert("辺が入力されていません！");
	txt = document.nForm.t1.value;
	if (txt == "") alert("厚さt1が入力されていません！");
	txt = document.nForm.t2.value;
	if (txt == "") alert("厚さt2が入力されていません！");
	txt = document.nForm.r1.value;
	if (txt == "") alert("r1が入力されていません！");
	txt = document.nForm.r2.value;
	if (txt == "") alert("r2が入力されていません！");
	txt = document.nForm.l.value;
	if (txt == "") alert("長さが入力されていません！");
}
function check5() {
//山形鋼
	txt = document.nForm.a.value;
	if (txt == "") alert("辺Aが入力されていません！");
	txt = document.nForm.b.value;
	if (txt == "") alert("辺Bが入力されていません！");
	txt = document.nForm.t.value;
	if (txt == "") alert("厚さtが入力されていません！");
	txt = document.nForm.r1.value;
	if (txt == "") alert("r1が入力されていません！");
	txt = document.nForm.r2.value;
	if (txt == "") alert("r2が入力されていません！");
	txt = document.nForm.l.value;
	if (txt == "") alert("長さが入力されていません！");
}
function check() {
//比重
	txt = document.nForm.sg.value;
	if (txt == "") alert("材質が選択されていません！又は\r\n比重が入力されていません！");
	txt = document.nForm.n.value;
	if (txt == "") alert("個数が入力されていません！");
}

//ラジオボタンの値を取得する
function set_value(obj){
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
   if (val.length > 0) 
{ 
   var s = val.split("|"); 
   o.form.sg.value = s[0]; 
   o.form.ym.value = s[1]; 
} 
} 

//直方体
function tyoku() {
	w = eval(document.nForm.w.value);
	l = eval(document.nForm.l.value);
	t = eval(document.nForm.t.value);
	sg = eval(document.nForm.sg.value);
	n = eval(document.nForm.n.value);
//体積計算
	v = w * l * t;
    v = v.toFixed(3);　// 桁を調整
	document.nForm.volume.value = v;
//重量計算
	m = w * l * t * sg * n * 0.001;
    m = m.toFixed(3);　// 桁を調整
	document.nForm.result.value = m;
}

//円柱
function en() {
	d = eval(document.nForm.d.value);
	l = eval(document.nForm.l.value);
	r = d / 2
	sg = eval(document.nForm.sg.value);
	n = eval(document.nForm.n.value);
//体積計算
	v = Math.PI * r * r * l;
    v = v.toFixed(3);　// 桁を調整
	document.nForm.volume.value = v;
//重量計算
	m = Math.PI * r * r * l * sg * n * 0.001;
    m = m.toFixed(3);// 桁を調整
	document.nForm.result.value = m;
}

//H形鋼
function hst() {
	h = eval(document.nForm.h.value);
	b = eval(document.nForm.b.value);
	t1 = eval(document.nForm.t1.value);
	t2 = eval(document.nForm.t2.value);
	r = eval(document.nForm.r.value);
	l = eval(document.nForm.l.value);
	sg = eval(document.nForm.sg.value);
	n = eval(document.nForm.n.value);
//体積計算
	v = ((t1 * (h - 2 * t2)) + (2 * b * t2) + (0.858 * Math.pow(r, 2))) * l;
    v = v.toFixed(3);　// 桁を調整
	v = parseFloat(v); //文字列を数値にする
	document.nForm.volume.value = v;
//重量計算
	m = v * sg * n * 0.001;
    m = m.toFixed(3);// 桁を調整
	document.nForm.result.value = m;
}

//溝形鋼
function mst() {
	h = eval(document.nForm.h.value);
	b = eval(document.nForm.b.value);
	t1 = eval(document.nForm.t1.value);
	t2 = eval(document.nForm.t2.value);
	r1 = eval(document.nForm.r1.value);
	r2 = eval(document.nForm.r2.value);
	l = eval(document.nForm.l.value);
	sg = eval(document.nForm.sg.value);
	n = eval(document.nForm.n.value);
//体積計算
	v = ((h * t1) + (2 * t2 * (b - t1)) + (0.349 * (Math.pow(r1, 2) - Math.pow(r2, 2)))) * l;
    v = v.toFixed(3);　// 桁を調整
	v = parseFloat(v); //文字列を数値にする
	document.nForm.volume.value = v;
//重量計算
	m = v * sg * n * 0.001;
    m = m.toFixed(3);// 桁を調整
	document.nForm.result.value = m;
}

//山形鋼
function ast() {
	a = eval(document.nForm.a.value);
	b = eval(document.nForm.b.value);
	t = eval(document.nForm.t.value);
	r1 = eval(document.nForm.r1.value);
	r2 = eval(document.nForm.r2.value);
	l = eval(document.nForm.l.value);
	sg = eval(document.nForm.sg.value);
	n = eval(document.nForm.n.value);
//体積計算
	v = (t * (a + b - t) + 0.215 * (Math.pow(r1, 2) - 2 * Math.pow(r2, 2))) * l;
    v = v.toFixed(3);　// 桁を調整
	v = parseFloat(v); //文字列を数値にする
	document.nForm.volume.value = v;
//重量計算
	m = v * sg * n * 0.001;
    m = m.toFixed(3);　// 桁を調整
	document.nForm.result.value = m;
}



//材料力学計算_はりのたわみ

//iframeへフォーカス移動
function foc() {
     ifr2.document.nForm.sikakuw.focus();
     ifr2.document.nForm.kakupaw.focus();
     ifr2.document.nForm.enkeid.focus();
     ifr2.document.nForm.marupad.focus();
     ifr2.document.nForm.hsth.focus();
     ifr2.document.nForm.hsth_2.focus();
     ifr2.document.nForm.msth.focus();
     ifr2.document.nForm.msth_2.focus();
     ifr2.document.nForm.ysta.focus();
}

//空欄があったら警告する
function check20() { 
//はりの値
	txt = document.nForm.sg.value;
	if (txt == "") alert("材質が選択されていません！又は\r\n比重が入力されていません！");
	txt = document.nForm.ym.value;
	if (txt == "") alert("ヤング率が入力されていません！");
	txt = document.nForm.p.value;
	if (txt == "") alert("荷重が入力されていません！");
	txt = document.nForm.l.value;
	if (txt == "") alert("長さが入力されていません！");
}

function check30() {
//四角の値
	if (ifr2.document.getElementById("sikaku")) {
	txt = document.nForm.sikakuw.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.sikakuh.value;
	if (txt == "undefined") alert("hが入力されていません！");
}
	
//角パイプの値
	if (ifr2.document.getElementById("kakupa")) {
	txt = document.nForm.kakupaw.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.kakupah.value;
	if (txt == "undefined") alert("hが入力されていません！");
	txt = document.nForm.kakupat.value;
	if (txt == "undefined") alert("tさが入力されていません！");
}
	
//円形の値
	if (ifr2.document.getElementById("enkei")) {
	txt = document.nForm.enkeid.value;
	if (txt == "undefined") alert("dが入力されていません！");
}

//丸パイプの値
	if (ifr2.document.getElementById("marupa")) {
	txt = document.nForm.marupad.value;
	if (txt == "undefined") alert("dが入力されていません！");
	txt = document.nForm.marupat.value;
	if (txt == "undefined") alert("tが入力されていません！");
}

//H形鋼の値
	if (ifr2.document.getElementById("hst")) {
	txt = document.nForm.hsth.value;
	if (txt == "undefined") alert("hが入力されていません！");
	txt = document.nForm.hstb.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.hstt1.value;
	if (txt == "undefined") alert("t1が入力されていません！");
	txt = document.nForm.hstt2.value;
	if (txt == "undefined") alert("t2が入力されていません！");
}

//H形鋼2の値
	if (ifr2.document.getElementById("hst2")) {
	txt = document.nForm.hsth_2.value;
	if (txt == "undefined") alert("hが入力されていません！");
	txt = document.nForm.hstb_2.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.hstt1_2.value;
	if (txt == "undefined") alert("t1が入力されていません！");
	txt = document.nForm.hstt2_2.value;
	if (txt == "undefined") alert("t2が入力されていません！");
}

//溝形鋼の値
	if (ifr2.document.getElementById("mst")) {
	txt = document.nForm.msth.value;
	if (txt == "undefined") alert("hが入力されていません！");
	txt = document.nForm.mstb.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.mstt1.value;
	if (txt == "undefined") alert("t1が入力されていません！");
	txt = document.nForm.mstt2.value;
	if (txt == "undefined") alert("t2が入力されていません！");
}

//溝形鋼2の値
	if (ifr2.document.getElementById("mst2")) {
	txt = document.nForm.msth_2.value;
	if (txt == "undefined") alert("hが入力されていません！");
	txt = document.nForm.mstb_2.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.mstt1_2.value;
	if (txt == "undefined") alert("t1が入力されていません！");
	txt = document.nForm.mstt2_2.value;
	if (txt == "undefined") alert("t2が入力されていません！");
}

//山形鋼の値
	if (ifr2.document.getElementById("yst")) {
	txt = document.nForm.ysta.value;
	if (txt == "undefined") alert("aが入力されていません！");
	txt = document.nForm.ystb.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.ystt.value;
	if (txt == "undefined") alert("tが入力されていません！");
}
}

//KgfをNに換算
function nk() {
{
	k = eval(document.nForm.k.value);
	v = k * 9.8067;
}
    v = v.toFixed(3);　// 桁を調整
	document.nForm.p.value = v;
}

function sdata() {
//iframeより形状のデータ取得
	sikakuw=eval(ifr2.document.nForm.sikakuw.value);　//四角b
	document.nForm.sikakuw.value=sikakuw;	
	sikakuh=eval(ifr2.document.nForm.sikakuh.value);　//四角h
	document.nForm.sikakuh.value =sikakuh;

	kakupaw=eval(ifr2.document.nForm.kakupaw.value);　//角パイプb
	document.nForm.kakupaw.value=kakupaw;	
	kakupah=eval(ifr2.document.nForm.kakupah.value);　//角パイプh
	document.nForm.kakupah.value =kakupah;
	kakupat=eval(ifr2.document.nForm.kakupat.value);　//角パイプt
	document.nForm.kakupat.value =kakupat;
	
	enkeid=eval(ifr2.document.nForm.enkeid.value);　//円形d
	document.nForm.enkeid.value =enkeid;
	
	marupad=eval(ifr2.document.nForm.marupad.value);　//丸パイプd
	document.nForm.marupad.value =marupad;
	marupat=eval(ifr2.document.nForm.marupat.value);　//丸パイプt
	document.nForm.marupat.value =marupat;

	hsth=eval(ifr2.document.nForm.hsth.value);　//H形鋼h
	document.nForm.hsth.value =hsth;	
	hstb=eval(ifr2.document.nForm.hstb.value);　//H形鋼b
	document.nForm.hstb.value =hstb;	
	hstt1=eval(ifr2.document.nForm.hstt1.value);　//H形鋼t1
	document.nForm.hstt1.value =hstt1;	
	hstt2=eval(ifr2.document.nForm.hstt2.value);　//H形鋼t2
	document.nForm.hstt2.value =hstt2;
	
	hsth_2=eval(ifr2.document.nForm.hsth_2.value);　//H形鋼h_2
	document.nForm.hsth_2.value =hsth_2;	
	hstb_2=eval(ifr2.document.nForm.hstb_2.value);　//H形鋼b_2
	document.nForm.hstb_2.value =hstb_2;	
	hstt1_2=eval(ifr2.document.nForm.hstt1_2.value);　//H形鋼t1_2
	document.nForm.hstt1_2.value =hstt1_2;	
	hstt2_2=eval(ifr2.document.nForm.hstt2_2.value);　//H形鋼t2_2
	document.nForm.hstt2_2.value =hstt2_2;

	msth=eval(ifr2.document.nForm.msth.value);　//溝形鋼h
	document.nForm.msth.value =msth;	
	mstb=eval(ifr2.document.nForm.mstb.value);　//溝形鋼b
	document.nForm.mstb.value =mstb;	
	mstt1=eval(ifr2.document.nForm.mstt1.value);　//溝形鋼t1
	document.nForm.mstt1.value =mstt1;	
	mstt2=eval(ifr2.document.nForm.mstt2.value);　//溝形鋼t2
	document.nForm.mstt2.value =mstt2;

	msth_2=eval(ifr2.document.nForm.msth_2.value);　//溝形鋼h_2
	document.nForm.msth_2.value =msth_2;	
	mstb_2=eval(ifr2.document.nForm.mstb_2.value);　//溝形鋼b_2
	document.nForm.mstb_2.value =mstb_2;	
	mstt1_2=eval(ifr2.document.nForm.mstt1_2.value);　//溝形鋼t1_2
	document.nForm.mstt1_2.value =mstt1_2;	
	mstt2_2=eval(ifr2.document.nForm.mstt2_2.value);　//溝形鋼t2_2
	document.nForm.mstt2_2.value =mstt2_2;
	
	ysta=eval(ifr2.document.nForm.ysta.value);　//山形鋼h
	document.nForm.ysta.value =ysta;	
	ystb=eval(ifr2.document.nForm.ystb.value);　//山形鋼b
	document.nForm.ystb.value =ystb;	
	ystt=eval(ifr2.document.nForm.ystt.value);　//山形鋼t
	document.nForm.ystt.value =ystt;	

// 各値取得
	sg = eval(document.nForm.sg.value);　//比重
	ym = eval(document.nForm.ym.value);　//ヤング率
	p = eval(document.nForm.p.value);　//荷重
	l = eval(document.nForm.l.value);　//長さ
}

function ttl20() {
//自重計算 - 四角
	if (ifr2.document.getElementById("sikaku")) {
	jij = sikakuw * sikakuh * l * sg * 0.001 * 0.0098067;
}
//自重計算 - 角パイプ
	if (ifr2.document.getElementById("kakupa")) {
	jij = ((kakupaw * kakupah) - ((kakupaw - kakupat * 2) * (kakupah - kakupat * 2))) * l * sg * 0.001 * 0.0098067;
}
//自重計算 - 円形
	if (ifr2.document.getElementById("enkei")) {
	jij = Math.PI * Math.pow(enkeid, 2) / 4 * l * sg * 0.001 * 0.0098067;
}
//自重計算 - 丸パイプ
	if (ifr2.document.getElementById("marupa")) {
	jij = Math.PI * (Math.pow(marupad, 2) - Math.pow((marupad - marupat * 2), 2)) / 4 * l * sg * 0.001 * 0.0098067;
}
//自重計算 - H形鋼
	if (ifr2.document.getElementById("hst")) {
	jij = ((hstt1 * (hsth - 2 * hstt2)) + (2 * hstb * hstt2)) * l * sg * 0.001 * 0.0098067;
}
//自重計算 - H形鋼2
	if (ifr2.document.getElementById("hst2")) {
	jij = ((hstt1_2 * (hsth_2 - 2 * hstt2_2)) + (2 * hstb_2 * hstt2_2)) * l * sg * 0.001 * 0.0098067;
}
//自重計算 - 溝形鋼
	if (ifr2.document.getElementById("mst")) {
	jij = ((msth * mstt1) + (2 * mstt2 * (mstb - mstt1))) * l * sg * 0.001 * 0.0098067;
}
//自重計算 - 溝形鋼2
	if (ifr2.document.getElementById("mst2")) {
	jij = ((msth_2 * mstt1_2) + (2 * mstt2_2 * (mstb_2 - mstt1_2))) * l * sg * 0.001 * 0.0098067;
}
//自重計算 - 山形鋼
	if (ifr2.document.getElementById("yst")) {
	jij = ystt * (ysta + ystb - ystt) * l * sg * 0.001 * 0.0098067;
}
	
//断面二次モーメント計算 - 四角
	if (ifr2.document.getElementById("sikaku")) {
	sm = sikakuw * Math.pow(sikakuh, 3) / 12;
    sm = sm.toFixed(6);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}

//断面二次モーメント計算 - 角パイプ
	if (ifr2.document.getElementById("kakupa")) {
	sm = ((kakupaw * Math.pow(kakupah, 3)) - ((kakupaw - kakupat * 2) * Math.pow((kakupah - kakupat * 2), 3))) / 12;
    sm = sm.toFixed(6);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}

//断面二次モーメント計算 - 円形
	if (ifr2.document.getElementById("enkei")) {
	sm = Math.PI * Math.pow(enkeid, 4) / 64;
    sm = sm.toFixed(6);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	
//断面二次モーメント計算 - 丸パイプ
	if (ifr2.document.getElementById("marupa")) {
	sm = Math.PI * (Math.pow(marupad, 4) - Math.pow((marupad - marupat * 2), 4)) / 64;
    sm = sm.toFixed(6);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	
//断面二次モーメント計算 - H形鋼
	if (ifr2.document.getElementById("hst")) {
	sm = ((hstb * Math.pow(hsth, 3)) - ((hstb - hstt1) * Math.pow((hsth - 2 * hstt2), 3))) / 12;
    sm = sm.toFixed(6);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}

//断面二次モーメント計算 - H形鋼2
	if (ifr2.document.getElementById("hst2")) {
	sm = ((hstt2_2 * 2 * Math.pow(hstb_2, 3)) + ((hsth_2 - hstt2_2 * 2) * Math.pow(hstt1_2, 3))) / 12;
    sm = sm.toFixed(6);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	
//断面二次モーメント計算 - 溝形鋼
	if (ifr2.document.getElementById("mst")) {
	sm = ((mstb * Math.pow(msth, 3)) - ((mstb - mstt1) * Math.pow((msth - 2 * mstt2), 3))) / 12;
    sm = sm.toFixed(6);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}

//断面二次モーメント計算 - 溝形鋼2
	if (ifr2.document.getElementById("mst2")) {
    e1 = (mstt2_2 * 2 * Math.pow(mstb_2, 2) + (msth_2 - mstt2_2 * 2) * Math.pow(mstt1_2, 2)) / (2 * ((mstt2_2 * 2 * mstb_2) + (msth_2 - mstt2_2 * 2) * mstt1_2))
	sm = (msth_2 * Math.pow(e1, 3) - ((msth_2 - mstt2_2 * 2) * Math.pow((e1 - mstt1_2), 3)) + (mstt2_2 * 2 * Math.pow((mstb_2 - e1), 3))) / 3;
    sm = sm.toFixed(6);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	
//断面二次モーメント計算 - 山形鋼
	if (ifr2.document.getElementById("yst")) {
    e1 = (ystt * Math.pow(ysta, 2) + (ystb - ystt) * Math.pow(ystt, 2)) / (2 * ((ystt * ysta) + (ystb - ystt) * ystt))
	sm = (ystb * Math.pow(e1, 3) - ((ystb - ystt) * Math.pow((e1 - ystt), 3)) + (ystt * Math.pow((ysta - e1), 3))) / 3;
    sm = sm.toFixed(6);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	
//片持ちはり集中荷重
//(荷重のみ）
	if (document.getElementById("can1")) {
	ksk = p * Math.pow(l, 3) / (3 * ym * sm);
	ksk = ksk.toFixed(6);　	// 桁を調整
	ksk = parseFloat(ksk); //文字列を数値にする
	document.nForm.resulta1.value = ksk;
//(自重のみ(等分布荷重))
	ktk = jij / l * Math.pow(l, 4) / (8 * ym * sm);	
//荷重+自重
	kht = ksk + ktk;
	kht = kht.toFixed(6);
	kht = parseFloat(kht); //文字列を数値にする
	document.nForm.resulta2.value = kht;
}

//片持ちはり等分布荷重
//(荷重のみ）
	if (document.getElementById("can2")) {
	ksk = p / l * Math.pow(l, 4) / (8 * ym * sm);
	ksk = ksk.toFixed(6);　	// 桁を調整
	ksk = parseFloat(ksk); //文字列を数値にする
	document.nForm.resulta1.value = ksk;
//(自重のみ(等分布荷重))
	ktk = jij / l * Math.pow(l, 4) / (8 * ym * sm);	
//荷重+自重
	kht = ksk + ktk;
	kht = kht.toFixed(6);
	kht = parseFloat(kht); //文字列を数値にする
	document.nForm.resulta2.value = kht;
}

//単純支持はり集中荷重
//(荷重のみ）
if (document.getElementById("sim1")) {
	tsk = p * Math.pow(l, 3) / (48 * ym * sm);
	tsk = tsk.toFixed(6);　	// 桁を調整
	tsk = parseFloat(tsk); //文字列を数値にする
	document.nForm.resulta1.value = tsk;
//(自重のみ(等分布荷重))
	ttk = 5 * jij / l * Math.pow(l, 4) / (384 * ym * sm);
//荷重+自重
	tht = tsk + ttk;
	tht = tht.toFixed(6);　	// 桁を調整
	tht = parseFloat(tht); //文字列を数値にする
	document.nForm.resulta2.value = tht;
}

//単純支持はり等分布荷重
//(荷重のみ）
if (document.getElementById("sim2")) {
	tsk = 5 * p / l * Math.pow(l, 4) / (384 * ym * sm);
ttt = 5 * p * Math.pow(l, 4)
uuu =384 * ym * sm
	tsk = tsk.toFixed(6);　	// 桁を調整
	tsk = parseFloat(tsk); //文字列を数値にする
	document.nForm.resulta1.value = tsk;
//(自重のみ(等分布荷重))
	ttk = 5 * jij / l * Math.pow(l, 4) / (384 * ym * sm);
//荷重+自重
	tht = tsk + ttk;
	tht = tht.toFixed(6);　	// 桁を調整
	tht = parseFloat(tht); //文字列を数値にする
	document.nForm.resulta2.value = tht;
}

//両端固定はり集中荷重
//(荷重のみ）
if (document.getElementById("fix1")) {
	rsk = p * Math.pow(l, 3) / (192 * ym * sm);
	rsk = rsk.toFixed(6);　	// 桁を調整
	rsk = parseFloat(rsk); //文字列を数値にする
	document.nForm.resulta1.value = rsk;	
//(自重のみ(等分布荷重))
	rtk = jij / l * Math.pow(l, 4) / (384 * ym * sm);
//荷重+自重
	rht = rsk + rtk;
	rht = rht.toFixed(6);　	// 桁を調整
	rht = parseFloat(rht); //文字列を数値にする
	document.nForm.resulta2.value = rht;
}

//両端固定はり等分布荷重
//(荷重のみ）
if (document.getElementById("fix2")) {
	rsk = p / l * Math.pow(l, 4) / (384 * ym * sm);
	rsk = rsk.toFixed(6);　	// 桁を調整
	rsk = parseFloat(rsk); //文字列を数値にする
	document.nForm.resulta1.value = rsk;	
//(自重のみ(等分布荷重))
	rtk = jij / l * Math.pow(l, 4) / (384 * ym * sm);
//荷重+自重
	rht = rsk + rtk;
	rht = rht.toFixed(6);　	// 桁を調整
	rht = parseFloat(rht); //文字列を数値にする
	document.nForm.resulta2.value = rht;
}
} 

function reset(){
 document.getElementById("resulta1").value ='';
 document.getElementById("resulta2").value ='';
 document.getElementById("smoment").value ='';
 }


//材料力学計算_座屈

//iframeへフォーカス移動
function foc() {
     ifr3.document.nForm.sikakuw.focus();
     ifr3.document.nForm.kakupaw.focus();
     ifr3.document.nForm.enkeid.focus();
     ifr3.document.nForm.marupad.focus();
     ifr3.document.nForm.hsth.focus();
     ifr3.document.nForm.msth.focus();
     ifr3.document.nForm.ysta.focus();
}

//空欄があったら警告する
function check40() { 
//座屈の値
	txt = document.nForm.ym.value;
	if (txt == "") alert("ヤング率が入力されていません！");
	txt = document.nForm.l.value;
	if (txt == "") alert("長さが入力されていません！");
}

function check50() {
//四角の値
	if (ifr3.document.getElementById("sikaku")) {
	txt = document.nForm.sikakuw.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.sikakuh.value;
	if (txt == "undefined") alert("hが入力されていません！");
}
	
//角パイプの値
	if (ifr3.document.getElementById("kakupa")) {
	txt = document.nForm.kakupaw.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.kakupah.value;
	if (txt == "undefined") alert("hが入力されていません！");
	txt = document.nForm.kakupat.value;
	if (txt == "undefined") alert("tさが入力されていません！");
}
	
//円形の値
	if (ifr3.document.getElementById("enkei")) {
	txt = document.nForm.enkeid.value;
	if (txt == "undefined") alert("dが入力されていません！");
}

//丸パイプの値
	if (ifr3.document.getElementById("marupa")) {
	txt = document.nForm.marupad.value;
	if (txt == "undefined") alert("dが入力されていません！");
	txt = document.nForm.marupat.value;
	if (txt == "undefined") alert("tが入力されていません！");
}

//H形鋼の値
	if (ifr3.document.getElementById("hst")) {
	txt = document.nForm.hsth.value;
	if (txt == "undefined") alert("hが入力されていません！");
	txt = document.nForm.hstb.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.hstt1.value;
	if (txt == "undefined") alert("t1が入力されていません！");
	txt = document.nForm.hstt2.value;
	if (txt == "undefined") alert("t2が入力されていません！");
}

//溝形鋼の値
	if (ifr3.document.getElementById("mst")) {
	txt = document.nForm.msth.value;
	if (txt == "undefined") alert("hが入力されていません！");
	txt = document.nForm.mstb.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.mstt1.value;
	if (txt == "undefined") alert("t1が入力されていません！");
	txt = document.nForm.mstt2.value;
	if (txt == "undefined") alert("t2が入力されていません！");
}

//山形鋼の値
	if (ifr3.document.getElementById("yst")) {
	txt = document.nForm.ysta.value;
	if (txt == "undefined") alert("aが入力されていません！");
	txt = document.nForm.ystb.value;
	if (txt == "undefined") alert("bが入力されていません！");
	txt = document.nForm.ystt.value;
	if (txt == "undefined") alert("tが入力されていません！");
}
}

function bdata() {
//iframeより形状のデータ取得
	sikakuw=eval(ifr3.document.nForm.sikakuw.value);　//四角b
	document.nForm.sikakuw.value=sikakuw;	
	sikakuh=eval(ifr3.document.nForm.sikakuh.value);　//四角h
	document.nForm.sikakuh.value =sikakuh;

	kakupaw=eval(ifr3.document.nForm.kakupaw.value);　//角パイプb
	document.nForm.kakupaw.value=kakupaw;	
	kakupah=eval(ifr3.document.nForm.kakupah.value);　//角パイプh
	document.nForm.kakupah.value =kakupah;
	kakupat=eval(ifr3.document.nForm.kakupat.value);　//角パイプt
	document.nForm.kakupat.value =kakupat;
	
	enkeid=eval(ifr3.document.nForm.enkeid.value);　//円形d
	document.nForm.enkeid.value =enkeid;
	
	marupad=eval(ifr3.document.nForm.marupad.value);　//丸パイプd
	document.nForm.marupad.value =marupad;
	marupat=eval(ifr3.document.nForm.marupat.value);　//丸パイプt
	document.nForm.marupat.value =marupat;

	hsth=eval(ifr3.document.nForm.hsth.value);　//H形鋼h
	document.nForm.hsth.value =hsth;	
	hstb=eval(ifr3.document.nForm.hstb.value);　//H形鋼b
	document.nForm.hstb.value =hstb;	
	hstt1=eval(ifr3.document.nForm.hstt1.value);　//H形鋼t1
	document.nForm.hstt1.value =hstt1;	
	hstt2=eval(ifr3.document.nForm.hstt2.value);　//H形鋼t2
	document.nForm.hstt2.value =hstt2;
	
	msth=eval(ifr3.document.nForm.msth.value);　//溝形鋼h
	document.nForm.msth.value =msth;	
	mstb=eval(ifr3.document.nForm.mstb.value);　//溝形鋼b
	document.nForm.mstb.value =mstb;	
	mstt1=eval(ifr3.document.nForm.mstt1.value);　//溝形鋼t1
	document.nForm.mstt1.value =mstt1;	
	mstt2=eval(ifr3.document.nForm.mstt2.value);　//溝形鋼t2
	document.nForm.mstt2.value =mstt2;

	ysta=eval(ifr3.document.nForm.ysta.value);　//山形鋼h
	document.nForm.ysta.value =ysta;	
	ystb=eval(ifr3.document.nForm.ystb.value);　//山形鋼b
	document.nForm.ystb.value =ystb;	
	ystt=eval(ifr3.document.nForm.ystt.value);　//山形鋼t
	document.nForm.ystt.value =ystt;	
	
// 各値取得
	ym = eval(document.nForm.ym.value);　//ヤング率
	l = eval(document.nForm.l.value);　//長さ
}

function ttl40() {
//断面積 - 四角
	if (ifr3.document.getElementById("sikaku")) {
	csa = sikakuw * sikakuh;
}
//断面積 - 角パイプ
	if (ifr3.document.getElementById("kakupa")) {
	csa = ((kakupaw * kakupah) - ((kakupaw - kakupat * 2) * (kakupah - kakupat * 2)));
}
//断面積 - 円形
	if (ifr3.document.getElementById("enkei")) {
	csa = Math.PI * Math.pow(enkeid, 2) / 4;
}
//断面積 - 丸パイプ
	if (ifr3.document.getElementById("marupa")) {
	csa = Math.PI * (Math.pow(marupad, 2) - Math.pow((marupad - marupat * 2), 2)) / 4;
}
//断面積 - H形鋼
	if (ifr3.document.getElementById("hst")) {
	csa = ((hstt1 * (hsth - 2 * hstt2)) + (2 * hstb * hstt2));
}
//断面積 - 溝形鋼
	if (ifr3.document.getElementById("mst")) {
	csa = ((msth * mstt1) + (2 * mstt2 * (mstb - mstt1)));
}
//断面積 - 山形鋼
	if (ifr3.document.getElementById("yst")) {
	csa = ystt * (ysta + ystb - ystt);
}
	
//断面二次モーメント計算 - 四角
	if (ifr3.document.getElementById("sikaku")) {
	sm = sikakuw * Math.pow(sikakuh, 3) / 12;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}

//断面二次モーメント計算 - 角パイプ
	if (ifr3.document.getElementById("kakupa")) {
	sm = ((kakupaw * Math.pow(kakupah, 3)) - ((kakupaw - kakupat * 2) * Math.pow((kakupah - kakupat * 2), 3))) / 12;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}

//断面二次モーメント計算 - 円形
	if (ifr3.document.getElementById("enkei")) {
	sm = Math.PI * Math.pow(enkeid, 4) / 64;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	
//断面二次モーメント計算 - 丸パイプ
	if (ifr3.document.getElementById("marupa")) {
	sm = Math.PI * (Math.pow(marupad, 4) - Math.pow((marupad - marupat * 2), 4)) / 64;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	
//断面二次モーメント計算 - H形鋼
	if (ifr3.document.getElementById("hst")) {
	sm = ((hstb * Math.pow(hsth, 3)) - ((hstb - hstt1) * Math.pow((hsth - 2 * hstt2), 3))) / 12;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	
//断面二次モーメント計算 - 溝形鋼
	if (ifr3.document.getElementById("mst")) {
	sm = ((mstb * Math.pow(msth, 3)) - ((mstb - mstt1) * Math.pow((msth - 2 * mstt2), 3))) / 12;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	
//断面二次モーメント計算 - 山形鋼
	if (ifr3.document.getElementById("yst")) {
    e1 = (ystt * Math.pow(ysta, 2) + (ystb - ystt) * Math.pow(ystt, 2)) / (2 * ((ystt * ysta) + (ystb - ystt) * ystt))
	sm = (ystb * Math.pow(e1, 3) - ((ystb - ystt) * Math.pow((e1 - ystt), 3)) + (ystt * Math.pow((ysta - e1), 3))) / 3;
    sm = sm.toFixed(3);　// 桁を調整
	sm = parseFloat(sm); //文字列を数値にする
	document.nForm.smoment.value = sm;
}
	
//両端固定	
	if (document.getElementById("buc1")) {
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
	if (document.getElementById("buc2")) {
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
	if (document.getElementById("buc3")) {
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
	if (document.getElementById("buc4")) {
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
}
 