import { type AxiosInstance, type AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'

type Methods = 'get' | 'post' | 'patch' | 'put' | 'delete' | 'head' | 'options'

interface AxiosConfigObj {
  axiosInstance: AxiosInstance
  method: Methods
  url: string
  requestConfig?: []
}

export default function useAxiosFunction () {
  const [response, setResponse] = useState<AxiosResponse>()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState<boolean>(false)
  const [controller, setController] = useState<undefined | AbortController>()

  const axiosFetch = async (configObj: AxiosConfigObj): Promise<void> => {
    const {
      axiosInstance,
      method,
      url,
      requestConfig = {}
    } = configObj

    try {
      setLoading(true)
      const ctrl = new AbortController()
      setController(ctrl)
      method.toLocaleLowerCase()
      const res = await axiosInstance[method](url, {
        ...requestConfig,
        signal: ctrl.signal
      })
      setResponse(res.data)
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => { if (controller !== undefined) controller.abort() }
  }, [controller])

  return { response, error, loading, axiosFetch }
}
