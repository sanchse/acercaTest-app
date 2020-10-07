import { takeLatest, put, call, select } from 'redux-saga/effects'
import {getVehicle, getVehicles, createVehicle, updateVehicle, deleteVehicle} from '../../services/vehicles-service';
import navigateTo from '../../services/navigation'
import { selectVehicles } from '../../selectors/vehicles'

function* fetchVehicles() {
  yield put({ type: 'FETCH_VEHICLES_PENDING' })
  try {
    const vehiclesFromApi = yield call(getVehicles, 0)
    yield put({ type: 'FETCH_VEHICLES_SUCCESS', payload: vehiclesFromApi })
  } catch (error) {
    yield put({ type: 'FETCH_VEHICLES_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export function* watchFetchVehicles() {
  yield takeLatest('FETCH_VEHICLES', fetchVehicles)
}

function* fetchVehiclesIfNeeded() {
  const { items: vehicles } = yield select(selectVehicles)
  if (vehicles.length === 0) {
    yield call(fetchVehicles)
  }
}

export function* watchFetchVehiclesIfNeeded() {
  yield takeLatest('FETCH_VEHICLES_IF_NEEDED', fetchVehiclesIfNeeded)
}
