import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  image: string;
}

function Lista() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h3>Productos</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul style={{listStyle: "none"}}>
        {products.map((prod) => (
          <li key={prod.id}>
            <h4>{prod.title}</h4>
            <img src={prod.image} alt={prod.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
