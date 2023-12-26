import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "./ui/use-toast";

function ChangeCurrencyModal({ open, setopen,setCurrencyModal }) {
  const { toast } = useToast();
  const [currencies, setCurrencies] = useState();
  const [selectedCurrencies, setSelectedCurrencies] = useState();

//   console.log("setCurrencyModal", setCurrencyModal);

  useEffect(() => {
    let currenciesNow = localStorage.getItem("currency");
    currenciesNow = JSON?.parse(currenciesNow);
    setCurrencies(currenciesNow);

    let selected_currency = localStorage.getItem("selected_currency");
    selected_currency = JSON?.parse(selected_currency);
    setSelectedCurrencies(selected_currency);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogContent className="sm:max-w-[325px] w-11/12 bg-white border-none rounded">
        <DialogHeader>
          <DialogTitle>Change Currency</DialogTitle>
        </DialogHeader>
        <div className="grid py-4">
          <div>
            <h4 className="font-bold border-b mb-2">Current Currencies</h4>
            {currencies?.map((currency, index) => (
              <div
              onClick={()=>{
                let formData = {
                    ...currency,
                }
                // console.log('formData', formData)
                localStorage.removeItem('nowValue')
                localStorage.setItem("selected_currency", JSON.stringify(formData ));
                toast({
                    variant: "success",
                    title: "Success ",
                    description: "Currency successfully changed",
                    //
                  });
                  setopen(false)
                  window.location.reload();
              }}
                className="flex gap-2 mb-2 items-center p-2 bg-lime-600 rounded-sm cursor-pointer"
                key={index}
                style={{
                  background: selectedCurrencies?.currency_name === currency?.currency_name ? "#8BC34A" : "black",
                }}
              >
                <h1 className="text-base font-normal text-white">
                  {currency?.currency_sign} {currency?.currency_name}
                </h1>

                <div className="flex space-x-1">
                  {currency?.denominations.map((denomination, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      {denomination}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          className="w-full bg-black text-white hover:bg-black"
          varient
          onClick={() => {
            setopen(false);
            setCurrencyModal(true);
          }}
        >
          Add currency
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default ChangeCurrencyModal;
