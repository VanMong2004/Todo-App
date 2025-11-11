import { useEffect, useState } from "react";



function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState] as const
}

export { useLocalStorage };