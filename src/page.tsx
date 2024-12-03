

import { Nav } from "./components/nav"
import { Sidebar } from "./components/sidebar"
import { Timeline } from "./components/timeline"
import { SidebarProvider, useSidebar } from "./contexts/SidebarContext"

function DashboardContent() {
  const { isSidebarOpen, closeSidebar } = useSidebar()

  return (
    <div className="flex h-screen">
  
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-20 lg:hidden" 
          onClick={closeSidebar}
        />
      )}
      
      <Sidebar />
      <div className={`flex-1 flex flex-col transition-all duration-200 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <Nav />
        <main className="flex-1 overflow-auto p-6">
          <Timeline />
        </main>
      </div>
    </div>
  )
}

export default function HotelDashboard() {
  return (
    <SidebarProvider>
      <DashboardContent />
    </SidebarProvider>
  )
}

