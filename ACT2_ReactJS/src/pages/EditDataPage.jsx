import React from "react";
import Layout from "./Layout";
import FormEditData from "../components/FormEditData";

const EditDataPage = () => {
  return (
    <Layout>
      <div className="flex w-full justify-center items-center">
        <h1 className="text-3xl font-semibold mt-5">Edit Data Mahasiswa</h1>
      </div>
      <div className="flex mt-10 justify-center">
        <FormEditData />
      </div>
    </Layout>
  );
};

export default EditDataPage;