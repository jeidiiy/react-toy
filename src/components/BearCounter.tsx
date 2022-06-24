import React from 'react'
import { useBearStore } from '../store/useStore'

export default function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}
