
import { Header } from '@/components/header/header'
import Image from 'next/image'
import { memo } from 'react'
import { Card } from '@/components/catalog/card';

export default function Home() {
  return (<>
  <Header />
  <div className='px-16'>
    <Card />
  </div>
  </>
  )
}
