//空欄があったら警告する

//直方体
function check() {
  txt = document.cylinderforce.d1.value;
  if (txt == "") alert("シリンダ内径が入力されていません！");
  txt = document.cylinderforce.d2.value;
  if (txt == "") alert("ロッド径が入力されていません！");
  txt = document.cylinderforce.p.value;
  if (txt == "") alert("圧力が入力されていません！");
  txt = document.cylinderforce.f.value;
  if (txt == "") alert("負荷率が入力されていません！");
}

//エアシリンダ推力計算
function cyl() {
  d1 = eval(document.cylinderforce.d1.value);
  d2 = eval(document.cylinderforce.d2.value);
  p = eval(document.cylinderforce.p.value);
  f = eval(document.cylinderforce.f.value);
  //OUT
  outre = d1 * 0.5 * d1 * 0.5 * 3.14 * p * f;
  outre = outre.toFixed(1); // 桁を調整
  document.cylinderforce.outresult.value = outre;
  outre_kgf = d1 * 0.5 * d1 * 0.5 * 3.14 * p * f * 0.101972;
  outre_kgf = outre_kgf.toFixed(1); // 桁を調整
  document.cylinderforce.outresult_kgf.value = outre_kgf;
  //IN
  inre = (d1 * 0.5 * d1 * 0.5 - d2 * 0.5 * d2 * 0.5) * 3.14 * p * f;
  inre = inre.toFixed(1); // 桁を調整
  txt = document.cylinderforce.d2.value;
  if (txt == "0") {
	document.cylinderforce.inresult.value = "NaN";
  } else {
	document.cylinderforce.inresult.value = inre;
}
  inre_kgf =
    (d1 * 0.5 * d1 * 0.5 - d2 * 0.5 * d2 * 0.5) * 3.14 * p * f * 0.101972;
  inre_kgf = inre_kgf.toFixed(1); // 桁を調整
  if (txt == "0") {
	document.cylinderforce.inresult_kgf.value = "NaN";
} else {
	document.cylinderforce.inresult_kgf.value = inre_kgf;
}

}
