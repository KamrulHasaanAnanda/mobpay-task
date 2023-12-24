import React, { useState } from "react";
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
function DenominationModal({ open, setopen, setCurrencyModal }) {
  const { toast } = useToast();

  const [errorMessage, seterrorMessage] = useState({
    denominationName: null,
    denominationValue: null,
  });
  const [formData, setformData] = useState({
    denominationName: "",
    denominationValue: "",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  let addDenomination = () => {
    // console.log("formData", formData);
    let oldData = localStorage.getItem("denominations");
    if (!formData?.denominationName) {
      seterrorMessage({
        ...errorMessage,
        denominationName: "Denomination name is empty",
      });
    }
    if (formData?.denominationValue === 0 || !formData?.denominationValue) {
      seterrorMessage({
        ...errorMessage,
        denominationValue: "Denomination value can not be empty or less than 1",
      });
    } else {
      seterrorMessage({
        denominationName: null,
        denominationValue: null,
      });

      if (oldData) {
        oldData = JSON.parse(oldData);

        let denomination = {
          name: formData?.denominationName,
          value: formData?.denominationValue,
        };

        let newArray = [denomination, ...oldData];
        toast({
          variant: "success",
          title: "Success ",
          description: "Denomination successfully added",
          //
        });
        setformData({
          denominationName: "",
          denominationValue: "",
        });
        // console.log("denomination", denomination);

        localStorage.setItem("denominations", JSON.stringify(newArray));
        // setTimeout(() => {
        setopen(false);
        setCurrencyModal(true);
        // }, 1000);
      } else {
        let denomination = [
          {
            name: formData?.denominationName,
            value: formData?.denominationValue,
          },
        ];

        toast({
          variant: "success",
          title: "Success ",
          description: "Denomination successfully added",
          //
        });
        // console.log("denomination", denomination);

        localStorage.setItem("denominations", JSON.stringify(denomination));
        setformData({
          denominationName: "",
          denominationValue: "",
        });
        // setTimeout(() => {
        setopen(false);
        setCurrencyModal(true);
        // }, 1000);
      }
    }
  };
  // console.log("errorMessage", errorMessage);
  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogContent className="sm:max-w-[325px] w-11/12 bg-white border-none rounded">
        <DialogHeader>
          <DialogTitle>ADD DENOMINATION</DialogTitle>
        </DialogHeader>
        <div className="grid py-4">
          <div className="flex flex-col gap-2">
            <h4 htmlFor="name" className="font-semibold">
              Denomination Name
            </h4>
            <Input
              onChange={handleChange}
              name="denominationName"
              value={formData.denominationName}
              className="border border-gray-400"
            />
            {errorMessage.denominationName && (
              <p
                style={{
                  color: " #F44336",
                  fontWeight: 500,
                  fontSize: 13,
                }}
              >
                {errorMessage?.denominationName}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <h4 htmlFor="name" className="font-semibold">
              Value
            </h4>
            <Input
              type="number"
              onChange={handleChange}
              name="denominationValue"
              value={formData?.denominationValue}
              className="border border-gray-400"
            />
            {errorMessage.denominationValue && (
              <p
                style={{
                  color: " #F44336",
                  fontWeight: 500,
                  fontSize: 13,
                }}
              >
                {errorMessage?.denominationValue}
              </p>
            )}
          </div>
        </div>

        <Button
          onClick={addDenomination}
          type="submit"
          className="w-full bg-black text-white hover:bg-slate-600"
          varient
        >
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default DenominationModal;
