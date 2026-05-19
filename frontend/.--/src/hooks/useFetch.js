import { useEffect, useState } from "react"

export const useFetch = (fetcher, dependencies = [], initialData = null) => {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isActive = true

    const load = async () => {
      setLoading(true)
      setError(null)

      try {
        const result = await fetcher()

        if (isActive) {
          setData(result)
        }
      } catch (fetchError) {
        if (isActive) {
          setError(fetchError)
        }
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }

    load()

    return () => {
      isActive = false
    }
  }, dependencies)

  return { data, loading, error, setData }
}
