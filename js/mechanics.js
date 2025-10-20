//重量計算

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


//空欄があったら警告する

//直方体
function check1() { 
	txt = document.nForm.w.value;
	if (txt == "") alert("幅が入力されていません！");
	txt = document.nForm.l.value;
	if (txt == "") alert("長さが入力されていません！");
	txt = document.nForm.t.value;
	if (txt == "") alert("厚さが入力されていません！");
}
//円柱
function check2() {
	txt = document.nForm.d.value;
	if (txt == "") alert("直径が入力されていません！");
	txt = document.nForm.l.value;
	if (txt == "") alert("長さが入力されていません！");
}
//H形鋼
function check3() {
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
//溝形鋼
function check4() {
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
//山形鋼
function check5() {
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
//比重
function check() {
	txt = document.nForm.sg.value;
	if (txt == "") alert("材質が選択されていません！又は\r\n比重が入力されていません！");
	txt = document.nForm.n.value;
	if (txt == "") alert("個数が入力されていません！");
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