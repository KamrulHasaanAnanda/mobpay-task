import React from 'react'
import { Input } from './ui/input'

function Denominations() {
  return (
    <div className="h-16 p-3 mt-5 flex justify-between items-center self-stretch rounded-md border border-solid border-gray-800 bg-gray-900">
    <p className="text-base font-medium leading-6 text-white">$1</p>
    <div class="flex w-120 justify-center items-center gap-3 text-white">
      <h4
        style={{
          borderRadius: "50%",
          width: 15,
          height: 15,
          fontSize: 10,
        }}
        className="text-white border border-solid border-white h-15 w-15 flex justify-center items-center text-xs"
      >
        -
      </h4>
      <Input className="w-10 border-none" value={10} />
      <h4
        style={{
          borderRadius: "50%",
          width: 15,
          height: 15,
          fontSize: 10,
        }}
        className="text-white rounded-lg border border-solid border-white h-15 w-15 flex justify-center items-center text-xs"
      >
        +
      </h4>
    </div>
  </div>
  )
}

export default Denominations