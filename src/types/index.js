// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { VehiclesState, VehiclesAction } from './vehicles'

export type ReduxInitAction = { type: '@@INIT' }
export type Action = ReduxInitAction | VehiclesAction

export type State = {
  entities: {
    vehicles: VehiclesState
  }
}

export type Store = ReduxStore<State, Action>
export type Dispatch = ReduxDispatch<Action>