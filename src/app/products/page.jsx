import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data/products";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

export const metadata = {
  title: "Products | Amma Agro Agencies",
  description:
    "Browse our high-quality seeds, pesticides, fertilizers and agricultural tools.",
};

// For static generation, we need to specify all possible categories
export function generateStaticParams() {
  const categories = ["seeds", "pesticides", "fertilizers", "tools"];
  return [
    { searchParams: {} },
    ...categories.map((category) => ({
      searchParams: { category },
    })),
  ];
}

export default async function ProductsPage({ searchParams }) {
  const category = searchParams?.category;

  const validCategory = category;

  // Filter products by category if provided
  const filteredProducts = validCategory
    ? products.filter((product) => product.category === validCategory)
    : products;

  const categoryTitle = validCategory
    ? `${validCategory.charAt(0).toUpperCase() + validCategory.slice(1)}`
    : "All Products";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">{categoryTitle}</h1>
        <p className="text-gray-600 max-w-3xl">
          Browse our selection of premium agricultural products designed to help
          you achieve optimal yields.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={!validCategory ? "default" : "outline"}
            className={!validCategory ? "bg-green-700 hover:bg-green-800" : ""}
            asChild
          >
            <Link href="/products">All Products</Link>
          </Button>
          <Button
            variant={validCategory === "seeds" ? "default" : "outline"}
            className={
              validCategory === "seeds" ? "bg-green-700 hover:bg-green-800" : ""
            }
            asChild
          >
            <Link href="/products?category=seeds">Seeds</Link>
          </Button>
          <Button
            variant={validCategory === "pesticides" ? "default" : "outline"}
            className={
              validCategory === "pesticides"
                ? "bg-green-700 hover:bg-green-800"
                : ""
            }
            asChild
          >
            <Link href="/products?category=pesticides">Pesticides</Link>
          </Button>
          <Button
            variant={validCategory === "fertilizers" ? "default" : "outline"}
            className={
              validCategory === "fertilizers"
                ? "bg-green-700 hover:bg-green-800"
                : ""
            }
            asChild
          >
            <Link href="/products?category=fertilizers">Fertilizers</Link>
          </Button>
          <Button
            variant={validCategory === "tools" ? "default" : "outline"}
            className={
              validCategory === "tools" ? "bg-green-700 hover:bg-green-800" : ""
            }
            asChild
          >
            <Link href="/products?category=tools">Agricultural Tools</Link>
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-gray-500 mb-6">
            Please try another category or check back later.
          </p>
          <Button asChild className="bg-green-700 hover:bg-green-800">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">
                    ₹{product.price.toFixed(2)}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ₹{
                      product.stockStatus === "in-stock"
                        ? "bg-green-100 text-green-800"
                        : product.stockStatus === "low-stock"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.stockStatus === "in-stock"
                      ? "In Stock"
                      : product.stockStatus === "low-stock"
                      ? "Low Stock"
                      : "Out of Stock"}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Can't find what you're looking for?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We stock a wide range of agricultural products. Contact us for special
          orders or inquiries.
        </p>
        <Button asChild className="bg-green-700 hover:bg-green-800">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
