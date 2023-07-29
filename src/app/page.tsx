
import { Header } from '@/components/header/header'
import Image from 'next/image'
import { memo } from 'react'
import { experts } from '@/components/catalog/expertsInfo';
import About from '@/components/about/about';
import CardsList from '@/components/catalog/expertCard';

export default function Home() {
  return (<>
  <Header title="Hello Sandbox" />
  <About />
  <CardsList />
  </>
  )
}
