//速度

function clr1(){ 
  	document.form.iv2.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv4.value=""; 
  	document.form.iv5.value=""; 
}
function clr2(){ 
  	document.form.iv1.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv4.value=""; 
  	document.form.iv5.value=""; 
}
function clr3(){ 
  	document.form.iv1.value=""; 
  	document.form.iv2.value=""; 
  	document.form.iv4.value=""; 
  	document.form.iv5.value=""; 
}
function clr4(){ 
  	document.form.iv1.value=""; 
  	document.form.iv2.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv5.value=""; 
}
function clr5(){ 
  	document.form.iv1.value=""; 
  	document.form.iv2.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv4.value=""; 
}

function le1() {
	iv1 = eval(document.form.iv1.value);
	ca1 = iv1 * 1;
	ca2 = iv1 * 0.01;
	ca3 = iv1 * 0.6;
	ca4 = iv1 * 36;
	ca5 = iv1 * 0.036;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
}
function le2() {
	iv2 = eval(document.form.iv2.value);
	ca1 = iv2 * 100;
	ca2 = iv2 * 1;
	ca3 = iv2 * 60;
	ca4 = iv2 * 3600;
	ca5 = iv2 * 3.6;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
}
function le3() {
	iv3 = eval(document.form.iv3.value);
	ca1 = iv3 * 1.7;
	ca2 = iv3 * 0.017;
	ca3 = iv3 * 1;
	ca4 = iv3 * 60;
	ca5 = iv3 * 0.06;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
}
function le4() {
	iv4 = eval(document.form.iv4.value);
	ca1 = iv4 * 0.028;
	ca2 = iv4 * 0.00028;
	ca3 = iv4 * 0.017;
	ca4 = iv4 * 1;
	ca5 = iv4 * 0.001;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
}
function le5() {
	iv5 = eval(document.form.iv5.value);
	ca1 = iv5 * 27.8;
	ca2 = iv5 * 0.28;
	ca3 = iv5 * 16.7;
	ca4 = iv5 * 1000;
	ca5 = iv5 * 1;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
}
