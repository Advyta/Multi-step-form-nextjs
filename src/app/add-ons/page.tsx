'use client'
import React, { useState } from 'react'
import PageHeadings from '../components/page-headings';
import checkmark from '../../../public/images/icon-checkmark.svg'
import Image from 'next/image';
import { useBilling } from '../components/BillingContext';
import Actions from '../components/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AddOns() {
  const route = useRouter()
  const { billingType, selectedAddOns, toggleAddOn } = useBilling();

  const addOns: {
    [key: string]: {
      id: number;
      name: string;
      description: string;
      monthlyCost: number;
      yearlyCost: number;
    }
  } = {
    online: {
      id: 1,
      name: 'Online service',
      description: 'Access to multiplayer games',
      monthlyCost: 1,
      yearlyCost: 10
    },
    storage: {
      id: 2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthlyCost: 2,
      yearlyCost: 20
    },
    profile: {
      id: 3,
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthlyCost: 2,
      yearlyCost: 20
    },
  }

  const nextPage = () => {
    route.push('/add-ons');
  }

  return (
    <section>
      <PageHeadings heading={'Pick add-ons'} discription={'Add-ons help enhance your gaming experience.'} />

      {Object.entries(addOns).map(([key, addOn]) => (

        <div key={key} className="flex flex-row cursor-pointer mt-4 lg:mt-5">
          <div className={`flex items-center border justify-between w-full rounded-lg py-3 lg:py-4 px-4 lg:px-6 
            ${selectedAddOns[addOn.id] ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue bg-transparent'}`}
            onClick={() => toggleAddOn(addOn.id)}>

            {/* checkbox */}
            <label className='flex cursor-pointer items-center'>
              {/* <input type="checkbox" className='' /> */}
              <div className={`w-5 h-5 border-2 border-gray-300 rounded ${selectedAddOns[addOn.id] ? 'bg-purplish-blue' : 'bg-transparent'}`}>
                <Image src={checkmark} alt="checkmark" className={`${selectedAddOns[addOn.id] ? 'block' : 'hidden'} w-4 h-4`} />
              </div>
              <div className="ms-6 flex flex-col">
                <p className='font-bold text-marine-blue text-sm lg:text-base'>{addOn.name}</p>
                <p className='text-cool-gray text-xs lg:text-sm font-medium'>{addOn.description}</p>
              </div>
            </label>
            <div className="flex flex-row">
              {billingType === 'Monthly' ? `$${addOn.monthlyCost}/mo` : `$${addOn.yearlyCost}/yr`}
            </div>
          </div>
        </div>
      ))}

      <Actions>
        <Link href='/plans' className="text-cool-gray transition duration-300 hover:text-marine-blue font-medium lg:font-bold text-sm lg:text-base">
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
