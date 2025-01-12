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
      if (response.data.data.length > 0) {
        setMahasiswaData(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.error("Error: " + error);
    }
  };

  const deleteMhs = async(mhsId) => {
    try{
      await axios.delete("http://localhost/PWEB/lab-pweb/ACT1_PHP/delete.php/" + mhsId)
      setMsg("Data Berhasil Dihapus");
      window.location.href = '/data_mhs'
    }catch(error){
      console.log("Error :" + error);
    }

  };

  return (
    <div className="p-6 flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3">
        <h1 className="text-center text-2xl font-bold mb-6">Data Mahasiswa</h1>
        <div className="flex justify-center mb-4">
          <button className="bg-green-500 text-white px-3 py-2 text-sm rounded hover:bg-green-600">
            <a href="/tambah_data">Tambah Data</a>
          </button>
        </div>
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border border-gray-300">No</th>
              <th className="py-2 px-4 border border-gray-300">NPM</th>
              <th className="py-2 px-4 border border-gray-300">Nama</th>
              <th className="py-2 px-4 border border-gray-300">Kelas</th>
              <th className="py-2 px-4 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswaData.length > 0 ? (
              mahasiswaData.map((item, index) => (
                <tr key={item.id} className="text-center border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
                  <td className="py-2 px-4 border border-gray-300">{item.npm}</td>
                  <td className="py-2 px-4 border border-gray-300">{item.nama}</td>
                  <td className="py-2 px-4 border border-gray-300">{item.kelas}</td>
                  <td className="py-2 px-4 border border-gray-300">
                    <div className="flex justify-center space-x-2">
                      <a href={`/edit_data/${item.id}`}> 
                      <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600">
                        Edit
                      </button>
                      </a>
                      
                      <button
                        onClick={()=>{
                          if (
                          window.confirm(
                            "Apakah Anda Yakin ingin menghapus mahasiswa ini?"
                          )
                        ){
                          deleteMhs(item.id);
                        }
                        }}
                      className="bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 px-4 border border-gray-300 text-center">
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