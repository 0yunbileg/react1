"use client"
import React from "react"

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

interface Props {
  selectedElement: Element | null
  onClose: () => void
}

const Details: React.FC<Props> = ({ selectedElement, onClose }) => {
  return (
    <div className='hidden lg:flex flex-col w-96 p-6 bg-white/10 backdrop-blur-sm text-white shadow-xl rounded-2xl m-4 mt-5'>
      <button
        className='self-end mb-4 text-white hover:text-purple-300'
        onClick={onClose}
      >
        Close
      </button>
      {selectedElement && (
        <>
          <h2 className='text-2xl font-bold mb-2'>{selectedElement.name}</h2>
          <p>
            <strong>Symbol:</strong> {selectedElement.symbol}
          </p>
          <p>
            <strong>Atomic Number:</strong> {selectedElement.number}
          </p>
          <p>
            <strong>Atomic Mass:</strong> {selectedElement.atomic_mass}
          </p>
          <p>
            <strong>Category:</strong> {selectedElement.category}
          </p>
          <p>
            <strong>Electron Configuration:</strong>{" "}
            {selectedElement.electron_configuration}
          </p>
          <p className='mt-2'>{selectedElement.summary}</p>
        </>
      )}
    </div>
  )
}

export default Details
