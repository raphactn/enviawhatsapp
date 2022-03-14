function url(){
    const num = document.getElementById('num').value;
    const msg = document.getElementById('msg').value;
    const link = document.getElementById('wpp');
    if(num == '' || num == '('){
        confirm('Informe o numero do WhatsApp')
    }
    else{
        link.href = ('https://api.whatsapp.com/send?phone=55'+ num + '&text=') + msg;
    }
 
}
//mascara telefone e celular

function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }
