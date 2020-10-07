import { all } from 'redux-saga/effects'
import watchDeleteVehicle from './vehicles/delete'
import watchCreateVehicle from './vehicles/create'
import watchUpdateVehicle from './vehicles/update'
import { watchFetchVehiclesIfNeeded, watchFetchVehicles } from './vehicles/fetch'

export default function* rootSaga() {
  yield all([
    watchFetchVehiclesIfNeeded(),
    watchFetchVehicles(),
    watchDeleteVehicle(),
    watchCreateVehicle(),
    watchUpdateVehicle()
  ])
}
