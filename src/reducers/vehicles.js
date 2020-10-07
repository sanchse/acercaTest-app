// @flow

import type { VehiclesState as State, VehiclesAction as Action } from '../types/vehicles'

function vehicles(
  state: State = { items: [], loading: false },
  action: Action
): State {
  switch (action.type) {
  case 'FETCH_VEHICLES_PENDING':
  case 'DELETE_VEHICLE_PENDING':
  case 'CREATE_VEHICLE_PENDING':
  case 'UPDATE_VEHICLE_PENDING':
    return {
      ...state,
      loading: true
    }
    case 'FETCH_VEHICLES_SUCCESS':
      console.log('payload: ', action.payload);
    return {
      items: action.payload.data.Items,
      loading: false
    }
  case 'FETCH_VEHICLES_FAILURE':
    return {
      items: [],
      loading: false
    }
  case 'DELETE_VEHICLE_SUCCESS': {
    const post_id = action.id
    return {
      items: state.items.filter(post => post.id !== post_id),
      loading: false
    }
  }
  case 'CREATE_VEHICLE_SUCCESS':
    return {
      items: [action.payload].concat(state.items),
      loading: false
    }
  case 'UPDATE_VEHICLE_SUCCESS': {
    const { id, ...rest } = action.payload

    return {
      items: state.items.map(post => {
        if (post.id === id) {
          return { ...post, ...rest }
        }
        return post
      }),
      loading: false
    }
  }
  case 'CREATE_VEHICLE_FAILURE':
  case 'DELETE_VEHICLE_FAILURE':
  case 'UPDATE_VEHICLE_FAILURE':
    return {
      ...state,
      loading: false
    }
  default:
    return state
  }
}

export default vehicles
