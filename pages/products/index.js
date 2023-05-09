import useFetch from "../hooks/useFetch";
import ProductCard from "../components/productCard";
import {SimpleGrid} from "@chakra-ui/react";

export const index = () => {
  const {data, loading, error} = useFetch('https://dummyjson.com/products')
  if (loading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>No Data!</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const datas = data.products
  console.log(datas)
  return (
      <>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
      {datas.map((index) => (
        <ProductCard
            key={index.id}
            price={index.price}
            img={index.thumbnail}
            title={index.title}
            description={index.description}/>
            ))}
      </SimpleGrid>
      </>
    );
}

export default index;