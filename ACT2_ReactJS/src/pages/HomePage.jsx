import React from "react";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="text-center w-full justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="text-3xl font-semibold">
            <p>Raka Satria Efendi<br/>
              51422369<br/>
              3IA21<br/>
            </p>
          </div>
          <div className="text-lg mt-2">
            <a href="/data_mhs"className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
              Go to Data Mahasiswa Page
            </a>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default HomePage;
