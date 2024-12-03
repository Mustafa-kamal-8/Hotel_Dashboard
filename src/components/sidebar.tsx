

import { Calendar, ChevronDown, ChevronRight, List, Plus, Search, X } from 'lucide-react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/ScrollArea'
import { useSidebar } from '../contexts/SidebarContext'

export function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <aside 
      className={`fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } z-30 flex flex-col`}
    >
      <div className="h-14 flex items-center gap-2 px-4 border-b">
        <Button variant="outline" size="icon" className="h-8 w-8 bg-gray-400">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 bg-gray-400">
          <Calendar className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 bg-gray-400">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="default" size="icon" className="h-8 w-8 bg-green-700">
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 ml-auto lg:hidden" onClick={toggleSidebar}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">All Room Types</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="pl-4 space-y-0">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-sm h-16 border-b border-gray-200 rounded-none hover:bg-gray-50"
            >
              <ChevronRight className="h-4 w-4 mr-2" />
              Deluxe Queen
            </Button>
            {Array.from({ length: 12 }).map((_, i) => (
              <Button
                key={i}
                variant="ghost"
                className="w-full justify-start text-sm h-16 border-b border-gray-200 rounded-none hover:bg-gray-50"
              >
                <ChevronRight className="h-4 w-4 mr-2" />
                DQ({i + 1})
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-sky-400" />
            <span className="text-sm">Legend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="text-sm">Connected</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

