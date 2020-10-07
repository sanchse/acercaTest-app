// @flow
import type { State } from '../types'
import type { VehiclesState, Vehicles, Vehicle } from '../types/vehicles'

export function selectVehicles(state: State): VehiclesState {
  console.log(state);
  return state.vehicles
}

export function selectCurrentVehicle(state: State, id: string): Vehicle | void {
  const items: Vehicles = state.vehicles.items
  return items.find(item => item.id === id)
}
