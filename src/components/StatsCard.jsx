import React from 'react'

const StatsCard = ({ title, value, description, icon: Icon }) => {
  return (
    <div className="rounded-sm border border-gray-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-google-sans text-sm text-gray-400">
            {title}
          </p>
          <p className="mt-2 font-google-sans text-3xl font-bold text-primary">
            {value}
          </p>
          <p className="mt-1 font-google-sans text-xs text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Icon size={20} className="text-primary" />
        </div>
      </div>
    </div>
  )
}

export default StatsCard

