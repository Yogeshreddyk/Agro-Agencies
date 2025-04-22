export const products = [
  {
    id: "seed-001",
    name: "Premium Corn Seeds",
    description: "High-yield corn seeds resistant to common diseases.",
    category: "seeds",
    price: 49.99,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIdjh8iCRXMU_i3t8uOOXeH6tcr3vLNkci3MU1xHqdjvFUBotBsJcMpFfmr2i1BsjdhDHzoldO3YvHg_F-X0BePNAcj4RNG_0uGVi5YsY",
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
      "https://agriplexindia.com/cdn/shop/collections/Insecticides.png?v=1714216643&width=640",
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
      "https://humicfactory.com/assets/images/blogs/1736169650107webp.webp",
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
