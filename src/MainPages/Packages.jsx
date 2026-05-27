import React, { useState, useEffect } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import ProductGrid from "../Components/Packages/ProductGrid";

const Packages = () => {
  const axiosSecure = useAxiosSecure();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Using the new API endpoint
        const response = await axiosSecure.get("/demo-products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [axiosSecure]);

  // Filter products into two categories
  const hardCopyProducts = products.filter(
    (p) => p.format_type === "Printed Copy",
  );
  const softCopyProducts = products.filter(
    (p) => p.format_type === "Soft Copy",
  );

  return (
    <div className="min-h-screen bg-base-200/30 dark:bg-base-300/10 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-base-content mb-3 tracking-tight">
            Academic Packages
          </h1>
          <p className="text-base-content/60 text-lg">
            Premium curated resources for teachers and educational institutes.
          </p>
        </div>

        {loading ? (
          <div className="space-y-12">
            <div className="animate-pulse">
              <div className="h-8 w-64 bg-base-300 rounded mb-6"></div>
              <ProductGrid products={[]} loading={true} />
            </div>
            <div className="animate-pulse">
              <div className="h-8 w-64 bg-base-300 rounded mb-6"></div>
              <ProductGrid products={[]} loading={true} />
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Soft Copy Section */}
            {softCopyProducts.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xl md:text-3xl font-bold text-base-content">
                    Soft Copy (PDF & Word file)
                  </h2>
                  <div className="flex-1 h-px bg-base-300"></div>
                </div>
                <ProductGrid products={softCopyProducts} loading={false} />
              </section>
            )}

            {/* Hard Copy Section */}
            {hardCopyProducts.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xl md:text-3xl font-bold text-base-content">
                    Hard Copy or Printed Copy
                  </h2>
                  <div className="flex-1 h-px bg-base-300"></div>
                </div>
                <ProductGrid products={hardCopyProducts} loading={false} />
              </section>
            )}

            {products.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 bg-base-100 rounded-3xl border border-dashed border-base-300">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-base-content/80">
                  No Products Found
                </h3>
                <p className="text-base-content/50 mt-2 max-w-xs text-center">
                  We couldn't find any packages at the moment. Please check back
                  later.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Packages;
