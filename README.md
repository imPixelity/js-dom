# JavaScript DOM

## DOM Selection

### 1. `document.getElementById(id)`

- Mengambil **satu elemen** berdasarkan `id`.
- Hasil: `Element`
- Umumnya digunakan saat elemen memiliki `id` unik.

### 2. `document.getElementsByTagName(tag)`

- Mengambil **semua elemen** berdasarkan nama tag.
- Hasil: `HTMLCollection`
- Dapat digunakan dengan perulangan karena bisa berisi lebih dari satu elemen.

### 3. `document.getElementsByClassName(className)`

- Mengambil **semua elemen** berdasarkan nama class.
- Hasil: `HTMLCollection`
- Bisa diakses seperti array menggunakan indeks.

### 4. `document.querySelector(selector)`

- Mengambil **elemen pertama** yang cocok dengan CSS selector.
- Hasil: `Element`
- Fleksibel karena mendukung selektor kompleks (seperti `#id`, `.class`, `tag.class`, dll).

### 5. `document.querySelectorAll(selector)`

- Mengambil **semua elemen** yang cocok dengan CSS selector.
- Hasil: `NodeList`
- Bisa digunakan dengan `forEach()` untuk iterasi.

## DOM Manipulation

### 1. `element.innerHTML`

- Mengubah atau membaca konten HTML di dalam sebuah elemen.
- Bisa menambahkan tag HTML secara langsung sebagai string.
- Hati-hati terhadap potensi XSS (Cross Site Scripting) jika mengambil data dari user.

### 2. `element.style.<property>`

- Mengubah gaya CSS elemen langsung melalui JavaScript.
- Properti CSS ditulis dalam format camelCase (misal: `backgroundColor`, `fontSize`).
- Hanya memanipulasi inline style, tidak memengaruhi stylesheet eksternal.

### 3. `element.setAttribute(name, value)`

- Menambahkan atau mengubah atribut elemen HTML.
- Contoh umum: `href`, `src`, `alt`, `id`, dll.

### 4. `element.getAttribute(name)`

- Mengambil nilai dari atribut tertentu yang dimiliki elemen.
- Digunakan untuk membaca informasi atribut secara dinamis.

### 5. `element.removeAttribute(name)`

- Menghapus atribut tertentu dari elemen.

### 6. `element.classList`

Metode manipulasi class yang fleksibel dan aman:

- `.add(className)` → Menambahkan class.
- `.remove(className)` → Menghapus class.
- `.toggle(className)` → Menambah jika belum ada, hapus jika sudah ada.
- `.contains(className)` → Mengecek apakah class tertentu ada.
- `.replace(oldClass, newClass)` → Mengganti class lama dengan class baru.
- `.item(index)` → Mengambil class berdasarkan index posisi.

## Source

[WPU - Javascript dan DOM](https://www.youtube.com/playlist?list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3)
