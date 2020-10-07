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
        <button
          className="btn vehicles-heading__btn"
          onClick={onReloadVehicles}
          disabled={loading || vehicles.length === 0}
        >
          Reload Vehicles
        </button>
      </div>
    </div>
  )
}
