import { useEffect, useState } from "react";

import Denominations from "@/components/Denominations";
import DenominationAdd from "@/components/DenominationAdd";
import Balance from "@/components/Balance";
export default function Home() {
  const [open, setopen] = useState(false);
  const [data, setdata] = useState();
  useEffect(() => {
    let currencyData = localStorage.getItem("currency");
    currencyData = JSON.parse(currencyData);
    setdata(currencyData);
  }, []);
  // console.log("data domi", data?.denominations?.length);

  return (
    <main className={`flex flex-col h-screen bg-black w-full `}>
      <Balance />
      <div className="flex flex-col items-center justify-center h-full">
        <div className=" md:w-1/2 w-11/12 sm:w-11/12 lg:w-1/2">
          <DenominationAdd />
          {data?.denominations.length > 0 &&
            data?.denominations.map((denomination,index) => (
              <Denominations key={index} value={denomination} sign={data?.currency_sign} />
            ))
            }
        </div>
      </div>
    </main>
  );
}
