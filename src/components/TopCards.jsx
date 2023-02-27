import React from "react";
import {motion} from 'framer-motion'
import { BsArrowUpShort,BsArrowDownShort } from "react-icons/bs";
import {GrLineChart} from 'react-icons/gr'
import {RiLineChartFill} from 'react-icons/ri'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FiUsers} from 'react-icons/fi'

const TopCards = () => {

  const cardData = [
    { id: 1, title: "Today Sales", price: 1200, percent: 30, icon: <GrLineChart size={15}/>, color: '#1ECB4F' },
    { id: 2, title: "Total Sales", price: 15200, percent: 14,icon: <RiLineChartFill size={15}/> ,color: '#FABC1E'},
    { id: 3, title: "Total Orders", price: 89000, percent: 30, icon: <HiOutlineShoppingCart size={15}/>, color: '#1ECB4F' },
    { id: 4, title: "Total Customers", price: 33000, percent: 30, icon: <FiUsers size={15}/>, color: '#1ECB4F' },
  ];

  return (
    <motion.div animate={{y: [-50, 5, 0]}}  className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-6 border-gray-100 border-[1px]">
      {cardData.map((data) => (
        <div className="bg-white px-6 py-3 rounded text-gray-700" key={data.id}>
          <div className="flex justify-between items-center ">
            <div className={`bg-[${data.color}] text-[#6B21A8] p-3 rounded-lg`}>
              {data.icon}
            </div>
            <h4>{data.title}</h4>
          </div>
          <div className="flex items-center justify-between mt-4 text-gray-800">
            <h1 className="text-[18px] font-semibold">$ {new Intl.NumberFormat().format(data.price)}</h1>
            <div className="flex items-center">
              <span className={`${data.percent < 15 ? 'text-red-600': 'text-green-600'}`}>+{data.percent}%</span>
              <span>
                {data.percent > 15 ? <BsArrowUpShort size={20} /> : <BsArrowDownShort size={20}/>}
              </span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default TopCards;
