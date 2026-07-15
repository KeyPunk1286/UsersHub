export function createObjectWithValue<T extends object, TValue>(source: T, value: TValue) {
  const result = {} as { [K in keyof T]: TValue }
  const keys = Object.keys(source) as (keyof T)[]
  for (const key of keys) {
    result[key] = value
  }
  return result
}
