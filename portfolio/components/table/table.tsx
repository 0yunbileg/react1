"use client"
import React from "react"
import { useEffect, useState } from "react"
import TableItem from "./tableItem"

interface Element {
  name: string
  symbol: string
  number: number
  atomic_mass: number
  appearance?: string
  xpos: number
  ypos: number
}

const Table = () => {
  const [elements, setElements] = useState<Element[]>([])

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
      <div className='grid grid-cols-18 gap-1'>
        {elements.map((element) => (
          <div
            key={element.number}
            style={{
              gridColumnStart: element.xpos,
              gridRowStart: element.ypos,
            }}
          >
            <TableItem key={element.number} element={element} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Table
