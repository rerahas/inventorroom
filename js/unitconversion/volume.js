//体積

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

function le1() {
	iv1 = eval(document.form.iv1.value);
	ca1 = iv1 * 1;
	ca2 = iv1 * 0.000001;
	ca3 = iv1 * 0.061023;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
}
function le2() {
	iv2 = eval(document.form.iv2.value);
	ca1 = iv2 * 1000000;
	ca2 = iv2 * 1;
	ca3 = iv2 * 61023;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
}
function le3() {
	iv3 = eval(document.form.iv3.value);
	ca1 = iv3 * 16.3871;
	ca2 = iv3 * 0.0000163871;
	ca3 = iv3 * 1;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
}
