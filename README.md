# Javascript DOM

## DOM Selection

### 1. `document.getElementById(id)`

- Mengambil **satu elemen** berdasarkan `id`.
- Hasil: `Element`
- Umumnya digunakan saat elemen memiliki `id` unik.

## 2. `document.getElementsByTagName(tag)`

- Mengambil **semua elemen** berdasarkan nama tag.
- Hasil: `HTMLCollection`
- Dapat digunakan dengan perulangan karena bisa berisi lebih dari satu elemen.

## 3. `document.getElementsByClassName(className)`

- Mengambil **semua elemen** berdasarkan nama class.
- Hasil: `HTMLCollection`
- Bisa diakses seperti array menggunakan indeks.

## 4. `document.querySelector(selector)`

- Mengambil **elemen pertama** yang cocok dengan CSS selector.
- Hasil: `Element`
- Fleksibel karena mendukung selektor kompleks (seperti `#id`, `.class`, `tag.class`, dll).

## 5. `document.querySelectorAll(selector)`

- Mengambil **semua elemen** yang cocok dengan CSS selector.
- Hasil: `NodeList`
- Bisa digunakan dengan `forEach()` untuk iterasi.

## Source

[WPU - Javascript dan DOM](https://www.youtube.com/playlist?list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3)
