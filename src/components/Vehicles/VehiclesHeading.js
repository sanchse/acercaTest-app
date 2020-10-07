// @flow

import React from 'react'

import type { Vehicles } from '../../types/vehicles'

type Props = {
  loading: boolean,
  vehicles: Vehicles,
  onNewVehicle: () => void,
  onReloadVehicles: () => void
}

export default function VehiclesHeading({
  loading,
  vehicles,
  onNewVehicle,
  onReloadVehicles
}: Props) {
  return (
    <div>
      <div className="vehicles-heading">
        <h2 className="vehicles-heading__title">Vehicles</h2>
        <button
          className="btn vehicles-heading__btn"
          onClick={onNewVehicle}
          disabled={loading}
        >
          New Vehicle
        </button>

        Num. Items: 
        <select>
          <option value="0">Todos</option>
          <option value="10">10</option>
          <option value="50">50</option>
        </select>
        
      </div>
    </div>
  )
}
