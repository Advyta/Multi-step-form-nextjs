'use client'
import React, { useEffect, useState } from 'react'
import PageHeadings from '../components/page-headings'
import PlanComponents from './planComponents'
import Actions from '../components/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Defining types
type PlanKey = 'arcade' | 'advanced' | 'pro';
type Plan = {
  monthlyCost: number;
  yearlyCost: number;
}
const plans: Record<PlanKey, Plan> = {
  arcade: { monthlyCost: 9, yearlyCost: 90 },
  advanced: { monthlyCost: 12, yearlyCost: 120 },
  pro: { monthlyCost: 15, yearlyCost: 150 }
}

export default function Plans() {
  const route = useRouter()
  const [isChecked, setIsChecked] = useState(false);
  const [billingType, setBillingType] = useState<string>('Monthly');
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>('arcade');
  const [cost, setCost] = useState<number>(plans.arcade.monthlyCost);

  console.log(cost);

  useEffect(() => {
    const planCost = billingType === 'Monthly' ? plans[selectedPlan].monthlyCost : plans[selectedPlan].yearlyCost;
    setCost(planCost);
  }, [billingType, selectedPlan]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setBillingType(isChecked ? 'Monthly' : 'Yearly');
  }

  const nextPage = () => {
    route.push('/add-ons');
  }

  return (
    <section>
      <PageHeadings heading='Select your plan' discription='You have the option of monthly or yearly billing.' />

      <div className='flex flex-col mt-5 lg:mt-8'>
        <div className='flex flex-col lg:flex-row gap-x-4 gap-y-3'>
          <PlanComponents
            billingType={billingType}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            setCost={setCost}
            plans={plans} />
        </div>
        <div className={`flex justify-center items-center gap-6 bg-alabaster ${billingType === 'Yearly' ? 'lg:mt-3' : 'lg:mt-8'} mt-4 rounded-lg p-3 lg:p-4`}>
          <label>
            <span>Monthly</span>
          </label>
          <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
            <input
              type='checkbox'
              name='autoSaver'
              className='sr-only'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 bg-marine-blue`}>
              <span className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${isChecked ? 'translate-x-6' : ''}`}></span>
            </span>
          </label>
          <label><span>Yearly</span></label>
        </div>
      </div>

      <Actions>
        <Link href='/personal-info' className="text-cool-gray transition duration-300 hover:text-marine-blue font-medium lg:font-bold text-sm lg:text-base">
          Go Back
        </Link>
        <button
          className="bg-marine-blue hover:opacity-80 transition duration-300 text-magnolia ml-auto px-[17px] lg:px-8 py-[10px] lg:py-3 text-sm lg:text-base rounded-[4px] lg:rounded-lg"
          onClick={nextPage}>
          Next Step
        </button>
      </Actions>
    </section>
  )
}