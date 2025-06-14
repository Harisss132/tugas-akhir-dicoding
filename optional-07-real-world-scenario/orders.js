// Fungsi untuk menghasilkan ID unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menyimpan data pesanan
let orders = [];

// Status yang valid untuk pesanan
const validStatuses = ['Menunggu', 'Diproses', 'Selesai'];

// Fungsi untuk menambahkan pesanan baru
function addOrder(customerName, items) {
  // Validasi input
  if (!customerName || typeof customerName !== 'string') {
    throw new Error('Nama pelanggan harus berupa string dan tidak boleh kosong');
  }

  if (!Array.isArray(items)) {
    throw new Error('Items harus berupa array');
  }

  // Hitung total harga
  const totalPrice = items.reduce((sum, item) => {
    if (!item.name || typeof item.name !== 'string' || typeof item.price !== 'number' || item.price <= 0) {
      throw new Error('Setiap item harus memiliki nama (string) dan harga (number positif)');
    }
    return sum + item.price;
  }, 0);

  // Buat pesanan baru
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items: [...items], // Salin array untuk menghindari referensi yang sama
    totalPrice,
    status: 'Menunggu',
  };

  // Tambahkan ke array orders
  orders.push(newOrder);
  return newOrder;
}

// Fungsi untuk mengupdate status pesanan
function updateOrderStatus(orderId, status) {
  // Validasi status
  if (!validStatuses.includes(status)) {
    throw new Error(`Status tidak valid. Harus salah satu dari: ${validStatuses.join(', ')}`);
  }

  // Cari pesanan
  const orderIndex = orders.findIndex((order) => order.id === orderId);
  if (orderIndex === -1) {
    throw new Error('Pesanan tidak ditemukan');
  }

  // Update status
  orders[orderIndex].status = status;
  return orders[orderIndex];
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang selesai
function calculateTotalRevenue() {
  return orders.filter((order) => order.status === 'Selesai').reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan
function deleteOrder(id) {
  const orderIndex = orders.findIndex((order) => order.id === id);
  if (orderIndex === -1) {
    throw new Error('Pesanan tidak ditemukan');
  }

  const [deletedOrder] = orders.splice(orderIndex, 1);
  return deletedOrder;
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
