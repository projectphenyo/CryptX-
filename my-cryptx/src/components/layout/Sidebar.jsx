import React from 'react'
import { HomeIcon,ChartBarIcon,CreditCardIcon,WalletIcon,InboxIcon,Cog6ToothIcon,ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";


const Sidebar = () => {
  return (
       <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6">
        <span className="hidden lg:block text-foreground font-bold text-xl mb-6">
            Crypt<span className="text-blue-500">X</span>
          </span>

      <nav>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer text-blue-400 font-semibold" >
            <HomeIcon className="h-5 w-5" />
            <span>Overview</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
            <ChartBarIcon className="h-5 w-5" />
            <span>Charts</span>
            </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
            <CreditCardIcon className="h-5 w-5" />
            <span>Transactions</span></li>
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
            <WalletIcon className="h-5 w-5" />
            <span>Wallet</span></li>
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
            <InboxIcon className="h-5 w-5" />
            <span>Mail Box</span></li>

          <div className="pt-6 border-black mt-6 border-t border-sidebar-border space-y-1">
          <li className="hover:text-blue-400 cursor-pointer">
            <Cog6ToothIcon className="h-5 w-5 inline-block mr-2" />
            <span>Settings</span>
            </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <ArrowRightEndOnRectangleIcon className="h-5 w-5 inline-block mr-2" />
            <span>Logout</span></li>
            </div>
        </ul>
      </nav>
    </aside>




  )
}

export default Sidebar;