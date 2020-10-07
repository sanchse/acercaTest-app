import { takeLatest, put, call } from 'redux-saga/effects'
import { deleteVehicle } from '../../services/vehicles-service';
import navigateTo from '../../services/navigation'

function* removeVehicle(action) {
  yield put({ type: 'DELETE_VEHICLE_PENDING', id: action.id })

  try {
    const { count } = yield call(deleteVehicle, action.id)
    if (count !== 1) throw new Error('API delete request failed')
    yield put({ type: 'DELETE_VEHICLE_SUCCESS', id: action.id })
  } catch (error) {
    yield put({ type: 'DELETE_VEHICLE_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export default function* watchDeleteVehicle() {
  yield takeLatest('DELETE_VEHICLE', removeVehicle)
}
