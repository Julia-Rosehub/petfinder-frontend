import React from 'react'

import { useCurrentLocation } from './../../../src/hooks/useCurrentLocation'

export const LocationNavigator = ({ setInputValue }) => {
  const { location, error } = useCurrentLocation({})

  return <div>{location ? setInputValue(location) : null}</div>
}
