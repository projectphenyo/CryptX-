import React from 'react'

const Sidebar = () => {
  return (
       <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6">
        <span className="hidden lg:block text-foreground font-bold text-xl">
            Crypt<span className="text-blue-500">X</span>
          </span>
          <hr className="my-6 border-black" />
      {/* <h1 className="text-2xl font-bold mb-8">CryptX</h1> */}
      <nav>
        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer" active="overview" >Overview</li>
          <li className="hover:text-blue-400 cursor-pointer">Charts</li>
          <li className="hover:text-blue-400 cursor-pointer">Transactions</li>
          <li className="hover:text-blue-400 cursor-pointer">Wallet</li>
          <li className="hover:text-blue-400 cursor-pointer">Mail Box</li>

          <div className="pt-6 border-black mt-6 border-t border-sidebar-border space-y-1">
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>
          <li className="hover:text-blue-400 cursor-pointer">Logout</li>
            </div>
        </ul>
      </nav>

       {/* <nav className="flex-1 px-2 lg:px-3 py-6 space-y-1 overflow-y-auto scrollbar-thin">
        <div className="space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" isActive />
          <NavItem icon={<Wallet size={20} />} label="Wallet" />
          <NavItem icon={<ArrowLeftRight size={20} />} label="Exchange" />
          <NavItem icon={<PieChart size={20} />} label="Portfolio" />
          <NavItem icon={<TrendingUp size={20} />} label="Markets" />
        </div>

        <div className="pt-6 mt-6 border-t border-sidebar-border space-y-1">
          <NavItem icon={<Settings size={20} />} label="Settings" />
          <NavItem icon={<HelpCircle size={20} />} label="Help Center" />
        </div> */}
      {/* </nav> */}
    </aside>




  )
}

export default Sidebar;