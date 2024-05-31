import ProductDetailsSection from "./feature/Section/ProductDetails";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* <h1 className="placeholder-primary">Max Life POC </h1> */}
      <ProductDetailsSection />
    </main>
  );
}
