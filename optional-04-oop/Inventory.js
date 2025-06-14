/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!item.id) {
      throw new Error('Item harus memiliki id');
    }

    this.items.push(item);
    return `Item ${item.id} berhasil ditambahkan`;
  }

  removeItem(id) {
    const initialLength = this.items.length;
    this.items = this.items.filter((item) => item.id !== id);

    if (this.items.length === initialLength) {
      return `Item dengan id ${id} tidak ditemukan`;
    }
    return `Item ${id} berhasil dihapus`;
  }

  listItems() {
    if (this.items.length === 0) {
      return 'Tidak ada item dalam inventaris';
    }

    return this.items.map((item) => item.displayDetails()).join('\n');
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
