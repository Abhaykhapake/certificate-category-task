import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="relative w-1/3">
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchBar;
