//力

function clr1(){ 
  	document.form.iv2.value=""; 
  	document.form.iv3.value=""; 
}
function clr2(){ 
  	document.form.iv1.value=""; 
  	document.form.iv3.value=""; 
}
function clr3(){ 
  	document.form.iv1.value=""; 
  	document.form.iv2.value=""; 
}

function kn1() {
	iv1 = eval(document.form.iv1.value);
	ca1 = iv1 * 9.80665;
	document.form.re1.value = ca1;
}
function kn2() {
	iv1 = eval(document.form.iv1.value);
	ca2 = iv1 * 9.80665 * 0.001;
	document.form.re2.value = ca2;
}
function nk1() {
	iv2 = eval(document.form.iv2.value);
	ca3 = iv2 * 0.10197;
	document.form.re3.value = ca3;
}
function nk2() {
	iv3 = eval(document.form.iv3.value);
	ca4 = iv3 * 0.10197 * 1000;
	document.form.re3.value = ca4;
}
