
import { Header } from '@/components/header/header'
import Image from 'next/image'
import { memo } from 'react'
import { Tester } from '../components/tester/tester';
import { Card } from '@/components/catalog/card';

export default function Home() {
  return (<>
  <Header />
  <Card />
  <div className='pb-16'>bye</div>
  <div className="text-day-00 lg:text-[92px]">help</div>
  <Tester />
  </>
  )
}
