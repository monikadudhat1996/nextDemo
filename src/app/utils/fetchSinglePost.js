// app/utils/fetchSinglePost.js

export async function fetchSinglePost(id) {
    try {
      const res = await fetch(
        `https://almrapi.smarttechnica.com/api/v1/get/single/posts?id=${id}`,
        { cache: "no-store" } // Optional: if fresh data is needed every time
      );
      const data = await res.json();
      return data?.post || data?.data?.post;
    } catch (error) {
      console.error("Failed to fetch post:", error);
      return null;
    }
  }
  