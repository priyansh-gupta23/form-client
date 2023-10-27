/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from '@/utils/axios'

export default function index() {
  const [message, setMessage] = useState("Loading...");

  const submitHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const {data} = await axios.get("/");
      setMessage(data.message)
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <form onSubmit={submitHandler}>
        <button className="btn btn-sucess" type="submit">submit</button>
      </form>
      <h1>{message}</h1>
    </>
  );
}
