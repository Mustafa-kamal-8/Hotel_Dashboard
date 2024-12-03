

import { Nav } from "./components/nav"
import { Sidebar } from "./components/sidebar"
import { Timeline } from "./components/timeline"
import { SidebarProvider, useSidebar } from "./contexts/SidebarContext"

function DashboardContent() {
  const { isSidebarOpen } = useSidebar()

  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className={`flex-1 overflow-x-auto overflow-y-auto bg-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
          <div className="p-6">
            <Timeline />
          </div>
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

