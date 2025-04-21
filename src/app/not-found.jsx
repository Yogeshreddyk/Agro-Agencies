import Link from "next/link";
import { Button } from "./components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="text-3xl font-bold mb-4 -mt-8">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild className="bg-green-700 hover:bg-green-800">
          <Link href="/">Return Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
      <div className="mt-12 text-gray-500 text-sm">
        <p>
          Need help finding something?{" "}
          <Link href="/contact" className="text-green-700 hover:underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
