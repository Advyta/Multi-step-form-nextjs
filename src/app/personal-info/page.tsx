'use client'
import React from 'react'
import PageHeadings from '../components/page-headings';
import clsx from 'clsx';
import { useForm, SubmitHandler } from "react-hook-form";

type inputs = {
  name: string,
  email: string,
  phoneNo: number,
}

export default function PersonalInfo() {
  const { register, handleSubmit, formState: { errors } } = useForm<inputs>();
  const onSubmit: SubmitHandler<inputs> = data => console.log(data);

  return (
    <section>
      <PageHeadings heading={'Personal info'} discription={'Please provide your name, email address, and phone number.'} />

      <form className="flex flex-col mt-6" onSubmit={handleSubmit(onSubmit)}>
        <label className='flex flex-col'>
          <div className="flex justify-between">
            <span className="capitalize text-xs text-marine-blue lg:text-sm font-medium tracking-wide">
              Name
            </span>
            <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-strawberry-red">
              {/* error msg */}
            </span>
          </div>
          <input type="text"
            placeholder="e.g. Stephen King"
            className={clsx(
              'border',
              //  errors.name
              //    ? 'border-strawberry-red': 
              'border-light-gray focus:border-purplish-blue',
              'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
              'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
              'focus:outline-none'
            )}
            {...register("name", {
              required: "This field is required",
              maxLength: {
                value: 25,
                message: 'Name must be less than 25 characters'
              }
            })}
          />
        </label>

        <label className='flex flex-col mt-4'>
          <div className="flex justify-between">
            <span className="capitalize text-xs text-marine-blue lg:text-sm font-medium tracking-wide">
              Email address
            </span>
            <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-strawberry-red">
              {/* error msg */}
            </span>
          </div>
          <input type="text"
            placeholder="e.g. stephenking@lorem.com"
            className={clsx(
              'border',
              //  errors.name
              //    ? 'border-strawberry-red': 
              'border-light-gray focus:border-purplish-blue',
              'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
              'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
              'focus:outline-none'
            )}
            {...register("email", {
              required: 'This field is required',
              maxLength: {
                value: 80,
                message: 'Email must be less than 80 characters',
              },
            })}
          />
        </label>

        <label className='flex flex-col mt-4'>
          <div className="flex justify-between">
            <span className="capitalize text-xs text-marine-blue lg:text-sm font-medium tracking-wide">
              Phone number
            </span>
            <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-strawberry-red">
              {/* error msg */}
            </span>
          </div>
          <input type="text"
            placeholder="e.g. +1 234 567 890"
            className={clsx(
              'border',
              //  errors.name
              //    ? 'border-strawberry-red': 
              'border-light-gray focus:border-purplish-blue',
              'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
              'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
              'focus:outline-none'
            )}
            {...register("phoneNo", {
              required: "This field is required",
              minLength: {
                value: 20,
                message: 'Phone number must have 10 digits'
              }
            })}
          />
        </label>

        <button
          type="submit"
          className="bg-marine-blue hover:opacity-80 transition duration-300 text-magnolia ml-auto px-[17px] lg:px-8 py-[10px] lg:py-3 text-sm lg:text-base rounded-[4px] lg:rounded-lg"
        >
          Next Step
        </button>
      </form>
    </section>
  )
}