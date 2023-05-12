import { SnackbarProvider } from 'notistack'
import { Suspense, useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loader } from '../Loader'

function RoutesManager({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className='App'>
      <SnackbarProvider>
        <Suspense fallback={<Loader />}>{isLoading ? <Loader /> : <BrowserRouter>{children}</BrowserRouter>}</Suspense>
      </SnackbarProvider>
    </div>
  )
}

export default RoutesManager
