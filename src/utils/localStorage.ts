const load = <T>(key: string) => {
  try {
    const serializedValue = localStorage.getItem(key)
    return serializedValue == null
      ? undefined
      : (JSON.parse(serializedValue) as T)
  } catch (err) {
    return undefined
  }
}

const save = (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)

    return true
  } catch (err) {
    return false
  }
}

const addToArray = <T>(key: string, item: T) => {
  const existingArray = load<T[]>(key) || []
  const newArray = [...existingArray, item]

  return save(key, newArray)
}

const removeFromArray = <T>(key: string, item: T) => {
  const existingArray = load<T[]>(key) || []
  const newArray = existingArray.filter(value => value !== item)

  return save(key, newArray)
}

export { load, save, addToArray, removeFromArray }
