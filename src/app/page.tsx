
import { Header } from '@/components/header/header'
import Image from 'next/image'
import { memo } from 'react'
import { Card } from '@/components/catalog/expertCard';
import { experts } from '@/components/catalog/expertsInfo';

export default function Home() {
  return (<>
  <Header title="Hello Sandbox" />
  <div className='px-16'>
    {experts.map((expert, index) => {
      return <Card key={index} {...expert} order={index % 2 !== 0}/>
      }
    )}
  </div>
  </>
  )
}
