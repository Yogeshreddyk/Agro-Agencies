import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/Card";
import { getFeaturedProducts } from "@/lib/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Quality Agricultural Products for Your Farm
            </h1>
            <p className="text-lg md:text-xl max-w-md">
              Amma Agro Agencies provides premium seeds, pesticides, and
              fertilizers to help your crops thrive.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-100"
              >
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-green-400 bg-white hover:bg-green-800"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                alt="Agriculture field"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-transparent opacity-70" />
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
            <div>
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="text-gray-600 mt-2">
                Discover our best-selling agricultural products
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 text-green-700 hover:text-green-800 flex items-center"
            >
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full">
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
                      className={`text-xs px-2 py-1 rounded-full ${
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
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Product Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Seeds Category */}
            <Link href="/products?category=seeds" className="group">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="https://articles-1mg.gumlet.io/articles/wp-content/uploads/2016/12/seeds.jpg?compress=true&quality=80&w=640&dpr=1"
                  alt="Seeds"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-xl font-bold text-white">Seeds</h3>
                    <p className="text-white/80 text-sm mt-1">
                      High-quality seeds for better yields
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Pesticides Category */}
            <Link href="/products?category=pesticides" className="group">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="https://agriplexindia.com/cdn/shop/collections/Insecticides.png?v=1714216643&width=640"
                  alt="Pesticides"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-xl font-bold text-white">Pesticides</h3>
                    <p className="text-white/80 text-sm mt-1">
                      Protect your crops from pests and diseases
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Fertilizers Category */}
            <Link href="/products?category=fertilizers" className="group">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="https://humicfactory.com/assets/images/blogs/1736169650107webp.webp"
                  alt="Fertilizers"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-xl font-bold text-white">
                      Fertilizers
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      Nutrient-rich solutions for optimal growth
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Tools Category */}
            <Link href="/products?category=tools" className="group">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1603912699214-92627f304eb6?q=80&w=600&auto=format&fit=crop"
                  alt="Agricultural Tools"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-xl font-bold text-white">
                      Agricultural Tools
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      Essential tools for efficient farming
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Trusted by farmers across the country
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Customer"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Shiva Kumar</h4>
                  <p className="text-sm text-gray-600">Rice Farmer</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;The hybrid rice seeds I purchased from Amma Agro Agencies
                yielded an excellent harvest despite the drought conditions.
                Highly recommended!&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Customer"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Krishna</h4>
                  <p className="text-sm text-gray-600">Vegetable Grower</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;Their organic fertilizers have made a noticeable
                difference in my vegetable garden. My tomatoes and peppers have
                never looked better!&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Customer"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Ram Reddy</h4>
                  <p className="text-sm text-gray-600">Commercial Farmer</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;I&apos;ve been using their pesticides for years and they
                consistently help protect my crops. The staff is knowledgeable
                and always provides great advice.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your Agricultural Productivity?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our store or contact us today to explore our complete range of
            agricultural products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-gray-100"
            >
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-green-500 hover:bg-green-800"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
