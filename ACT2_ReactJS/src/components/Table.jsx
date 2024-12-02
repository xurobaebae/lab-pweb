import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [mahasiswaData, setMahasiswaData] = useState([]);
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost/PWEB/lab-pweb/ACT1_PHP/read.php");
      console.log("Response: ", response); // Log respons dari server
      if (response.data.status === 'success' && response.data.data.length > 0) {
        setMahasiswaData(response.data.data);
      } else {
        setMsg(response.data.message || "Gagal mengambil data mahasiswa");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error: ", error);
      setMsg("Gagal mengambil data mahasiswa");
      setIsError(true);
    }
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3">
        <h1 className="text-center text-2xl font-bold mb-6">Data Mahasiswa</h1>
        {isError && (
          <div className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p>{msg}</p>
          </div>
        )}
        <button className="bg-green-500 text-white px-3 py-2 text-sm rounded hover:bg-green-600 mb-4">
          <a href="/tambah_data">Tambah Data</a>
        </button>
        <table className="table">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-300">No</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">NPM</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Nama</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Kelas</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswaData.length > 0 ? (
              mahasiswaData.map((item, index) => (
                <tr key={item.id} className="text-center border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td> {/* NOMOR */}
                  <td className="py-2 px-4">{item.npm}</td> {/* NPM */}
                  <td className="py-2 px-4">{item.nama}</td> {/* NAMA */}
                  <td className="py-2 px-4">{item.kelas}</td> {/* KELAS */}
                  <td className="py-2 px-4 flex justify-center space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border p-2 text-center">
                  Data Mahasiswa tidak tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
