//質量

function clr1(){ 
  	document.form.iv2.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv4.value=""; 
}
function clr2(){ 
  	document.form.iv1.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv4.value=""; 
}
function clr3(){ 
  	document.form.iv1.value=""; 
  	document.form.iv2.value=""; 
  	document.form.iv4.value=""; 
}
function clr4(){ 
  	document.form.iv1.value=""; 
  	document.form.iv2.value=""; 
  	document.form.iv3.value=""; 
}

function le1() {
	iv1 = eval(document.form.iv1.value);
	ca1 = iv1 * 1;
	ca2 = iv1 * 0.001;
	ca3 = iv1 * 0.000001;
	ca4 = iv1 * 0.000000001;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
}
function le2() {
	iv2 = eval(document.form.iv2.value);
	ca1 = iv2 * 1000;
	ca2 = iv2 * 1;
	ca3 = iv2 * 0.001;
	ca4 = iv2 * 0.000001;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
}
function le3() {
	iv3 = eval(document.form.iv3.value);
	ca1 = iv3 * 1000000;
	ca2 = iv3 * 1000;
	ca3 = iv3 * 1;
	ca4 = iv3 * 0.001;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
}
function le4() {
	iv4 = eval(document.form.iv4.value);
	ca1 = iv4 * 1000000000;
	ca2 = iv4 * 1000000;
	ca3 = iv4 * 1000;
	ca4 = iv4 * 1;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
}
