// Membuat Program Pengelolaan Busway.
function busway(namaSupir, penumpang, jumlahPenumpang, saldo){
  let obj = {};
  obj.namaSupir       = namaSupir;
  obj.penumpang       = penumpang;
  obj.jumlahPenumpang = jumlahPenumpang;
  obj.saldo           = saldo;

  obj.penumpangNaik = function(namaPenumpang){
    if( obj.penumpang.length == 0 ){
      obj.penumpang.push(namaPenumpang);
      return penumpang;
    } else {
      for( let i = 0; i < obj.penumpang.length; i++ ){
        if( obj.penumpang == namaPenumpang ){
          console.log(`Penumpang dengan nama ${namaPenumpang} Sudah ada didalam busway`);
          return penumpang;
        } else if ( obj.penumpang[i] == undefined ){
          obj.penumpang[i] = namaPenumpang;
          return penumpang;
        } else if ( i == obj.penumpang.length - 1 ){
          obj.penumpang.push(namaPenumpang);
          return penumpang;
        }
      }
    }
  }

  obj.penumpangTurun = function(namaPenumpang, bayar){
    if( obj.penumpang.length == 0 ){
      console.log(`Busway saat ini sedang kosong, tidak ada yang bisa dikeluarkan`);
      return penumpang;
    } else {
      for( let i = 0; i < obj.penumpang.length; i++ ){
        if( obj.penumpang[i] == namaPenumpang ){
          obj.penumpang[i] = undefined;
          obj.saldo += bayar;
          obj.jumlahPenumpang += i + 1;
          return penumpang;
        } else if ( i == obj.penumpang.length - 1){
          console.log(`Tidak ada nama ${namaPenumpang} didalam busway`);
          return penumpang;
        }
      }
    }
  }
  return obj;
}

let buswayBlue = new busway('El', [], 0, 0);