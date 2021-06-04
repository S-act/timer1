
    function proc() {
        readCookie();
      }
    
    // 書き込み
    function writeCookie() {

        var tmp = document.cookie;
        var jy = document.cookie.replace(/(?:(?:^|.*;\s*)jcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var fy = document.cookie.replace(/(?:(?:^|.*;\s*)fcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var by = document.cookie.replace(/(?:(?:^|.*;\s*)bcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (jy ?? 0);
        if (fy ?? 0);
        if (by ?? 0);
      var jikan = Number(jikk.value) + Number(jy);
      var fan = Number(fun.value) + Number(fy);
      var byu = Number(byo.value) + Number(by);
      if(byu >=60){
        byu= byu-60;
        fan = fan+1;
    }
    if(fan >=60){
        fan= fan-60;
        jikan = jikan+1;
    }
      document.cookie = "jcookie=" + jikan + ";max-age=31536000 ;SameSite = strict";
      document.cookie = 'fcookie=' + fan + ";max-age=31536000 ;SameSite = strict";
      document.cookie = 'bcookie=' + byu + ";max-age=31536000 ;SameSite = strict";
      console.log(document.cookie);
    }

    // 読み込み
    function readCookie() {

      var tmp = document.cookie;
      var jikan = document.cookie.replace(/(?:(?:^|.*;\s*)jcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      var fan = document.cookie.replace(/(?:(?:^|.*;\s*)fcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      var byu = document.cookie.replace(/(?:(?:^|.*;\s*)bcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      if (jikan ?? 0);
        if (fan ?? 0);
        if (byu ?? 0);
      gen.innerHTML =String(jikan +"時間" +fan +"分" + byu + "秒");
      console.log(document.cookie);
    }
    function cntReset(){
      var tmp = document.cookie;
      document.cookie = "jcookie=0;max-age=31536000 ;SameSite = strict";
      document.cookie = "fcookie=0;max-age=31536000 ;SameSite = strict";
      document.cookie = "bcookie=0;max-age=31536000 ;SameSite = strict";
      console.log(document.cookie);
    }
function cntStart()
{
  writeCookie();
}
