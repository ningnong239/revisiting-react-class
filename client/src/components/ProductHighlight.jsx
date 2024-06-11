import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

// Endpoint: http://localhost:4000/products
// Http method: GET
// API ที่เอาไว้ดูข้อมูลสินค้าทั้งหมด

function ProductHighlight() {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    const result = await axios.get("http://localhost:4000/products");
    setProducts(result.data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
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
