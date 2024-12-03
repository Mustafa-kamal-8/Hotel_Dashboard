"use client"

import { Bell, Calendar, ChevronDown, HelpCircle, Menu, Search, Settings, User } from 'lucide-react'
import {Input}  from './ui/Input'
import { Button } from './ui/button'
import { useSidebar } from '../contexts/SidebarContext'

export function Nav() {
  const { toggleSidebar } = useSidebar()

  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center border-b px-4 gap-4 bg-white">
      <div className="flex items-center gap-2 min-w-48">
        <Button variant="ghost" size="icon" className="" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        {/* <img src="/placeholder.svg?height=32&width=32" alt="Luna Hotel" className="h-8 w-8" /> */}
        <span className="font-semibold text-xl">Luna Hotel</span>
        <ChevronDown className="h-4 w-4" />
      </div>
      <div className="flex-1 flex items-center gap-4">
        <div className="relative flex-1 max-w-2xl">
          <Search className="ml-8 absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search reservations, guests, and more"
            className="pl-8 ml-8"
          />
        </div>
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-5 w-5 ml-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Calendar className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  )
}

