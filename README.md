### JavaScript DOM

<details>
<summary style="font-weight:bold;font-size:18px;color:black;">DOM Selection</summary>

##### 1. `document.getElementById(id)`

- Mengambil **satu elemen** berdasarkan `id`.
- Hasil: `Element`
- Umumnya digunakan saat elemen memiliki `id` unik.

##### 2. `document.getElementsByTagName(tag)`

- Mengambil **semua elemen** berdasarkan nama tag.
- Hasil: `HTMLCollection`
- Dapat digunakan dengan perulangan karena bisa berisi lebih dari satu elemen.

##### 3. `document.getElementsByClassName(className)`

- Mengambil **semua elemen** berdasarkan nama class.
- Hasil: `HTMLCollection`
- Bisa diakses seperti array menggunakan indeks.

##### 4. `document.querySelector(selector)`

- Mengambil **elemen pertama** yang cocok dengan CSS selector.
- Hasil: `Element`
- Fleksibel karena mendukung selektor kompleks (seperti `#id`, `.class`, `tag.class`, dll).

##### 5. `document.querySelectorAll(selector)`

- Mengambil **semua elemen** yang cocok dengan CSS selector.
- Hasil: `NodeList`
- Bisa digunakan dengan `forEach()` untuk iterasi.

</details>

<details>
<summary style="font-weight:bold;font-size:18px;color:black;">DOM Manipulation</summary>

#### Element Manipulation

##### 1. `element.innerHTML`

- Mengubah atau membaca konten HTML di dalam sebuah elemen.
- Bisa menambahkan tag HTML secara langsung sebagai string.
- Hati-hati terhadap potensi XSS (Cross Site Scripting) jika mengambil data dari user.

##### 2. `element.style.<property>`

- Mengubah gaya CSS elemen langsung melalui JavaScript.
- Properti CSS ditulis dalam format camelCase (misal: `backgroundColor`, `fontSize`).
- Hanya memanipulasi inline style, tidak memengaruhi stylesheet eksternal.

##### 3. `element.setAttribute(name, value)`

- Menambahkan atau mengubah atribut elemen HTML.
- Contoh umum: `href`, `src`, `alt`, `id`, dll.

##### 4. `element.getAttribute(name)`

- Mengambil nilai dari atribut tertentu yang dimiliki elemen.
- Digunakan untuk membaca informasi atribut secara dinamis.

##### 5. `element.removeAttribute(name)`

- Menghapus atribut tertentu dari elemen.

##### 6. `element.classList`

Metode manipulasi class yang fleksibel dan aman:

- `.add(className)` → Menambahkan class.
- `.remove(className)` → Menghapus class.
- `.toggle(className)` → Menambah jika belum ada, hapus jika sudah ada.
- `.contains(className)` → Mengecek apakah class tertentu ada.
- `.replace(oldClass, newClass)` → Mengganti class lama dengan class baru.
- `.item(index)` → Mengambil class berdasarkan index posisi.

#### Node Manipulation

##### 1. `document.createElement(tagName)`

- Membuat elemen HTML baru dalam bentuk node (belum tampil di halaman sampai disisipkan).
- Digunakan untuk membuat elemen secara dinamis.

##### 2. `document.createTextNode(text)`

- Membuat node teks murni tanpa tag HTML.
- Biasanya digunakan untuk disisipkan ke dalam elemen menggunakan `.appendChild()`.

##### 3. `node.appendChild(child)`

- Menambahkan node anak ke dalam node induk.
- Jika node sudah ada di tempat lain, node tersebut akan dipindahkan.

##### 4. `parentNode.insertBefore(newNode, referenceNode)`

- Menyisipkan `newNode` sebelum `referenceNode` dalam node induk.
- Digunakan untuk menyisipkan node di posisi tertentu.

##### 5. `parentNode.removeChild(child)`

- Menghapus node anak dari node induknya.
- Perlu referensi ke node yang ingin dihapus, dan induknya.

##### 6. `parentNode.replaceChild(newNode, oldNode)`

- Mengganti node lama dengan node baru dalam node induk.
- `oldNode` akan diganti dengan `newNode`.

</details>

<details>
<summary style="font-weight:bold;font-size:18px;color:black;">DOM Events</summary>

##### 1. Event Handler: `element.on<events> = function`

- Cara sederhana dan langsung untuk menetapkan aksi saat event terjadi (misalnya klik).
- Hanya bisa menangani **satu event handler** per jenis event — penugasan baru akan menimpa yang lama.

##### 2. `addEventListener(event, callback)`

- Metode yang lebih fleksibel dan modern.
- Bisa menambahkan **beberapa listener** untuk event yang sama tanpa menimpa yang lain.
- Dapat digunakan untuk mendeteksi berbagai jenis event: `'click'`, `'mouseover'`, `'keydown'`, dll.

##### 3. Perbedaan Penting

| Metode              | Kelebihan                       | Kekurangan                    |
| ------------------- | ------------------------------- | ----------------------------- |
| `.on<events>`       | Simpel dan mudah digunakan      | Menimpa fungsi sebelumnya     |
| `.addEventListener` | Bisa banyak listener, fleksibel | Lebih verbose (lebih panjang) |

</details>

#### References

[WPU - JavaScript dan DOM](https://www.youtube.com/playlist?list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3)
