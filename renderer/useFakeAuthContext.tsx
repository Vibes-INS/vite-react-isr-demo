import {ReactNode, createContext, useContext, useState, useEffect} from 'react'

interface FakeAuthContextProps {
  jwt: string
}

const Context = createContext<FakeAuthContextProps | null>(null)

export function FakeAuthContextProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return <Context.Provider value={{ jwt: `jwt ${count}` }}>{children}</Context.Provider>
}

export function useFakeAuthContext() {
  return useContext(Context)
}

