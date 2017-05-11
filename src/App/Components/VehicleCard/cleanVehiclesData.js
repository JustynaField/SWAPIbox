export const cleanVehiclesData = (data) => {
  return data.results.reduce((accu, vehicle) => {
    accu[vehicle.name] = {}
    accu[vehicle.name].name = vehicle.name
    accu[vehicle.name].model = vehicle.model
    accu[vehicle.name].class = vehicle.vehicle_class
    accu[vehicle.name].passengers = vehicle.passengers

    return accu
  }, {})
}
