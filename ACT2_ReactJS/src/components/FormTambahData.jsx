import React, { useState } from "react";
import axios from "axios";

export default function FormTambahData() {
  const [npm, setNpm] = useState("");
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);

  const saveMahasiswa = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("npm", npm);
    formData.append("nama", nama);
    formData.append("kelas", kelas);

    try {
      await axios.post("http://localhost/PWEB/lab-pweb/ACT1_PHP/create.php", formData);
      window.location.href = "/data_mhs";
    } catch (error) {
      if (error.response) {
        window.location.href = "/tambah_data";
        alert("Data Gagal Ditambahkan");
      }
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="p-4 lg:w-1/2">
        <form onSubmit={saveMahasiswa} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* KOLOM NPM */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="npm">
              NPM
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="npm"
              type="text"
              placeholder="NPM"
              value={npm}
              onChange={(e) => setNpm(e.target.value)}
            />
          </div>
          { /* KOLOM NAMA */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
              Nama
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          {/* KOLOM KELAS */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="kelas">
              Kelas
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="kelas"
              type="text"
              placeholder="Kelas"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
            />
          </div>
          {/* TOMBOL SUBMIT */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Tambah Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}