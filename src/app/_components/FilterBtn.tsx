import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function FilterBtn() {
  let searchParams = useSearchParams();
  const router = useRouter();
  let path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { value: "groceries", label: "Groceries" },
    { value: "beauty", label: "Make-Up" },
    { value: "all", label: "Products" },
    { value: "fragrances", label: "Fragrances" },
    { value: "furniture", label: "Furniture" },
  ];

  const handleFilter = (filtervalue: string) => {
    let params = new URLSearchParams(searchParams);
    params.set("category", filtervalue);
    router.push(`${path}?${params}`);
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-white p-5">
      {/* Mobile dropdown */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 text-left bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Select Category
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {isOpen ? "▲" : "▼"}
          </span>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
            {categories.map((category) => (
              <button
                key={category.value}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 font-mono"
                onClick={() => handleFilter(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop buttons */}
      <div className="hidden md:flex gap-8 justify-center">
        {categories.map((category) => (
          <button
            key={category.value}
            className="font-mono text-md cursor-pointer hover:text-gray-600"
            onClick={() => handleFilter(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
