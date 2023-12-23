import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className={`flex flex-col h-screen bg-black w-full `}>
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
      <div className="flex flex-col items-center justify-center h-full">
        <div className=" md:w-1/2 w-11/12 sm:w-11/12 lg:w-1/2">
          <div className="title flex justify-between">
            <h5 className="text-Content-Light-main text-base font-normal leading-normal text-white">
              Currency Denominations
            </h5>
            <Button style={{
              padding:5
            }} className="rounded-lg text-base border-none bg-green-500 hover:opacity-75 hover:bg-green-600">
              Add type
            </Button>
          </div>
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
          <div className="h-16 p-3 mt-5 flex justify-between items-center self-stretch rounded-lg border border-solid border-gray-800 bg-gray-900">
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
        </div>
      </div>
    </main>
  );
}
