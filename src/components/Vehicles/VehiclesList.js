// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import type { Vehicles } from '../../types/vehicles'

type Props = {
  loading: boolean,
  vehicles: Vehicles,
  url: string,
  onEditVehicle: (id: string) => void,
  onDeleteVehicle: (id: string) => void
}

export default function VehiclesList(props: Props) {
  const { loading, vehicles, url, onEditVehicle, onDeleteVehicle } = props

  if (loading) return <p>Loading...</p>
  if (vehicles.length === 0) return <div>No vehicles.</div>

  return (
    <ul className="vehicles">
      {vehicles.map(vehicle => (
        <li className="vehicles__item" key={vehicle.id}>
          <label>Plate Number: </label>
          <Link className="vehicles__title" to={`${url}/${vehicle.Id}`}>
            {vehicle.NumberPlate}
          </Link>
          <div>
          <label>Model:   </label>
            {vehicle.Model}
          </div>
          <div>
            <label>Chassis Number: </label>
            {vehicle.ChassisNumber}
          </div>
          <div>
            <label>Order Number: </label>
            {vehicle.OrderNumber}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => onEditVehicle(vehicle.Id)}
            title="Edit"
            style={{ margin: "5px" }}
          >Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteVehicle(vehicle.Id)}
            title="Delete"
            style={{ margin: "5px" }}
          >
          Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
