//テーブル列クリッカブル(クリッカブルは「クリックできる」こと)
jQuery(function($) {
  $('tr[data-href]').addClass('clickable')
    .click(function(e) {
      if(!$(e.target).is('a')){
        window.location = $(e.target).closest('tr').data('href');
      };
  });
});

//セル内の値の取得 
function cellOver(obj){
document.getElementById("tr" + obj)
}

function cellOut(obj){
document.getElementById("tr" + obj)
}

function getCell(obj){
document.getElementById("text1").value = document.getElementById("td"+obj + "a").innerText
document.getElementById("text1").value = document.getElementById("td"+obj + "a").textContent
document.getElementById("text2").value = document.getElementById("td"+obj + "b").innerText
document.getElementById("text2").value = document.getElementById("td"+obj + "b").textContent
document.getElementById("text3").value = document.getElementById("td"+obj + "c").innerText
document.getElementById("text3").value = document.getElementById("td"+obj + "c").textContent
document.getElementById("text4").value = document.getElementById("td"+obj + "d").innerText
document.getElementById("text4").value = document.getElementById("td"+obj + "d").textContent
document.getElementById("text5").value = document.getElementById("td"+obj + "e").innerText
document.getElementById("text5").value = document.getElementById("td"+obj + "e").textContent
document.getElementById("text6").value = document.getElementById("td"+obj + "f").innerText
document.getElementById("text6").value = document.getElementById("td"+obj + "f").textContent
}