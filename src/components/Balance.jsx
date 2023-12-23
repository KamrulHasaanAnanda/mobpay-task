import React from 'react'

function Balance() {
  return (
    <div
        className="flex flex-col justify-center items-center h-64 w-full gap-3"
        style={{
          background:
            "var(--gradients-from-green-200-to-green-500, linear-gradient(270deg, #BBF7D0 0%, #22C55E 100%))",
        }}
      >
        <h4 className="text-black text-6xl font-medium leading-10">54222</h4>
        <p className="text-black text-base font-normal leading-9 tracking-tigh">
          Current Balance
        </p>
      </div>
  )
}

export default Balance