import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const isPremium = product.category === "premium";

  const metaLabel =
    product.format_type === "Soft Copy"
      ? product.class_range
        ? `Class: ${product.class_range}`
        : "General Resource"
      : product.subject
        ? product.subject
        : "General Subject";

  const metaKey =
    product.format_type === "Soft Copy" ? "Class range" : "Subject";

  return (
    <div className="w-70 bg-base-100 rounded-[20px] border border-base-200/60 overflow-hidden flex flex-col shadow-sm transition-all duration-300 mx-auto hover:scale-103 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-45 overflow-hidden bg-base-200">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40 pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          <span
            className={`text-[9px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full ${
              isPremium
                ? "bg-amber-600 text-white"
                : "bg-primary/15 text-primary"
            }`}
          >
            {product.category}
          </span>
          <span className="text-[9px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/60 text-white/90 border border-white/10">
            {product.format_type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4.5 pt-4 pb-4.5">
        {/* Title */}
        <h3 className="text-[15px] font-medium text-base-content text-center leading-snug mb-3 line-clamp-2">
          {product.title}
        </h3>

        <div className="w-full h-px bg-base-200 mb-3" />

        {/* Meta rows */}
        <div className="flex flex-col gap-1.5 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-base-content/50">{metaKey}</span>
            <span className="text-[12px] font-medium text-base-content">
              {metaLabel}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-base-content/50">
              Material type
            </span>
            <span className="text-[12px] font-medium text-base-content">
              {product.material_type === "model_question" ? "Model Q" : "Sheet"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-base-content/50">Version</span>
            <span className="text-[12px] font-medium text-base-content">
              {product.version}
            </span>
          </div>
        </div>

        <div className="w-full h-px bg-base-200 mb-3.5" />

        {/* Actions */}
        <div className="mt-auto flex items-center gap-2">
          <a
            href={product.demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] font-medium text-base-content/60 border border-base-300 rounded-[10px] px-3 py-1.75 hover:bg-base-200 transition-colors"
          >
            <FaExternalLinkAlt className="text-[11px]" />
            Demo
          </a>
          <button
            className={`flex-1 text-[12px] font-medium rounded-[10px] py-2 px-3 transition-colors ${
              isPremium
                ? "bg-amber-600 hover:bg-amber-700 text-white"
                : "btn btn-primary"
            }`}
          >
            View Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
