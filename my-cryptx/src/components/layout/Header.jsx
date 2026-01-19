import React from 'react'



const Header = () => {
  return (
<header className="h-16 bg-gray-900 text-white bg-card/50 backdrop-blur-sm border-b border-border flex items-center justify-between px-4 lg:px-6 sticky top-0 z-40 ml-64">
  {/* Left - Search */}
  <div className="flex items-center flex-1 max-w-md">
    <div className="relative w-full">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search coins, transactions..."
        className="w-full h-10 pl-10 pr-4 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
      />
    </div>
  </div>

  {/* Right Section */}
  <div className="flex items-center gap-3">
    {/* Notifications */}
    <button className="relative w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="text-muted-foreground"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
    </button>

    {/* Information Settings */}
    <button className="hidden sm:flex items-center justify-center h-10 w-10 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="text-muted-foreground"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
    />
  </svg>
</button>
   

    {/* Profile Block */}
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent transition-colors cursor-pointer">
     <div className="relative w-9 h-9 rounded-full overflow-hidden flex items-center justify-center">
    <img
      src="/assets/pen.png"  
      alt="Penguin"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <span className="relative text-white font-semibold text-sm">PP</span>
  </div>


     
      <div className="hidden lg:block flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">Project Phenyo</p>
        <p className="text-xs text-muted-foreground truncate">projectphenyo@gmail.com</p>
      </div>
      
    </div>
  </div>
</header>   
  )
}

export default Header