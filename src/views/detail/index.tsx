import React, { useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'

function Detail() {
  const globalContext = useContext(GlobalContext)
  if (!globalContext) {
    throw new Error('Used outside of GlobalProvider')
  }
  const { globalState, setGlobalState } = globalContext
  return (
    <div>
      <p>{globalState}</p>
      <button onClick={() => setGlobalState('Detail value')}>Change global state</button>
    </div>
  )
}

export default Detail
