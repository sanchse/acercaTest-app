// @flow

import React, { Component } from 'react'
import Header from '../common/header';
import { connect } from 'react-redux'
import {
    FETCH_VEHICLES_IF_NEEDED,
    FETCH_VEHICLES,
    DELETE_VEHICLE
} from '../../actions/types'
import { selectVehicles } from '../../selectors/vehicles'
import navigateTo from '../../services/navigation'
import VehiclesHeading from './VehiclesHeading'
import VehiclesList from './VehiclesList'

import type { Dispatch, State } from '../../types'
import type { VehiclesState } from '../../types/vehicles'
import type { Connector } from 'react-redux'

type Props = {
    vehicles: VehiclesState,
    match: {
        url: string
    },
    fetchVehiclesIfNeeded(): void,
    deleteVehicle(id: number): void,
    fetchVehicles(): void
}

class VehiclesPage extends Component<Props> {
    componentDidMount() {
        console.log('se llama a: fechaVehiclesIfNeeded');
        this.props.fetchVehiclesIfNeeded()
    }

    handleDeleteVehicle = (id: string) => {
        if (window.confirm('Do you really want to delete this vehicle?')) {
            this.props.deleteVehicle(id)
        }
    }

    handleNewVehicle = () => {
        const { url } = this.props.match
        navigateTo(`${url}/new`)
    }

    handleEditVehicle = (id: vehicle) => {
        const { url } = this.props.match
        navigateTo(`${url}/${id}/edit`)
    }

    handleReloadVehicles = () => {
        this.props.fetchVehicles()
    }

    render() {
        const { items: vehicles, loading } = this.props.vehicles
        const { url } = this.props.match

        return (
            <div className="container-fluid">
                <Header />

                <VehiclesHeading
                    loading={loading}
                    vehicles={vehicles}
                    onNewVehicle={this.handleNewVehicle}
                    onReloadVehicles={this.handleReloadVehicles}
                />

                <VehiclesList
                    loading={loading}
                    vehicles={vehicles}
                    url={url}
                    onEditVehicle={this.handleEditVehicle}
                    onDeleteVehicle={this.handleDeleteVehicle}
                />
            </div>
        )
    }
}

function mapStateToProps(state: State) {
    return {
      vehicles: selectVehicles(state)
    }
  }
  
  function mapDispatchToProps(dispatch: Dispatch) {
    return {
      fetchVehiclesIfNeeded: () => dispatch({ type: FETCH_VEHICLES_IF_NEEDED }),
      deleteVehicle: (id: string) => dispatch({ type: DELETE_VEHICLE, id }),
      fetchVehicles: () => dispatch({ type: FETCH_VEHICLES })
    }
  }
  
  const connector: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
  )
  
  export default connector(VehiclesPage)
  