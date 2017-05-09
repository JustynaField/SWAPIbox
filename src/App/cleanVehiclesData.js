export const cleanVehiclesData = (data) => {
  return data.results.map((vehicle) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.class,
      passengers: vehicle.passengers
    }
  })
}
