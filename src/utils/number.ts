const defaultIfNaN = (value: number, defaultValue: number) =>
  isNaN(value) ? defaultValue : value

export { defaultIfNaN }
