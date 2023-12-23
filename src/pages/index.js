import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Denominations from "@/components/Denominations";
import DenominationAdd from "@/components/DenominationAdd";
import Balance from "@/components/Balance";
export default function Home() {
  const [open, setopen] = useState(false);
  return (
    <main className={`flex flex-col h-screen bg-black w-full `}>
      <Balance />
      <div className="flex flex-col items-center justify-center h-full">
        <div className=" md:w-1/2 w-11/12 sm:w-11/12 lg:w-1/2">
          <DenominationAdd />
          <Denominations />
          <Denominations />
          <Denominations />
        </div>
      </div>

      <Dialog open={open} onOpenChange={setopen}>
        <DialogTrigger asChild>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[325px] w-11/12 bg-white border-none rounded">
          <DialogHeader>
            <DialogTitle>ADD CURRENCY</DialogTitle>
          </DialogHeader>
          <div className="grid py-4">
            <div className="flex flex-col gap-2 mt-2 mb-4">
              <Select>
                <SelectTrigger className="w-full border border-gray-400 z-50">
                  <SelectValue placeholder="Add denominations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <h4 htmlFor="name" className="font-semibold">
                Currency Name
              </h4>
              <Input
                id="c_name"
                value="Dollar"
                className="border border-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h4 htmlFor="name" className="font-semibold">
                Sign
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
            Save changes
          </Button>
        </DialogContent>
      </Dialog>
    </main>
  );
}
