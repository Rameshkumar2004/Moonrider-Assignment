import { useState } from "react";
import AddProfileModal from "./AddProfileModal";
import { FiBell, FiSearch, FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { GiTransform } from "react-icons/gi";
import { FaMoneyBill } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dummy chart data
  const activitiesData = [
    { name: "Week 1", Guest: 500, User: 240 },
    { name: "Week 2", Guest: 300, User: 400 },
    { name: "Week 3", Guest: 200, User: 300 },
    { name: "Week 4", Guest: 400, User: 350 },
  ];

  const productsData = [
    { name: "Basic Tees", value: 55 },
    { name: "Custom Short Pants", value: 31 },
    { name: "Super Hoodies", value: 14 },
  ];

  // Modern palette
  const COLORS = ["#6366F1", "#22C55E", "#F97316"];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-indigo-600 text-white flex flex-col p-6 transform items-center ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 z-20`}
      >
        <h1 className="text-2xl font-bold mb-10">Board.</h1>
        <nav className="flex-1 space-y-6">
          <a href="#" className="block hover:text-gray-200">
            Dashboard
          </a>
          <a href="#" className="block hover:text-gray-200">
            Transactions
          </a>
          <a href="#" className="block hover:text-gray-200">
            Schedules
          </a>
          <a href="#" className="block hover:text-gray-200">
            Users
          </a>
          <a href="#" className="block hover:text-gray-200">
            Settings
          </a>
        </nav>
        <div className="mt-auto text-sm space-y-1">
          <a href="#" className="block">
            Help
          </a>
          <a href="#" className="block">
            Contact Us
          </a>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto w-full">
        {/* Top bar */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <button
              className="md:hidden text-2xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FiMenu />
            </button>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none flex-row">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-64 px-3 py-2 border rounded-lg pl-9"
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <FiBell size={20} />
            <FaUserCircle size={28} />
          </div>
        </header>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 ">
            <FaMoneyBill size={25} className=" bg-green-500/80 rounded-full p-1"/>
            <p className="text-gray-500 text-sm">Total Revenues</p>
            <div className=" items-center justify-between flex">
              <h3 className="text-xl font-bold">$2,129,430</h3>
              <p className="text-green-600 text-xs">+2.5%</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 ">
            <GiTransform  size={25} className="bg-orange-500/80 p-1 rounded-full"/>
            <p className="text-gray-500 text-sm">Total Transactions</p>
            <div className=" items-center justify-between flex">
              <h3 className="text-xl font-bold">1,520</h3>
              <p className="text-green-600 text-xs">+1.7%</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 ">
            < AiOutlineLike size={25} className="bg-pink-500/80 p-1 rounded-full "/>
            <p className="text-gray-500 text-sm">Total Likes</p>
            <div className=" flex items-center justify-between">
              <h3 className="text-xl font-bold">9,721</h3>
            <p className="text-green-600 text-xs">+1.4%</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 ">
            <LuUsers size={25} className=" bg-slate-500/80 rounded-full p-1"/>
            <p className="text-gray-500 text-sm">Total Users</p>
            <div className=" flex items-center  justify-between">
              <h3 className="text-xl font-bold">9,721</h3>
            <p className="text-green-600 text-xs">+4.2%</p>
            </div>
          </div>
        </div>

        {/* Charts */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"> */}
        {/* Activities (Bar Chart) */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="text-md font-semibold mb-4">Activities</h3>
          <span className="text-slate-300 inline-block">May - June 2021</span>
          <ResponsiveContainer width="100%" height={350} >
            <BarChart data={activitiesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Guest" fill="#22C55E" />
              <Bar dataKey="User" fill="#F87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {/* Top Products (Ring Chart + List) */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2">
              <h3 className="text-md font-semibold mb-4">Top products</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={productsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60} // ✅ makes it a ring
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {productsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-6 md:mt-0 md:w-1/2 text-sm space-y-2">
              {productsData.map((p, idx) => (
                <li key={idx} className="items-center justify-between">
                  <div className="flex items-center">
                    <span
                      className="inline-block w-3 h-3 mr-2 rounded-full"
                      style={{ backgroundColor: COLORS[idx] }}
                    ></span>
                    <span className="font-semibold">{p.name}</span>
                  </div>
                  <span className="px-5">{p.value}%</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add Profile Card */}
              <div>
      {/* Add Profile Card */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-white p-6 rounded-lg shadow flex justify-center items-center cursor-pointer h-full"
      >
        + Add Profile
      </div>

      {/* Modal */}
      <AddProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
