const date = new Date();

const jam = date.getHours();
const menit = date.getMinutes();

// mengatur nama-nama hari
// defaultnya berupa angka sesuai dengan nomer indexnya
const hari = [
  "Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"
];

// mengatur nama-nama bulan
// defaultnya berupa angka sesuai dengan nomer indexnya
const bulan = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", 
  "Agustus", "September", "Oktober", "November", "Desember"
];

const config = `${hari[date.getDay()]}, ${date.getDate()} ${bulan[date.getMonth()]}`;
const tahun = date.getFullYear();

console.log(`Jam : ${jam}:${menit}`);
console.log(`${config} ${tahun}`);