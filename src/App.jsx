import Background from "./components/Background"
import Content from "./components/Content"
import { ContextProvider } from "./Context"

function App() {
  return (
    <ContextProvider>
    <Background />
    <Content />
    </ContextProvider>
  )
}

export default App
