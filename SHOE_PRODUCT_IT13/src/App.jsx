import React from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Snickers off White 2024",
      brand: "NIKE",
      price: 38.0,
      image: "/images/Remove_background_project.webp", // ✅ 1st image
    },
    {
      id: 2,
      name: "Snickers off White 2024",
      brand: "NIKE",
      price: 38.0,
      image: "/images/Remove_background_project_(2).webp", // ✅ 2nd image
    },
    {
      id: 3,
      name: "Snickers off White 2024",
      brand: "NIKE",
      price: 38.0,
      image: "/images/Remove_background_project_(3).webp", // ✅ 3rd image
    },
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      padding: "20px"
    }}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          brand={p.brand}
          price={p.price}
          image={p.image}
        />
      ))}
    </div>
  );
};

export default App;
