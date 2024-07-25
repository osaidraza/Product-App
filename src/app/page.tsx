/*
React.FC
React.ReactNode
*/

import AllProdducts from "./all-products";
import Categories from "./categories";
import Myinfo from "./myinfo";



export default function Home() {
  return (
    <>
      <Myinfo />
      <Categories />
      <AllProdducts />
    </>
  )
}


