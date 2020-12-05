// membuat program pengelolaan busway.
function busway(namaSupir, penumpang, jumlahPenumpang, saldo){
  let obj = {};
  obj.namaSupir       = namaSupir;
  obj.penumpang       = penumpang;
  obj.jumlahPenumpang = jumlahPenumpang;
  obj.saldo           = saldo;

  // kondisi saat penumpang naik  
  obj.penumpangNaik = function(namaPenumpang){
    if( obj.penumpang.length == 0 ){
      obj.penumpang.push(namaPenumpang); // masukkan nama penumpang kedalam object penumpang
      return penumpang;
    } else {
      for( let i = 0; i < obj.penumpang.length; i++ ){
        // kondisi saat nama penumpang sudah ada didalam busway
        if( obj.penumpang == namaPenumpang ){
          console.log(`Penumpang dengan nama ${namaPenumpang} Sudah ada didalam busway`);
          return penumpang;
          // kondisi jika kursi penumpang kosong
          // masukan nama penumpang ke kursi kosong terlebih dahulu
        } else if ( obj.penumpang[i] == undefined ){
          obj.penumpang[i] = namaPenumpang;
          return penumpang;
          // memasukkan nama penumpang ke kursi berikutnya
        } else if ( i == obj.penumpang.length - 1 ){
          obj.penumpang.push(namaPenumpang);
          return penumpang;
        }
      }
    }
  }
  
  // kondisi saat penumpang turun
  obj.penumpangTurun = function(namaPenumpang, bayar){
    // beri tahu saat menurunkan penumpang
    // jika penumpang didalam busway masih kosong
    if( obj.penumpang.length == 0 ){
      console.log(`Busway saat ini sedang kosong, tidak ada yang bisa dikeluarkan`);
      return penumpang;
    } else {
      for( let i = 0; i < obj.penumpang.length; i++ ){
        // kondisi saat nama penumpang sama dengan yang ada didalam busway
        // turunkan penumpang
        // object saldo diisi dengan bayaran dari penumpang
        // object jumlah penumpang + 1 setiap penumpang turun
        if( obj.penumpang[i] == namaPenumpang ){
          obj.penumpang[i] = undefined;
          obj.saldo += bayar;
          obj.jumlahPenumpang += i + 1;
          return penumpang;
          // kondisi saat nama penumpang tidak ada didalam busway
        } else if ( i == obj.penumpang.length - 1){
          console.log(`Tidak ada nama ${namaPenumpang} didalam busway`);
          return penumpang;
        }
      }
    }
  }
  // kembalikan nilai obj
  return obj;
}

// pemanggilan function
const buswayBlue = new busway('nama supir1', [], 0, 0);
const buswayOrange = new busway('nama supir2', [], 0, 0);
