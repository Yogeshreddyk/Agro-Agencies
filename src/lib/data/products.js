export const products = [
  {
    id: "seed-001",
    name: "Premium Corn Seeds",
    description: "High-yield corn seeds resistant to common diseases.",
    category: "seeds",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1584813470613-5b1c1cad3a69?q=80&w=600&auto=format&fit=crop",
    featured: true,
    stockStatus: "in-stock",
  },
  {
    id: "pest-001",
    name: "Multi-Purpose Insecticide",
    description: "Effective against a wide range of pests.",
    category: "pesticides",
    price: 75.5,
    image:
      "https://images.unsplash.com/photo-1585673542330-2aa0400ea9b6?q=80&w=600&auto=format&fit=crop",
    featured: true,
    stockStatus: "in-stock",
  },
  {
    id: "fert-001",
    name: "Complete NPK Fertilizer",
    description: "Balanced nutrition for all types of crops.",
    category: "fertilizers",
    price: 62.25,
    image:
      "https://images.unsplash.com/photo-1620663058348-8c7842a2deb4?q=80&w=600&auto=format&fit=crop",
    featured: true,
    stockStatus: "in-stock",
  },
  {
    id: "tool-001",
    name: "Soil pH Testing Kit",
    description: "Simple and accurate soil pH tester.",
    category: "tools",
    price: 19.95,
    image:
      "https://images.unsplash.com/photo-1603912699214-92627f304eb6?q=80&w=600&auto=format&fit=crop",
    featured: true,
    stockStatus: "in-stock",
  },
];

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};
