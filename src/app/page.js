'use client'
import Image from 'next/image'
import styles from './page.module.css'
import CarForm from '../../lib/CarForm'
import SearchForm from '../../lib/SearchForm'

export default function Home() {
  return (
    <div>
      <h1> Create a Car </h1>
      <CarForm></CarForm>
      <SearchForm/>
    </div>
  )
}
