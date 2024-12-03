"use client"

import { reservations, dates } from '../data/reservations'

import { Badge } from './ui/badge'

const statusColors = {
  confirmed: 'bg-emerald-400',
  inProgress: 'bg-sky-400',
  upcoming: 'bg-gray-600',
  warning: 'bg-red-400'
}

export function Timeline() {
  return (
    <>
    <div className='font-bold'>FEB 2023</div>
    <div className="-mx-6">
      <div className="min-w-[1200px] px-6">
    
        <div className="mt-6 grid grid-cols-[100px_repeat(15,1fr)] border-b border-gray-200">
  {dates.map((date, index) => (
    <div key={index} className="relative border-r border-gray-200 last:border-r-0">

      {date.count && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Badge
            variant={parseFloat(date.occupancy) > 100 ? "destructive" : "secondary"}
            className={`h-5 px-1.5 ${parseFloat(date.occupancy) <= 100 ? 'bg-blue-500' : ''} text-white`}
          >
            {date.count}
          </Badge>
        </div>
      )}

      <div className="flex flex-col items-center justify-center p-2 text-sm">
        <div className="font-medium">{date.day} {date.date}</div>
        <span
          className={`text-xs ${parseFloat(date.occupancy) > 100 ? 'text-red-500' : 'text-gray-500'}`}
        >
          {date.occupancy}
        </span>
      </div>

      <div className="font-medium text-sm flex flex-col items-center mt-2">
        <span className="text-gray-600">94</span>
        <span className="text-gray-600">$159.00</span>
      </div>
    </div>
  ))}
</div>



        <div className="divide-y divide-gray-200">
          {reservations.map((room) => (
            <div key={room.id} className="grid grid-cols-[100px_repeat(15,1fr)]">
              {dates.map((date, dateIndex) => (
                <div key={dateIndex} className="relative h-16 border-r border-gray-200 last:border-r-0">
                  {room.bookings
                    .filter(
                      booking =>
                        new Date(booking.startDate) <= new Date(`2023-02-${date.date}`) &&
                        new Date(booking.endDate) > new Date(`2023-02-${date.date}`)
                    )
                    .map((booking, bookingIndex) => {
                      const startOffset = Math.max(0, new Date(booking.startDate).getDate() - date.date);
                      const endOffset = Math.min(15, new Date(booking.endDate).getDate() - date.date);
                      const width = `${(endOffset - startOffset) * 100}%`;
                      const left = `${startOffset * 100 + 50}%`;

                      return (
                        <div key={bookingIndex} className="absolute top-6 h-8">
                          <div
                            className={`relative h-full ${statusColors[booking.status as keyof typeof statusColors]} text-white text-xs flex items-center overflow-hidden`}
                            style={{
                              left: left,
                              width: width,
                              clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
                              marginLeft: '-4px',
                            }}
                          >
                            <span className="px-2 truncate">{booking.name}</span>
                          </div>
                          {booking.hasEndPoint && (
                            <div
                              className="absolute w-2 h-2 bg-red-500 rounded-full z-10"
                              style={{
                                right: '-4px',
                                bottom: '-1px',
                              }}
                            />
                          )}
                        </div>
                      );
                    })}
                </div>
              ))}
            </div>
          ))}
        </div>


        <div className="grid grid-cols-[100px_repeat(15,1fr)] border-t border-gray-200">
          {dates.map((date, index) => (
            <div key={index} className="border-r border-gray-200 last:border-r-0">
              <div className="flex flex-col items-center justify-center p-0 text-sm font-bold text-black">
                <div className="text-xs text-gray-500">{date.day} {date.date}</div>
                <div className="font-medium text-xs">
                  {date.date === 17 ? '96.39%' :
                    date.date === 18 ? '127.27%' :
                      date.date === 19 ? '96.39%' : ''}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}



