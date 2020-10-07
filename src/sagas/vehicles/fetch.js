import { takeLatest, put, call, select } from 'redux-saga/effects'
import {getVehicle, getVehicles, createVehicle, updateVehicle, deleteVehicle} from '../../services/vehicles-service';
import navigateTo from '../../services/navigation'
import { selectVehicles } from '../../selectors/vehicles'

function* fetchVehicles() {
  console.log('Entrando en fetchVehicles...');
  yield put({ type: 'FETCH_VEHICLES_PENDING' })
  console.log('enviado evento FECHA_VEHICLES');
  try {
    console.log('llamada al servicio');
    const vehiclesFromApi = yield call(getVehicles, 0)
    console.log('servicio llamado...');
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
  console.log('Capturado evento: fechaVEhiclesIfNeeded');
  const { items: vehicles } = yield select(selectVehicles)
  if (vehicles.length === 0) {
    console.log(' => No hay elementos -> se invoca fetchVehicles...');
    yield call(fetchVehicles)
  }
}

export function* watchFetchVehiclesIfNeeded() {
  yield takeLatest('FETCH_VEHICLES_IF_NEEDED', fetchVehiclesIfNeeded)
}
