//�A�t�B���G�C�g�����_��
window.onload = function () {
    var E = document.getElementsByClassName("affi3");
    var m = E.length;
    var n = parseInt(Math.random() * m);
    for (var i = m - 1; i >= 0; i--) {
      var e = E[i];
      e.style.display = 'none';
    }
    E[n].style.display = '';
}
