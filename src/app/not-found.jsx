// app/not-found.jsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404 - Product Not Found</h1>
        <p className="mt-4 text-gray-600">
          The product you're looking for doesn't exist or has been removed.
        </p>
      </div>
    </div>
  );
}
