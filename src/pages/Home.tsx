import React, { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addFavorites,
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";
import { EventFunc, Product, Products } from "../models/models";
// import { VoidFunc } from "../models/models";
import Card from "../components/Card";

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
  const { loading, error, productsList,favorites } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      // console.log(data.products);
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

  const handleAdd = (product:Product) => {
    if(favorites.filter(item => item.id === product.id).length === 0){
      dispatch(addFavorites(product))
    }
  }

  // const handleAdd:VoidFunc = (product) => {
  //   if(favorites.filter(item => item.id === product.id).length === 0){
  //     dispatch(addFavorites(product))
  //   }
  // }

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
        <div className="flex justify-center items-center flex-wrap gap-5 p-5">
          {productsList.map((item) => (
            <Card key={item.id} text="Add to favorites" item={item} handleFunc={handleAdd} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
