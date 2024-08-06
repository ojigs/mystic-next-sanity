import { FaUser } from "react-icons/fa";

export function TestimonialsLoading() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md animate-pulse">
        <div className="w-24 h-24 pt-2 overflow-hidden bg-gray-300 rounded-full mb-4 flex items-center justify-center">
          <FaUser className="w-24 h-24 text-gray-400" />
        </div>
        <div className="w-full space-y-2 mb-4">
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-4/5 mx-auto"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
}
