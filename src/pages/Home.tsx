import React, { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import { useAppDispatch } from "../app/hooks";
import { fetchFail, fetchStart, getSuccessProduct } from "../features/productsSlice";

export interface Products {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}

const Home = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch()

  const getData = async () => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
        
      );
      console.log(data.products);
      dispatch(getSuccessProduct(data.products))
    } catch (error) {
      dispatch(fetchFail())
    }
  };

  useEffect(()=>{
    getData()
  },[search])

  return (
    <div>
      <SearchComp />
    </div>
  );
};

export default Home;
