// src/components/Table.js
import React from 'react';
import '../styles.css';

const Table = () => {
  const data = [
    { no: 1, npm: "50421765", nama: "M. Fauzan Widakdo", kelas: "3IA20" },
    { no: 2, npm: "40239102", nama: "Raka", kelas: "3IA21" },
    { no: 3, npm: "402391232", nama: "Pendi", kelas: "3IA21" },
    { no: 4, npm: "40239102", nama: "Syam", kelas: "3IA3" },
    { no: 5, npm: "40239102", nama: "Alalaw", kelas: "3IA32" },
  ];

  return (
    <div className="p-6 flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3">
        <h1 className="text-center text-2xl font-bold mb-6">Data Mahasiswa</h1>
        <button className="bg-green-500 text-white px-3 py-2 text-sm rounded hover:bg-green-600 mb-4">
          Tambah Data
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
            {data.map((item, index) => (
              <tr key={index} className="text-center border-b border-gray-200 hover:bg-gray-50">
                <td className="py-2 px-4">{item.no}</td>
                <td className="py-2 px-4">{item.npm}</td>
                <td className="py-2 px-4">{item.nama}</td>
                <td className="py-2 px-4">{item.kelas}</td>
                <td className="py-2 px-4 flex justify-center space-x-2">
                  <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
