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

function CurrencyModal({ open, setopen, setdenominationsModal }) {
  const { toast } = useToast();

  const [denominations, setdenominations] = useState();
  const [formData, setformData] = useState({
    denominations: null,
    currency_name: null,
    currency_sign: null,
  });

  const [errorMessage, seterrorMessage] = useState({
    denominations: null,
    currency_name: null,
    currency_sign:null,
  });

  useEffect(() => {
    let data = localStorage.getItem("denominations");
    data = JSON.parse(data);
    console.log("data", data);
    if (data?.length > 0) {
      setdenominations(data);
    } else {
      setopen(false);
      setdenominationsModal(true);
    }
  }, [open]);

  let handleSelectChange = (e) => {
    let name = e.target.name;
    let values = Array.from(e.target.selectedOptions, (option) => option.value);
    setformData({
      ...formData,
      [name]: values,
    });
  };

  let handleChange = (e) => {
    let name = e.target.name;
    let values = e.target.value;
    setformData({
      ...formData,
      [name]: values,
    });
  };
  let submit = ()=>{
    console.log('formData', formData)
    if (!formData?.currency_name) {
      seterrorMessage({
        ...errorMessage,
        currency_name: "Currency name is empty",
      });
    }
    if (!formData?.currency_sign) {
      seterrorMessage({
        ...errorMessage,
        currency_sign: "Currency sign can not be empty",
      });
    }  
    if (formData?.denominations?.length === 0 ) {
      seterrorMessage({
        ...errorMessage,
        denominations: "Denominations can not be empty or less than three",
      });
    } 
    else{
      seterrorMessage({
        currency_name:null,
        currency_sign:null,
        denominations:null
      })

      localStorage.setItem("currency",JSON.stringify(formData))
      toast({
        variant: "success",
        title: "Success ",
        description: "Currency successfully added",
        //
      });
      setopen(false)

    }

  }
  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogContent className="sm:max-w-[325px] w-11/12 bg-white border-none rounded">
        <DialogHeader>
          <DialogTitle>ADD CURRENCY</DialogTitle>
        </DialogHeader>
        <div className="grid py-4">
          <div className="flex flex-col gap-2 mt-2 mb-4">
            {/* <Select>
              <SelectTrigger className="w-full border border-gray-400 z-50">
                <SelectValue placeholder="Denominations" />
              </SelectTrigger>
              <SelectContent>
                {denominations?.length > 0 &&
                  denominations.map((denomination) => (
                    <SelectItem
                      value={denomination.value}
                      key={denomination.name}
                    >
                      {denomination.value}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select> */}
            <h4 htmlFor="name" className="font-semibold">
              Select any three denomination
            </h4>
            <select
              id="fruits"
              name="denominations"
              multiple
              onChange={handleSelectChange}
              value={formData.denominations}
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              {denominations?.length > 0 &&
                denominations.map((denomination) => (
                  <option value={denomination.value} key={denomination.name}>
                    {denomination.value}
                  </option>
                ))}
            </select>
            {errorMessage.denominations && (
              <p
                style={{
                  color: " #F44336",
                  fontWeight: 500,
                  fontSize: 13,
                }}
              >
                {errorMessage?.denominations}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h4 htmlFor="name" className="font-semibold">
              Currency Name
            </h4>
            <Input
              value={formData?.currency_name}
              name="currency_name"
              className="border border-gray-400"
              onChange={handleChange}
            />
             {errorMessage.currency_name && (
              <p
                style={{
                  color: " #F44336",
                  fontWeight: 500,
                  fontSize: 13,
                }}
              >
                {errorMessage?.currency_name}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <h4 htmlFor="name" className="font-semibold">
              Sign
            </h4>
            <Input
              name={"currency_sign"}
              value={formData?.currency_sign}
              className="border border-gray-400"
              onChange={handleChange}
            />
             {errorMessage.currency_sign && (
              <p
                style={{
                  color: " #F44336",
                  fontWeight: 500,
                  fontSize: 13,
                }}
              >
                {errorMessage?.currency_sign}
              </p>
            )}
          </div>
        </div>

        <Button
          className="w-full bg-lime-700 text-white hover:bg-black"
          varient
          onClick={() => {
            setopen(false);
            setdenominationsModal(true);
          }}
        >
          Add Denominations
        </Button>
        <Button
          type="submit"
          className="w-full bg-black text-white hover:bg-slate-600"
          varient
          onClick={submit}
        >
          Save changes
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default CurrencyModal;
