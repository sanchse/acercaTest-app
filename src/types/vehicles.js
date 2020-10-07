// @flow

export type Vehicle = {
    +id: string,
    +orderNumber: string,
    +chassisNumber: string,
    +model: string,
    +numberPlate: string,
    +deliveryDate: Date
  }
  
  export type VehiclePayload = $Diff<Vehicle, { id: string }>
  
  export type Vehicles = Array<Vehicle>
  
  export type VehiclesState = {
    +items: Vehicles,
    +loading: boolean
  }
  
  export type VehiclesAction =
    | { type: 'FETCH_VEHICLES' }
    | { type: 'FETCH_VEHICLES_IF_NEEDED' }
    | { type: 'FETCH_VEHICLES_PENDING' }
    | { type: 'FETCH_VEHICLES_SUCCESS', payload: Vehicles }
    | { type: 'FETCH_VEHICLES_FAILURE' }
    | { type: 'DELETE_VEHICLE' }
    | { type: 'DELETE_VEHICLE_PENDING', id: number }
    | { type: 'DELETE_VEHICLE_SUCCESS', id: number }
    | { type: 'DELETE_VEHICLE_FAILURE' }
    | { type: 'CREATE_VEHICLE', payload: Vehicle }
    | { type: 'CREATE_VEHICLE_PENDING' }
    | { type: 'CREATE_VEHICLE_SUCCESS', payload: Vehicle }
    | { type: 'CREATE_VEHICLE_FAILURE' }
    | { type: 'UPDATE_VEHICLE', payload: Vehicle }
    | { type: 'UPDATE_VEHICLE_PENDING' }
    | { type: 'UPDATE_VEHICLE_SUCCESS', payload: Vehicle }
    | { type: 'UPDATE_VEHICLE_FAILURE' }
  