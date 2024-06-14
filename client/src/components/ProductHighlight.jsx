import ProductCard from "./ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";

function ProductHighlight() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getProducts = async () => {
    //      http://localhost:4000/products?search=""
    //      http://localhost:4000/products?search="green"

    const productDataFromServer = await axios.get(
      `http://localhost:4000/products?search=${searchText}`
    );
    setProducts(productDataFromServer.data);
  };

  useEffect(() => {
    getProducts();
  }, [searchText]);

  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 border border-gray-400 rounded"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((item) => {
            return (
              <ProductCard
                key={item.id}
                imgSrc={item.image}
                productName={item.name}
                productPrice={item.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
