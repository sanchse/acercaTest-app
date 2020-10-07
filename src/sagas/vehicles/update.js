import { takeLatest, put, call } from 'redux-saga/effects'
import { updateVehicle } from '../../services/vehicles-service';
import navigateTo from '../../services/navigation'

function* modifyVehicle(action) {
  yield put({ type: 'UPDATE_VEHICLE_PENDING' })

  try {
    const updatedVehicle = yield call(updateVehicle, action.payload)
    yield put({ type: 'UPDATE_VEHICLE_SUCCESS', payload: updatedVehicle })
    navigateTo('/')
  } catch (error) {
    yield put({ type: 'UPDATE_VEHICLE_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export default function* watchUpdateVehicle() {
  yield takeLatest('UPDATE_VEHICLE', modifyVehicle)
}
