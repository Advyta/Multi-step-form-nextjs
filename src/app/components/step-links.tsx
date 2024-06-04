'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  {name: 'Your Info', href: '/personal-info', pageNo: 1},
  {name: 'Select Plan', href: '/plans', pageNo: 2},
  {name: 'Add-Ons', href: '/add-ons', pageNo: 3},
  {name: 'Summary', href: '/summary', pageNo: 4},
];

export default function StepLinks() {
  const pathname = usePathname();

  return (
    <div className='flex flex-row lg:flex-col gap-4 lg:gap-6'>
      {links.map((link) => (
        <Link 
        key={link.pageNo}
        href={link.href}
        className={clsx(
          'w-[33px] h-[33px] rounded-full border transition-colors duration-300 bg-transparent border-white text-center align-middle pt-1',
          {'bg-light-blue text-marine-blue border-transparent': pathname === link.href, 'text-white': pathname !== link.href }
        )}
        >
          {link.pageNo}
        </Link>
      ))}
    </div>
  )
}
