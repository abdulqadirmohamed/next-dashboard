import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "@/components/Header";

const posts = () => {
  const customersList = [
    {
      id: 1,
      name: "Abdulqadir",
      status: "Signed up",
      orderNo: 38760,
      retained: "1 min",
      amount: 12455,
      image:
        "https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg",
    },
    {
      id: 2,
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
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <motion.div animate={{ y: [-50, 0, 0] }} className="w-[95%] mx-auto">
        <div className="my-4">
           <Link href="/newpost" className="button">Add New</Link>
        </div>
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400 py-4">
          <thead className="text-[11px]  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr className="">
              <th scope="col" className="p-3">
                Customer
              </th>
              <th scope="col" className="p-3">
                Status
              </th>
              <th scope="col" className="p-3">
                Retained
              </th>
              <th scope="col" className="p-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            {customersList.map((customer) => (
              <tr
                key={customer.id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td className="px-3 py-3  text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-500 ">{customer.name}</span>
                </td>
                <td className="p-3">
                  <span className="bg-green-100  rounded-lg w-2 h-2"></span>
                  {customer.status}
                </td>
                <td className="p-3">{customer.retained} ago</td>
                <td className="p-3">${customer.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </>
  );
};

export default posts;