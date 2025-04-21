import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getProductById,
  getProductsByCategory,
  products,
} from "@/lib/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found | Amma Agro Agencies",
    };
  }

  return {
    title: `${product.name} | Amma Agro Agencies`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  // Get related products (same category)
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/products"
          className="text-green-700 hover:text-green-800 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center mb-4">
            <span
              className={`text-sm px-2 py-1 rounded-full mr-3 ${
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
            <Link
              href={`/products?category=${product.category}`}
              className="text-sm text-gray-600 hover:text-green-700"
            >
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </Link>
          </div>

          <div className="text-2xl font-bold text-green-700 mb-6">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-gray-700 mb-8">{product.description}</p>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Key Benefits</h3>
            <ul className="space-y-2">
              {generateBenefits(product.category).map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <Button className="w-full bg-green-700 hover:bg-green-800 mb-3">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Request More Information</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium group-hover:text-green-700 transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-1">
                  {relatedProduct.description}
                </p>
                <p className="text-green-700 font-bold mt-2">
                  ${relatedProduct.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Helper function to generate benefits based on product category
function generateBenefits(category) {
  switch (category) {
    case "seeds":
      return [
        "High germination rate for maximum yield",
        "Disease-resistant varieties",
        "Drought-tolerant for challenging conditions",
        "Scientifically tested for performance",
      ];
    case "pesticides":
      return [
        "Effective against a wide range of pests",
        "Optimized for minimal environmental impact",
        "Long-lasting protection for your crops",
        "Safe when used as directed",
      ];
    case "fertilizers":
      return [
        "Balanced nutrient formula for optimal growth",
        "Improves soil health and structure",
        "Enhances crop quality and yield",
        "Slow-release for season-long nourishment",
      ];
    case "tools":
      return [
        "Durable construction for long-lasting use",
        "Designed for efficiency and ease of use",
        "Precision engineered for best results",
        "Essential for professional farming operations",
      ];
    default:
      return [
        "Premium quality guaranteed",
        "Extensively tested and proven effective",
        "Reliable performance in various conditions",
        "Trusted by farmers across the country",
      ];
  }
}
