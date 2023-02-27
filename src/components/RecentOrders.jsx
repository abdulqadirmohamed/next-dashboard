import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'
function RecentOrders() {
  const customers = [
    {
      id:1,
      name: "Abdulqadir",
      status: "Signed up",
      orderNo: 38760,
      retained: "1 min",
      amount: 12455,
      image:
        "https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg",
    },
    {
      id:2,
      name: "Mohamed Abdi",
      status: "New Customer",
      orderNo: 48760,
      retained: "45 min",
      amount: 2455,
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
    }
  
  ];
  return (
    <motion.div className="p-6" animate={{y: [-50, 0, 0]}}>
      <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400 py-4">
        <thead className="text-[11px]  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr className="">
            <th scope="col" className="p-3">Customer</th>
            <th scope="col" className="p-3">Status</th>
            <th scope="col" className="p-3">Retained</th>
            <th scope="col" className="p-3">Amount</th>
          </tr>
        </thead>
        <tbody className="text-left">
            {customers.map((customer)=>(

          <tr key={customer.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 cursor-pointer">
          
            <td className="px-3 py-3  text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center ">
                <img src={customer.image} alt={customer.name} className="w-8 h-8 rounded-full" />
                <span className="text-gray-500 " href='/customers'>{customer.name}</span>
            </td>
            <td className="p-3">
                <span className="bg-green-100  rounded-lg w-2 h-2"></span>
                {customer.status}</td>
            <td className="p-3">{customer.retained} ago</td>
            <td className="p-3">${customer.amount}</td>
          </tr>
            ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export default RecentOrders;
