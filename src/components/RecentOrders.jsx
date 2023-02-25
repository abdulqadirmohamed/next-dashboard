import React from "react";
import Image from "next/image";

function RecentOrders() {
  const customers = [
    {
      name: "Abdulqadir",
      status: "Signed up",
      orderNo: 38760,
      retained: "1 min",
      amount: 12455,
      image:
        "https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg",
    },
    {
      name: "Mohamed Abdi",
      status: "New Customer",
      orderNo: 48760,
      retained: "45 min",
      amount: 2455,
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
    },
  
  
  ];
  return (
    <div className="p-6">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 py-4">
        <thead className="text-[11px] text-left text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th scope="col" class="px-6 py-3">Customer</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Retained</th>
            <th scope="col" class="px-6 py-3">Amount</th>
          </tr>
        </thead>
        <tbody className="text-left">
            {customers.map((customer)=>(

          <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td className="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center">
                <img src={customer.image} alt={customer.name} className="w-8 h-8 rounded-full" />
                <span>{customer.name}</span>
            </td>
            <td>
                <span className="bg-green-100 w-2 h-2"></span>
                {customer.status}</td>
            <td>{customer.retained} ago</td>
            <td>${customer.amount}</td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;
