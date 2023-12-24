import CurrencyModal from "@/components/CurrencyModal";
import DenominationModal from "@/components/DenominationModal";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { useEffect, useState } from "react";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }) {
  const [denominationsModal, setdenominationsModal] = useState(false)
  const [currencyModal, setCurrencyModal] = useState(false)

  useEffect(() => {
 let denominations = localStorage.getItem("denominations")
 if(!denominations){
  setdenominationsModal(true)
 }
  }, [])
  

  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <Component {...pageProps} />
      <DenominationModal open={denominationsModal} setopen={setdenominationsModal} setCurrencyModal={setCurrencyModal}/>
      <CurrencyModal open={currencyModal} setopen={setCurrencyModal}/>
      <Toaster  />

    </div>
  );
}
