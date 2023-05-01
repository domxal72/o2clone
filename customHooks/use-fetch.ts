import { useEffect, useState } from "react"

function useFetch(url) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect( () => {
    (async () => {
      setLoading(true)
      try {
        
        const res = await fetch(url);
        const data = await res.json();
        setData(data);

      } catch (error) {
        setError({
          name: 'fetch',
          error,
        })
      }
      setLoading(false)
    })();
  }, [url])

  return {data, setData, loading, error}
}

export default useFetch
