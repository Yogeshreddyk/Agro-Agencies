import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export const metadata = {
  title: "About Us | Amma Agro Agencies",
  description:
    "Learn about Amma Agro Agencies, our history, mission, and commitment to quality agricultural products.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About Amma Agro Agencies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in agriculture since 2005
        </p>
      </div>

      {/* Introduction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://thumbs.dreamstime.com/b/indian-farmer-holding-crop-plant-his-wheat-field-indian-farmer-holding-crop-plant-his-wheat-field-123557695.jpg"
            alt="Farmers in field"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Amma Agro Agencies was founded in 2018 with a simple mission: to
            provide farmers with high-quality agricultural products that improve
            yield, sustainability, and profitability.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a small shop serving local farmers has grown into a
            trusted name in the agricultural community, supporting farmers with
            premium seeds, effective pesticides, and nutrient-rich fertilizers.
          </p>
          <p className="text-gray-700">
            Today, we continue to build on our foundation of trust, quality, and
            customer service, adapting to the evolving needs of modern
            agriculture while maintaining our commitment to the farming
            community.
          </p>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Our Mission & Values</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Guided by our commitment to sustainable and productive farming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-700 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Excellence</h3>
            <p className="text-gray-700">
              We are committed to providing only the highest quality seeds,
              pesticides, and fertilizers that meet rigorous standards for
              performance and safety.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-700 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Farmer Partnership</h3>
            <p className="text-gray-700">
              We see ourselves as partners in our customers' success, offering
              expert advice and products tailored to their specific agricultural
              needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-700 text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
            <p className="text-gray-700">
              We promote environmentally responsible farming methods and offer
              products that minimize ecological impact while maximizing crop
              production.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experienced professionals dedicated to agricultural excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=250&auto=format&fit=crop"
                alt="CEO"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="text-xl font-bold">Hema Reddy</h3>
            <p className="text-gray-600">Founder</p>
            <p className="text-gray-700 mt-2">
              Agricultural farmer with over 20 years of experience in crop
              research and farming solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=250&auto=format&fit=crop"
                alt="Operations Director"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="text-xl font-bold">Pandu Ranga</h3>
            <p className="text-gray-600">Co-Founder</p>
            <p className="text-gray-700 mt-2">
              Agricultural farmer with over 20 years of experience in crop
              research and farming solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=250&auto=format&fit=crop"
                alt="Agricultural Expert"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="text-xl font-bold">Prashanth Reddy</h3>
            <p className="text-gray-600">Agricultural Expert</p>
            <p className="text-gray-700 mt-2">
              Agricultural farmer with over 8 years of experience in crop
              research and farming solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Community Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Community Impact</h2>
          <p className="text-gray-700 mb-4">
            At Amma Agro Agencies, we believe in giving back to the farming
            community that has supported us over the years. Our commitment
            extends beyond providing quality products.
          </p>
          <p className="text-gray-700 mb-4">
            Through our farmer education programs, we've helped over 5,000
            farmers adopt modern agricultural practices that increase yield
            while reducing environmental impact.
          </p>
          <p className="text-gray-700 mb-4">
            We regularly organize workshops, field demonstrations, and training
            sessions to share knowledge about new farming techniques, crop
            protection, and sustainable agriculture.
          </p>
          <div className="mt-6">
            <Button asChild className="bg-green-700 hover:bg-green-800">
              <Link href="/contact">
                Connect With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?q=80&w=2070&auto=format&fit=crop"
            alt="Farmers at training session"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Partner With Us for Agricultural Success
        </h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Experience the difference that quality products and expert support can
          make for your farm.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-green-700 hover:bg-gray-100"
          >
            <Link href="/products">Explore Our Products</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-green-800"
          >
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
