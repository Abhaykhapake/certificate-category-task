import { FaTasks, FaWpforms, FaTable, FaFileAlt, FaLifeRing, FaChartPie, FaCubes, FaLock } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-64 bg-[#1E293B] text-white p-6 min-h-screen">
    <h1 className="text-2xl font-bold mb-6">TailAdmin</h1>
    <ul className="space-y-4">
      <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
        <FaTasks /> Task
      </li>
      <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
        <FaWpforms /> Forms
      </li>
      <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
        <FaTable /> Tables
      </li>
      <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
        <FaFileAlt /> Pages
      </li>
      <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
        <FaLifeRing /> Support
      </li>
      <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
        <FaChartPie /> Chart
      </li>
      <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
        <FaCubes /> UI Elements
      </li>
      <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
        <FaLock /> Authentication
      </li>
    </ul>
  </div>
);

export default Sidebar;

