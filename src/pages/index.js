import { useEffect, useState } from "react";

import Denominations from "@/components/Denominations";
import DenominationAdd from "@/components/DenominationAdd";
import Balance from "@/components/Balance";
export default function Home() {
  const [input, setInput] = useState(0);
  const [data, setdata] = useState();
  useEffect(() => {
    let currencyData = localStorage.getItem("currency");
    currencyData = JSON.parse(currencyData);
    console.log('currencyData', currencyData)
    setdata(currencyData);
    const v = currencyData?.denominations.map(value => ({
      value: parseInt(value, 10), // Convert value to a number
      count: 0
    }));

    setInput(v)
  }, []);
  console.log("data domi", input);

  return (
    <main className={`flex flex-col h-screen bg-black w-full `}>
      <Balance />
      <div className="flex flex-col items-center justify-center h-full">
        <div className=" md:w-1/2 w-11/12 sm:w-11/12 lg:w-1/2">
          <DenominationAdd />
          {input?.length > 0 &&
            input.map((denomination,index) => (
              <Denominations input={input} setInput={setInput} key={index} count={denomination?.count} value={denomination?.value} sign={data?.currency_sign} />
            ))
            }
        </div>
      </div>
    </main>
  );
}
