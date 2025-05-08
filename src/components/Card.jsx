import { motion } from "framer-motion";

export default function DestinationCard({ data, theme }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`overflow-hidden rounded-xl shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="h-48 bg-gradient-to-r from-cyan-400 to-blue-500 relative">
        {/* Placeholder gambar - bisa ganti dengan API Unsplash */}
        <div className={`absolute inset-0 bg-[url('https://source.unsplash.com/random/400x300/?${data.name}')] bg-cover opacity-70`} />
      </div>
      
      <div className={`p-6 ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
        <h3 className="text-xl font-bold mb-2">{data.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-1 text-xs rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-blue-100 text-blue-800"}`}>
            {data.category}
          </span>
          <span>⭐ {data.rating || "4.5"}</span>
        </div>
        <p className="text-sm opacity-80 mb-4">{data.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold">IDR {data.price.toLocaleString()}</span>
          <button className="text-sm underline">Detail</button>
        </div>
      </div>
    </motion.div>
  );
}
