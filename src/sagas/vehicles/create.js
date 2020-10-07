import { takeLatest, put, call } from 'redux-saga/effects'
import { createVehicle } from '../../services/vehicles-service';
import navigateTo from '../../services/navigation'

function* newVehicle(action) {
  yield put({ type: 'CREATE_VEHICLE_PENDING' })

  try {
    const newVehicle = yield call(createVehicle, action.payload)
    yield put({ type: 'CREATE_VEHICLE_SUCCESS', payload: newVehicle })
    navigateTo('/')
  } catch (error) {
    yield put({ type: 'CREATE_VEHICLE_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export default function* watchCreateVehicle() {
  yield takeLatest('CREATE_VEHICLE', newVehicle)
}
