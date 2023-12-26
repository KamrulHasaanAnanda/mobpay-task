import React from "react";
import { Button } from "./ui/button";
import ChangeCurrencyModal from "./ChangeCurrencyModal";

function DenominationAdd({
  changeCurrency,
  setchangeCurrency,
  setCurrencyModal,
}) {
  return (
    <div className="title flex justify-between">
      <h5 className=" text-base font-normal leading-normal text-white">
        Denominations
      </h5>
      <Button
        style={{
          padding: 10,
          borderRadius: 10,
        }}
        onClick={() => setchangeCurrency(true)}
        className="rounded-lg text-base border-none text-white bg-green-500 hover:opacity-75 hover:bg-green-600"
      >
        Add/Change Currency
      </Button>
      <ChangeCurrencyModal
        open={changeCurrency}
        setopen={setchangeCurrency}
        setCurrencyModal={setCurrencyModal}
      />
    </div>
  );
}

export default DenominationAdd;
