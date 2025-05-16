import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";

export const metadata = {
  title: "Contact Us | Amma Agro Agencies",
  description:
    "Get in touch with Amma Agro Agencies for quality agricultural products and expert advice.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help with all your agricultural needs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                <p className="text-gray-600">
                  Ward 1, Rupanagudi road, Shankarabanda, Ballari District,
                  <br />
                  Karnataka - 583102
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Call Us</h3>
                <p className="text-gray-600">Phone: +91 9206662292</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email Us</h3>
                <p className="text-gray-600">E-mail: reddykyogesh@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-3">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between max-w-xs">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-600 mb-4">
              Our team of agricultural experts is ready to help you with product
              recommendations, usage advice, and technical support.
            </p>
            <Button asChild className="bg-green-700 hover:bg-green-800">
              <Link href="tel:+11234567890">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Link>
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <Input id="firstName" placeholder="John" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@gmail.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input id="phone" type="tel" placeholder="+91 9000090000" />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="Product Inquiry" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="I'm interested in learning more about your seed products..."
                rows={6}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800"
            >
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-6">
            By submitting this form, you agree to our{" "}
            <Link href="#" className="text-green-700 hover:underline">
              privacy policy
            </Link>
            . We'll get back to you within 24-48 business hours.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Location</h2>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.136593445586!2d76.99656351185955!3d15.095798685390804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb717ac73d50bf3%3A0x71a2301a8c70e6aa!2sAMMA%20AGRO%20AGENCIES!5e0!3m2!1sen!2sin!4v1747372241973!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold mb-2">Do you offer delivery services?</h3>
            <p className="text-gray-600">
              Yes, we provide delivery services for bulk orders within a 50-mile
              radius of our store. For details on delivery charges and minimums,
              please contact our sales team.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600">
              We accept cash, major credit cards, bank transfers, and checks
              from established customers. For large orders, we also offer
              financing options.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold mb-2">
              Can I get technical support for product usage?
            </h3>
            <p className="text-gray-600">
              Absolutely! Our team of agricultural experts is available to
              provide guidance on product selection, usage, and troubleshooting
              for optimal results.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold mb-2">Do you offer bulk discounts?</h3>
            <p className="text-gray-600">
              Yes, we offer tiered pricing based on order volume. Contact our
              sales department for a customized quote based on your specific
              requirements.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Enhance Your Agricultural Success?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          From premium seeds to effective pesticides and nutrient-rich
          fertilizers, we have everything you need to maximize your crop yield.
        </p>
        <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
          <Link href="/products">Browse Our Products</Link>
        </Button>
      </div>
    </div>
  );
}
