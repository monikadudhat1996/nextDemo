// app/product/[id]/ProductDetails.jsx
'use client';
import { IoMdEye, IoMdThumbsUp } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { MdStickyNote2 } from 'react-icons/md';
import ProductImage from './ProductImage';
import SellerInfo from './SellerInfo';
import StatsSection from './StatsSection';

export default function ProductDetails({ product }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">{product?.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductImage product={product} />

        <div className="space-y-6">
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">{product?.details}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mt-4">
            <p><b>Sell Price:</b> ₹{product?.sell_prices}</p>
            <p><b>Rent Price:</b> ₹{product?.rent_prices}</p>
            <p><b>Deposit:</b> ₹{product?.deposite}</p>
            <p><b>Category:</b> {product?.Categorys?.[0]?.categoryName}</p>
            <p><b>Sub-category:</b> {product?.subCategorys?.[0]?.subCategoryName}</p>
            <p><b>Location:</b> {product?.area}, {product?.city}, {product?.state}</p>
          </div>

          <StatsSection product={product} />
          <SellerInfo seller={product?.seller_id} />
        </div>
      </div>

      <div className="mt-10 text-sm text-gray-500 text-right">
        Posted on: {new Date(product?.createdAt).toLocaleString()}
      </div>
    </>
  );
}
