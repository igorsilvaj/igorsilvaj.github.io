import { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

type Methods = 'get' | 'post' | 'patch' | 'put' | 'delete' | 'head' | 'options'

interface AxiosConfigObj<T = any> {
  axiosInstance: AxiosInstance
  method: Methods
  url: string
  payload?: T
  requestConfig?: AxiosRequestConfig
}

export default function useAxios () {
  const [response, setResponse] = useState<AxiosResponse>()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState<boolean>(false)
  const [controller, setController] = useState<undefined | AbortController>()

  const axiosFetch = async (configObj: AxiosConfigObj): Promise<void> => {
    const {
      axiosInstance,
      method,
      url,
      payload = {},
      requestConfig = {}
    } = configObj

    try {
      setLoading(true)
      const ctrl = new AbortController()
      setController(ctrl)
      method.toLocaleLowerCase()
      const res = await axiosInstance[method](url,
        payload,
        {
          ...requestConfig,
          signal: ctrl.signal
        })
      setResponse(res.data)
    } catch (err) {
      if (err instanceof Error) {
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
