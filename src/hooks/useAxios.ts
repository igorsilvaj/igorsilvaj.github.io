import { AxiosInstance, AxiosResponse } from "axios";
import { useState, useEffect } from "react";

type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";

interface AxiosConfigObj {
  axiosInstance: AxiosInstance,
  method: Methods,
  url: string,
  requestConfig?: []
}

export default function useAxiosFunction() {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false); //different!
  const [controller, setController] = useState<undefined | AbortController>();

  const axiosFetch = async (configObj: AxiosConfigObj): Promise<void> => {
    const {
      axiosInstance,
      method,
      url,
      requestConfig = {}
    } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      method.toLocaleLowerCase();
      const res = await axiosInstance[method](url, {
        ...requestConfig,
        signal: ctrl.signal
      });
      setResponse(res.data);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return { response, error, loading, axiosFetch };
}
