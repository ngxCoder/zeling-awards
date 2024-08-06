export default async function safeFetch<T>(fetchPromise: Promise<Response>) {
  try {
    const response = await fetchPromise
    if (!response.ok) {
      throw new Error('status ' + response.status)
    }

    if (response.body === null) {
      return null
    }

    const data = await response.json()
    return data as T
  } catch (error) {
    console.error('Error fetching data', error)
    return null
  }
}
