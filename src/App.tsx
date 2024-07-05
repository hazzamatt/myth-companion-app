import './App.css'

// Custom Components
import DefaultButton from './shared-components/button'
import DarknessMeter from './components/darkness-meter'
import EnemyTracker from './components/enemy-tracker'

// Context
import { useGameState } from './components/context.gameState'

// Helpers
import { modifyDarkness } from './helpers/meterTracking'

function App() {
  const gsc = useGameState();

  const addAP = (ap: number) => {
    const newVal = modifyDarkness(gsc.state.ap, 6, ap);
    gsc.dispatch({type: 'UPDATE_DARKNESS', payload: newVal});
  }

  return (
    <>
      <div className="card">
        <DarknessMeter />
        <DefaultButton buttonFunction={() => addAP(1)}>
          Add 1 darkness
        </DefaultButton>
        <DefaultButton buttonFunction={() => addAP(3)}>
          Add 3 darkness
        </DefaultButton>
      </div>
      <div>
        <EnemyTracker />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
