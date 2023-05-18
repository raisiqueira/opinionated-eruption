import { useState } from 'react'

import { Button, Flex, useMantineColorScheme } from '@mantine/core'

import './App.css'
import reactLogo from './react.svg'

export const App = () => {
  const [count, setCount] = useState(0)
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <div className="App">
      <Flex align="center" justify="center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/icons/favicon.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/eruptionjs/core" target="_blank" rel="noreferrer">
          <span className="logo eruption">🌋</span>
        </a>
      </Flex>
      <h1>Vite + React/TS = EruptionJS</h1>
      <Flex direction="column">
        <Flex gap={3} justify="center">
          <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
          <Button onClick={() => toggleColorScheme()}>Toggle Theme</Button>
        </Flex>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Flex>
      <p className="read-the-docs">Click on the Vite, React and Eruption logos to learn more</p>
    </div>
  )
}

export default App
