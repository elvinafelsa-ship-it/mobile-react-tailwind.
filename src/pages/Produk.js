import React from "react";

function Produk() {
  const products = [
    { id: 1, name: "Produk A", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Produk B", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Produk C", img: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="p-5 pt-10">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Daftar Produk</h2>
      <div className="grid gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-3 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-3">
              <img src={p.img} alt={p.name} className="w-16 h-16 rounded" />
              <span className="font-medium">{p.name}</span>
            </div>
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
              Pesan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produk;