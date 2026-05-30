import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { IoSearchOutline, IoChevronDown, IoChevronUp } from "react-icons/io5";

const Prices = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosPublic.get("/demo-products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [axiosPublic]);

  useEffect(() => {
    if (id && products.length > 0) {
      const found = products.find((p) => p._id === id);
      if (found) {
        setSelectedProduct(found);
        setSearchTerm(found.title);
      }
    } else {
      setSelectedProduct(null);
      setSearchTerm("");
    }
  }, [id, products]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleProductSelect = (prodId) => {
    navigate(`/pricing/${prodId}`);
    setShowDropdown(false);
  };

  return (
    <div className="min-h-screen bg-base-200/30 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-base-100 border-b border-base-200 sticky top-0 z-30 shadow-xs">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:w-96" ref={dropdownRef}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="input input-bordered w-full pl-10 h-11"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                />
                <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-base-content/50" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {showDropdown ? <IoChevronUp /> : <IoChevronDown />}
                </div>
              </div>

              {showDropdown && (
                <div className="absolute z-40 w-full mt-2 bg-base-100 border border-base-200 rounded-xl shadow-2xl max-h-80 overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                      <div
                        key={p._id}
                        className={`px-4 py-3 hover:bg-primary/5 cursor-pointer text-sm border-b border-base-200 last:border-0 transition-colors ${id === p._id ? "bg-primary/10 font-semibold" : ""}`}
                        onClick={() => handleProductSelect(p._id)}
                      >
                        {p.title}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-center text-base-content/40 text-sm">
                      No products found matching "{searchTerm}"
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Pricing Details
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">
          <div className="max-w-5xl mx-auto">
            {/* Main Content: Price List Table */}
            {selectedProduct ? (
              <div className="bg-base-100 rounded-2xl border border-base-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-base-200 bg-base-200/20">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="badge badge-primary uppercase text-[10px] font-bold tracking-wider">
                      {selectedProduct.category}
                    </span>
                    <span className="badge badge-outline uppercase text-[10px] font-bold tracking-wider">
                      {selectedProduct.format_type}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-base-content">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-base-content/60 text-sm mt-1">
                    Full Package Price:{" "}
                    <span className="text-primary font-bold">
                      ৳{selectedProduct.priceData.fullPackagePrice}
                    </span>
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead className="bg-base-200/50">
                      <tr>
                        {selectedProduct.priceData.tableHeaders.map(
                          (header, idx) => (
                            <th
                              key={idx}
                              className="text-base-content/70 font-bold py-4"
                            >
                              {header}
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-base-200">
                      {selectedProduct.priceData.tableRows.map((row) => {
                        // Dynamically get keys excluding 'id'
                        const rowKeys = Object.keys(row).filter(
                          (k) => k !== "id",
                        );
                        return (
                          <tr
                            key={row.id}
                            className="hover:bg-base-200/30 transition-colors"
                          >
                            {rowKeys.map((key) => (
                              <td key={key} className="py-4 font-medium">
                                {row[key]}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-base-100 rounded-2xl border border-dashed border-base-300 p-20 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IoSearchOutline className="text-4xl text-base-content/20" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    No Product Selected
                  </h3>
                  <p className="text-base-content/50">
                    Select a product from the search filter to view its detailed
                    price list and information.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
