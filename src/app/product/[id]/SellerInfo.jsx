// app/product/[id]/SellerInfo.jsx
'use client';
export default function SellerInfo({ seller }) {
  return (
    <div className="mt-8 p-5 bg-gray-100 rounded-xl">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        Seller Info - {seller?.name}
      </h3>
      <p className="text-sm text-gray-500">@{seller?.user_Name}</p>
    </div>
  );
}
