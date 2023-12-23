import React from "react";
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
function DenominationModal({open,setopen}) {
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
              id="c_name"
              value="Dollar"
              className="border border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <h4 htmlFor="name" className="font-semibold">
              Value
            </h4>
            <Input
              id="c_name"
              value="Dollar"
              className="border border-gray-400"
            />
          </div>
        </div>

        <Button
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
