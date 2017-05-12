import React from 'react';
import { cleanVehiclesData } from './cleanVehiclesData';
import {resolveAfter2Seconds, mockFetchCalls } from '../../stubs/test-helper'
import VehicleStub from '../../stubs/json-vehicle-stub'

describe('vehicle cleaner', () => {

  it('for each vehicle it converts the original object', () => {

    const vehicles = cleanVehiclesData(VehicleStub)

    const vehicleNames = Object.keys(vehicles)
    let key = vehicleNames[0]
    const singleVehicle = vehicles[vehicleNames[0]]

    const expectedVehicleData = {
                            "class": "wheeled",
                            "model": "Digger Crawler", 
                            "name": "Sand Crawler",
                            "passengers": "30"}

    const expectedVehicleNames = ["Sand Crawler", "T-16 skyhopper", "X-34 landspeeder", "TIE/LN starfighter", "Snowspeeder", "TIE bomber", "AT-AT", "AT-ST", "Storm IV Twin-Pod cloud car", "Sail barge"]


    expect(vehicleNames).toEqual(expectedVehicleNames)
    expect(singleVehicle).toEqual(expectedVehicleData)
  })
})
