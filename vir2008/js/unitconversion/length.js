//長さ

function clr1(){ 
  	document.form.iv2.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv4.value=""; 
  	document.form.iv5.value=""; 
  	document.form.iv6.value=""; 
}
function clr2(){ 
  	document.form.iv1.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv4.value=""; 
  	document.form.iv5.value=""; 
  	document.form.iv6.value=""; 
}
function clr3(){ 
  	document.form.iv1.value=""; 
  	document.form.iv2.value=""; 
  	document.form.iv4.value=""; 
  	document.form.iv5.value=""; 
  	document.form.iv6.value=""; 
}
function clr4(){ 
  	document.form.iv1.value=""; 
  	document.form.iv2.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv5.value=""; 
  	document.form.iv6.value=""; 
}
function clr5(){ 
  	document.form.iv1.value=""; 
  	document.form.iv2.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv4.value=""; 
  	document.form.iv6.value=""; 
}
function clr6(){ 
  	document.form.iv1.value=""; 
  	document.form.iv2.value=""; 
  	document.form.iv3.value=""; 
  	document.form.iv4.value=""; 
  	document.form.iv5.value=""; 
}

function le1() {
	iv1 = eval(document.form.iv1.value);
	ca1 = iv1 * 1;
	ca2 = iv1 * 0.001;
	ca3 = iv1 * 0.0001;
	ca4 = iv1 * 0.000001;
	ca5 = iv1 * 0.000000001;
	ca6 = iv1 * 0.00003937;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
	document.form.re6.value = ca6;
}
function le2() {
	iv2 = eval(document.form.iv2.value);
	ca1 = iv2 * 1000;
	ca2 = iv2 * 1;
	ca3 = iv2 * 0.1;
	ca4 = iv2 * 0.001;
	ca5 = iv2 * 0.000001;
	ca6 = iv2 * 0.03937;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
	document.form.re6.value = ca6;
}
function le3() {
	iv3 = eval(document.form.iv3.value);
	ca1 = iv3 * 10000;
	ca2 = iv3 * 10;
	ca3 = iv3 * 1;
	ca4 = iv3 * 0.01;
	ca5 = iv3 * 0.00001;
	ca6 = iv3 * 0.3937;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
	document.form.re6.value = ca6;
}
function le4() {
	iv4 = eval(document.form.iv4.value);
	ca1 = iv4 * 1000000;
	ca2 = iv4 * 1000;
	ca3 = iv4 * 100;
	ca4 = iv4 * 1;
	ca5 = iv4 * 0.001;
	ca6 = iv4 * 39.37;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
	document.form.re6.value = ca6;
}
function le5() {
	iv5 = eval(document.form.iv5.value);
	ca1 = iv5 * 1000000000;
	ca2 = iv5 * 1000000;
	ca3 = iv5 * 100000;
	ca4 = iv5 * 1000;
	ca5 = iv5 * 1;
	ca6 = iv5 * 39370;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
	document.form.re6.value = ca6;
}
function le6() {
	iv6 = eval(document.form.iv6.value);
	ca1 = iv6 * 25400;
	ca2 = iv6 * 25.4;
	ca3 = iv6 * 2.54;
	ca4 = iv6 * 0.0254;
	ca5 = iv6 * 0.0000254;
	ca6 = iv6 * 1;
	document.form.re1.value = ca1;
	document.form.re2.value = ca2;
	document.form.re3.value = ca3;
	document.form.re4.value = ca4;
	document.form.re5.value = ca5;
	document.form.re6.value = ca6;
}
