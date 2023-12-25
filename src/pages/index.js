import { useEffect, useState } from "react";

import Denominations from "@/components/Denominations";
import DenominationAdd from "@/components/DenominationAdd";
import Balance from "@/components/Balance";
export default function Home({currencyModal,setCurrencyModal}) {
  // console.log('props', props)
  const [input, setInput] = useState(0);
  const [data, setdata] = useState();
  const [changeCurrency, setchangeCurrency] = useState(false);

  useEffect(() => {
    let currencyData = localStorage.getItem("selected_currency");
    currencyData = JSON.parse(currencyData);
    setdata(currencyData);
    const v = currencyData?.denominations.map(value => ({
      value: parseInt(value, 10), // Convert value to a number
      count: 0
    }));

    setInput(v)
  }, [currencyModal]);

  return (
    <main className={`flex flex-col h-screen bg-black w-full `}>
      <Balance input={input} />
      <div className="flex flex-col items-center justify-center h-full">
        <div className=" md:w-1/2 w-11/12 sm:w-11/12 lg:w-1/2">
          <DenominationAdd changeCurrency={changeCurrency} setchangeCurrency={setchangeCurrency} setCurrencyModal={setCurrencyModal} />
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
