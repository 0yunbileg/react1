import React from "react"

interface Element {
  name: string
  symbol: string
  number: number
  atomic_mass: number
  appearance?: string
}

interface Props {
  element: Element
}

const TableItem: React.FC<Props> = ({ element }) => {
  return (
    <div
      key={element.number}
      className='p-2 bg-blue-100 rounded shadow text-center'
    >
      <p className='font-bold'>{element.symbol}</p>
      <p className='text-sm'>{element.name}</p>
      <p className='text-xs text-gray-600'>{element.number}</p>
    </div>
  )
}

export default TableItem
