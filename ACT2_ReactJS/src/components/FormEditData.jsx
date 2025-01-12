//blok 1
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//blok 2
function FormEditData() {
  const [npm1, setNpm] = useState("");
  const [nama1, setNama] = useState("");
  const [kelas1, setKelas] = useState("");
  const {id} = useParams();

    useEffect(() => {
      const getData = async () => {
        try{
          const response = await axios.get(
            `http://localhost/PWEB/lab-pweb/ACT1_PHP/read_by_id.php/${id}`
          );

          setNpm(response.data.data.npm);
          setNama(response.data.data.nama);
          setKelas(response.data.data.kelas);
        } catch(error){
          console.error("Error: " + error); 
        }
      };
      getData();
    }, [id]);

//blok 3
    const updateMahasiswa = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost/PWEB/lab-pweb/ACT1_PHP/update.php/${id}`, {
          npm : npm1,
          nama : nama1,
          kelas : kelas1, 
        });

        window.location.href = '/data_mhs'
      } catch (error) {
        if(error.response){
          window.location.href = '/'
        }
      }
    };
//blok 4
  return (
    <div className="flex w-full justify-center items-center">
      <div className="p-4 lg:w-1/2">
        <form
          onSubmit={updateMahasiswa}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
              value={npm1 || ""}
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
              value={nama1 || ""}
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
              value={kelas1 || ""}
              onChange={(e) => setKelas(e.target.value)}
            />
          </div>
          {/* TOMBOL SUBMIT */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Edit Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEditData;