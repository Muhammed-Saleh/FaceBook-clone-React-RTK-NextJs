import React from "react";

import { ImUsers } from "react-icons/im";

const Sidebaritem = ({ Icon, value }) => {
  return (
    <div className="flex items-center space-x-2 py-3 pl-4 rounded-l-xl hover:bg-gray-200 cursor-pointer">
      <Icon className="h-8 w-8 text-blue-500" />
      <p className="hidden sm:inline-flex font-medium">{value}</p>
    </div>
  );
};

export default Sidebaritem;
