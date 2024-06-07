'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react'

type BillingType = 'Monthly' | 'Yearly'
type PlanKey = 'arcade' | 'advanced' | 'pro'
interface BillingContextProps {
  billingType: BillingType;
  setBillingType: (type: BillingType) => void;
  selectedAddOns: { [key: number]: boolean };
  toggleAddOn: (id: number) => void;
  selectedPlan: PlanKey;
  setSelectedPlan: (plan: PlanKey) => void;
}

const BillingContext = createContext<BillingContextProps | undefined>(undefined)

export const BillingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [billingType, setBillingType] = useState<BillingType>('Monthly')
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: number]: boolean }>({});
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>('arcade')

  const toggleAddOn = (id: number) => {
    setSelectedAddOns(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <BillingContext.Provider value={{ billingType, setBillingType, selectedAddOns, toggleAddOn, selectedPlan, setSelectedPlan }}>
      {children}
    </BillingContext.Provider>
  )
}


export const useBilling = () => {
  const context = useContext(BillingContext);
  if (!context) {
    throw new Error('useBilling must be used within a BillingProvider');
  }
  return context;
}

