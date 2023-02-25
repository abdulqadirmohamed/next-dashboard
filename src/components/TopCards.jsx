import React from "react";
import { BsArrowUpShort } from "react-icons/bs";

const TopCards = () => {
  const cardData = [
    { id: 1, title: "Today Sales", price: 1200, percent: 30 },
    { id: 2, title: "Total Sales", price: 15200, percent: 14 },
    { id: 3, title: "Total Orders", price: 89000, percent: 30 },
    { id: 4, title: "Total Customers", price: 33000, percent: 30 },
  ];
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10 border-gray-100 border-[1px]">
      {cardData.map((data) => (
        <div className="bg-white px-6 py-3 rounded text-gray-700">
          <div>
            <h4>{data.title}</h4>
          </div>
          <div className="flex items-center justify-between mt-4 text-gray-800">
            <h1 className="text-[18px] font-semibold">${data.price}</h1>
            <div className="flex items-center">
              <span className="text-green-600">+{data.percent}%</span>
              <span>
                <BsArrowUpShort size={20} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
