"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function adminOverview() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Assuming the file is at /public/data.json
        const parsedData = await response.json();
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data, "data>>>>>>>");

  if (!data) {
    // Data is still loading
    return <div>Loading...</div>;
  }

  const {
    dashboard: { stats, graphData, activityData },
    // users: { customer, seller, admin },
    ecommerceData: { products, orders, reviews },
  } = data;

  return (
    <main>
      <div className="bg-gray-100">
      <div className="container mx-auto p-8">
        <Head>
          <title>Dashboard</title>
        </Head>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#23a888] mb-4">Dashboard Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold mb-2 text-[#dc5777]">{key}</p>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#23a888] mb-4">Graph Data</h2>
          {/* Implement your graph component here using graphData.labels and graphData.values */}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#23a888] mb-4">Recent Activity</h2>
          <ul className="list-disc pl-6">
            {activityData.map(({ timestamp, activity, user }, index) => (
              <li key={index} className="mb-2">
                <p>
                  <span className="font-bold">{user}</span> {activity} on{" "}
                  {new Date(timestamp).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#23a888] mb-4">E-commerce Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#dc5777]">Products</h3>
              <ul>
                {products.map((product) => (
                  <li key={product.id} className="mb-2">
                    <span className="font-bold">{product.name}:</span>{" "}
                    {product.price} - Stock: {product.stock}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#dc5777]">Orders</h3>
              <ul>
                {orders.map((order) => (
                  <li key={order.orderNumber} className="mb-2">
                    Order {order.orderNumber}: {order.total} by{" "}
                    {order.customer} on{" "}
                    {new Date(order.date).toLocaleString()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
