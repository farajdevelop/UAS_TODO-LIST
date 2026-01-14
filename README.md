# UAS_TODO-LIST
Ini adalah aplikasi web pencatat tugas yang saya buat untuk memudahkan orang mencatat pekerjaan sehari-hari. Seperti notes digital, tapi khusus untuk daftar "yang harus dikerjakan". Contoh penggunaan: Mahasiswa: catat tugas kuliah, deadline Pegawai: catat pekerjaan kantor Ibu rumah tangga: catat belanja, urusan rumah

Algoritma/logika

AWAL BUKA Cek memory browser → ada data lama? → tampilkan → hitung statistik
TAMBAH TUGAS Input teks → cek valid (tidak kosong, tidak panjang) → buat ID → simpan object {id, nama, status, waktu} → tambah ke daftar → simpan ke memory → update tampilan → update hitungan
CENTANG TUGAS Klik centang → cari tugas by ID → balik status (selesai ↔ belum) → update memory → update tampilan → update hitungan
HAPUS TUGAS Klik X → konfirmasi → cari tugas by ID → hapus dari daftar → update memory → update tampilan → update hitungan
FILTER TAMPILAN Klik tombol filter (semua/aktif/selesai) → filter daftar sesuai pilihan → tampilkan hasil filter → highlight tombol aktif
PERHITUNGAN Setiap perubahan → hitung: total tugas, tugas selesai, persentase selesai → update progress bar → update semua display angka
SIMPAN DATA Setiap perubahan → convert daftar ke JSON → simpan ke localStorage → load ulang saat buka aplikasi
