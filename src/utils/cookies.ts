function getCookiesObject<T = CookiesSchema>(): T {
  return JSON.parse(document.cookie || '{}')
}
function setCookiesObject<T = CookiesSchema>(obj: T) {
  return (document.cookie = JSON.stringify(obj))
}

export { getCookiesObject, setCookiesObject }
