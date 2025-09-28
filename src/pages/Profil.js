import React from "react";

function Profil() {
  const user = { name: "Elvina Arum", email: "elvina@example.com" };

  return (
    <div className="p-5 pt-10 text-center">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Profil Pengguna</h2>
      <div className="bg-gray-100 p-4 rounded shadow-md inline-block">
        <p className="font-medium">Nama: {user.name}</p>
        <p className="text-gray-700">Email: {user.email}</p>
      </div>
    </div>
  );
}

export default Profil;