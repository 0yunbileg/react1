"use client"
import React from "react"
import { useEffect, useState } from "react"
import TableItem from "./tableItem"

interface Element {
  name: string
  appearance?: string
  atomic_mass: number
  boil?: number
  category: string
  density?: number
  discovered_by?: string
  melt?: number
  molar_heat?: number
  named_by?: string
  number: number
  period: number
  group?: number
  phase: string
  source: string
  bohr_model_image?: string
  bohr_model_3d?: string
  spectral_img?: string
  summary: string
  symbol: string
  xpos: number
  ypos: number
  wxpos?: number
  wypos?: number
  shells: number[]
  electron_configuration: string
  electron_configuration_semantic: string
  electron_affinity?: number
  electronegativity_pauling?: number
  ionization_energies: number[]
  "cpk-hex"?: string
  image?: {
    title: string
    url: string
    attribution: string
  }
}

const Table = () => {
  const [elements, setElements] = useState<Element[]>([])
  const [property, setProperty] = useState<string>("category")

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json"
      )
      const data = await res.json()
      setElements(data.elements)
    }
    fetchData()
  }, [])

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Periodic Table</h1>
      <select
        value={property}
        onChange={(e) => setProperty(e.target.value)}
        className='mb-4 p-2 border rounded'
      >
        <option value='category'>Category</option>
        <option value='boil'>Boiling Point</option>
        <option value='melt'>Melting Point</option>
        <option value='density'>Density</option>
        <option value='atomic_mass'>Atomic Mass</option>
      </select>
      <div className='grid grid-cols-18 gap-2'>
        {elements.map((element) => (
          <div
            key={element.number}
            style={{
              gridColumnStart: element.xpos,
              gridRowStart: element.ypos,
            }}
          >
            <TableItem key={element.number} element={element} property={property}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Table
