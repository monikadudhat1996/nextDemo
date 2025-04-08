// app/product/[id]/ProductImage.jsx
'use client';
import { useRef } from 'react';

export default function ProductImage({ product }) {
  const serverUrl = `https://almrapi.smarttechnica.com/uploads/post_uploads/`;
  const mainImgRef = useRef(null);

  const handleThumbnailClick = (img) => {
    if (mainImgRef.current) {
      mainImgRef.current.src = `${serverUrl}${img}`;
    }
  };

  return (
    <div>
      <img
        ref={mainImgRef}
        src={`${serverUrl}${product?.postimg}`}
        alt={product?.title}
        className="w-full h-96 object-cover rounded-xl shadow"
      />
      <div className="flex mt-4 gap-4 flex-wrap">
        {[product?.postimg, ...(product?.images || [])]?.map((img, i) => (
          <img
            key={i}
            src={`${serverUrl}${img}`}
            alt={`Thumbnail ${i}`}
            onClick={() => handleThumbnailClick(img)}
            className="w-20 h-20 object-cover rounded-lg border cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
