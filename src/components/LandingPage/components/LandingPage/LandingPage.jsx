import React from 'react'
import BusinessCard3D from '../BusinessCard3D/BusinessCard3D'
import BusinessCard from '../BusinessCard/BusinessCard'

export default function() {
  return (
    window.innerWidth <= 768 ? <BusinessCard /> : < BusinessCard3D />
  )
}