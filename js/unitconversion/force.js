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
	ca1 = iv1 * 1;
	ca2 = iv1 * 9.80665;
	ca3 = iv1 * 9.80665 * 0.001;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
}
function kn2() {
	iv2 = eval(document.form.iv2.value);
	ca1 = iv2 * 0.10197;
	ca2 = iv2 * 1;
	ca3 = iv2 * 0.001;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
}
function kn3() {
	iv3 = eval(document.form.iv3.value);
	ca1 = iv3 * 0.10197 * 1000;
	ca2 = iv3 * 1 * 1000;
	ca3 = iv3 * 1;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
}

