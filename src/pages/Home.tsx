import React, { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";
import { EventFunc, Products } from "../models/models";

//* model.ts Global
// export interface Products {
//   products: Product[];
//   total: number;
//   skip: number;
//   limit: number;
// }

const Home = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error, productsList } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data.products);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //  setSearch(e.target.value)

  // }

  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchComp handleChange={handleChange} />
      {loading ? (
        <div className="mt-32">
          <p className="text-center font-bold text-red-600">
            Products loading...!
          </p>
        </div>
      ) : error ? (
        <div className="mt-32">
          <p className="text-center font-bold text-red-600">
            Someting went loading...!
          </p>
        </div>
      ) : (
        <div>
          {productsList.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
