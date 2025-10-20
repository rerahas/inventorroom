//面積

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
	ca3 = iv1 * 0.000001;
	ca4 = iv1 * 0.000000000001;
	ca5 = iv1 * 0.00155;
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
	ca3 = iv2 * 0.0001;
	ca4 = iv2 * 0.0000000001;
	ca5 = iv2 * 0.155;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
}
function le3() {
	iv3 = eval(document.form.iv3.value);
	ca1 = iv3 * 1000000;
	ca2 = iv3 * 10000;
	ca3 = iv3 * 1;
	ca4 = iv3 * 0.000001;
	ca5 = iv3 * 1550;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
}
function le4() {
	iv4 = eval(document.form.iv4.value);
	ca1 = iv4 * 1000000000000;
	ca2 = iv4 * 10000000000;
	ca3 = iv4 * 1000000;
	ca4 = iv4 * 1;
	ca5 = iv4 * 1550003100;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
}
function le5() {
	iv5 = eval(document.form.iv5.value);
	ca1 = iv5 * 645.161290;
	ca2 = iv5 * 6.45161290;
	ca3 = iv5 * 0.00064516;
	ca4 = iv5 * 0.000000000645;
	ca5 = iv5 * 1;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
}
