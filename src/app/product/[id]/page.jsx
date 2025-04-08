// // app/product/[id]/page.jsx

// import ProductDetails from "./ProductDetails";
// import SeoHead from "@/app/components/SeoHead";
// import { fetchSinglePost } from "@/app/utils/fetchSinglePost";
// import { notFound } from "next/navigation";

// export default async function SingleProductPage({ params }) {
//   const product = await fetchSinglePost(params.id);
  
//   if (!product) {
//     notFound(); // Show custom 404
//   }

//   const title = product?.title || "Product Page";
//   console.log(title,"title");
  
//   const description =
//     product?.details?.slice(0, 150) ||
//     "Buy, sell or rent premium fashion on My Almari";
    
//   const image = product?.postimg
//     ? `https://almrapi.smarttechnica.com/uploads/post_uploads/${product.postimg}`
//     : "https://myalmari.in/default-og.jpg";

//   const url = `https://myalmari.in/product/${params.id}`;

//   return (
//     <>
//       <SeoHead
//         title={title}
//         description={description}
//         image={image}
//         url={url}
//       />
//       <div className="bg-gray-50 py-10">
//         <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
//           <ProductDetails product={product} />
//         </div>
//       </div>
//     </>
//   );
// }
// app/product/[id]/page.jsx

// app/product/[id]/page.jsx

import ProductDetails from "./ProductDetails";
import { fetchSinglePost } from "@/app/utils/fetchSinglePost";
import { notFound } from "next/navigation";

// ✅ This sets dynamic meta tags
export async function generateMetadata({ params }) {
  const product = await fetchSinglePost(params.id);

  if (!product) {
    return {
      title: "Product Not Found - My Almari",
      description: "The product you're looking for does not exist.",
    };
  }

  const title = product?.title || "Product Page";
  const description =
    product?.details?.slice(0, 150) || "Buy, sell or rent premium fashion on My Almari";

  const image = product?.postimg
    ? `https://almrapi.smarttechnica.com/uploads/post_uploads/${product.postimg}`
    : "https://myalmari.in/default-og.jpg";

  const url = `https://myalmari.in/product/${params.id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "My Almari",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

// ✅ Page rendering
export default async function SingleProductPage({ params }) {
  const product = await fetchSinglePost(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
        <ProductDetails product={product} />
      </div>
    </div>
  );
}

