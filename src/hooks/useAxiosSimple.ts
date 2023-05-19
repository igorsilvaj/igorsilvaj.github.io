import { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

type Methods = 'get' | 'post' | 'patch' | 'put' | 'delete' | 'head' | 'options'

interface AxiosConfigObj<T = any> {
  axiosInstance: AxiosInstance
  method: Methods
  url: string
  payload?: T
  requestConfig?: AxiosRequestConfig
}

export default async function useAxiosSimple (
  configObj: AxiosConfigObj): Promise<AxiosResponse | AxiosError | undefined> {
  const {
    axiosInstance,
    method,
    url,
    payload = {},
    requestConfig = {}
  } = configObj

  try {
    method.toLocaleLowerCase()
    const res = await axiosInstance[method](
      url,
      payload,
      { ...requestConfig }
    )
    return res
  } catch (err) {
    if (err instanceof AxiosError) {
      return err
    }
    console.error(err)
  }
  return undefined
}
