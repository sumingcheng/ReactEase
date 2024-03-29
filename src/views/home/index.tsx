import React, { useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'

function Index() {
  const globalContext = useContext(GlobalContext)
  if (!globalContext) {
    throw new Error('Used outside of GlobalProvider')
  }
  const { globalState, setGlobalState } = globalContext

  return (
    <div>
      <p>{globalState}</p>
      <button onClick={() => setGlobalState('Index value')}>Change global state</button>
    </div>
  )
}

export default Index
