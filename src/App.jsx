import { useState } from "react"
import CalendarPage from "./CalendarPage"
import BirthdayPage from "./BirthdayPage"

function App() {
  const [isValid, setIsValid] = useState(false)

  if (isValid) {
    return <BirthdayPage />
  }

  return <CalendarPage onValidDate={() => setIsValid(true)} />
}

export default App
