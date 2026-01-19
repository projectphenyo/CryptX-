import React from 'react'

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6">
        <span className="hidden lg:block text-foreground font-bold text-xl">
            Crypt<span className="text-primary">X</span>
          </span>
      {/* <h1 className="text-2xl font-bold mb-8">CryptX</h1> */}
      <nav>
        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-400 cursor-pointer">Transactions</li>
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        </ul>
      </nav>
    </aside>




  )
}

export default Sidebar;