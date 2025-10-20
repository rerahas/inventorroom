//インラインフレームのリンク先ページに対応して高さ可変
function getIFrameDocument(aID){
 if (document.getElementById(aID).contentDocument){ 
return document.getElementById(aID).contentDocument;
 } else {
 return document.frames[aID].document;
 }
 }
 
function GetHeight(ID){
 if (document.height) {
 document.getElementById(ID).style.height = getIFrameDocument(ID).height +20 +"px" ;
 }else{
 document.getElementById(ID).style.height = getIFrameDocument(ID).body.scrollHeight +20 +"px";
 }
 }

 function GetHeightForMain(){
 GetHeight("ifr3");
 parent.GetHeightForIndex();
 }