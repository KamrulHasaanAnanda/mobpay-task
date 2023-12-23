import React from 'react'
import { Button } from './ui/button'

function DenominationAdd() {
  return (
    <div className="title flex justify-between">
    <h5 className=" text-base font-normal leading-normal text-white">
      Currency Denominations
    </h5>
    <Button
      style={{
        padding: 10,
        borderRadius:10,
      }}
      className="rounded-lg w-24 text-base border-none text-white bg-green-500 hover:opacity-75 hover:bg-green-600"
    >
      Add type
    </Button>
  </div>
  )
}

export default DenominationAdd