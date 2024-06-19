function getCookiesObject() {
  return JSON.parse(document.cookie || '{}');
}
function setCookiesObject(obj) {
  return (document.cookie = JSON.stringify(obj));
}

export { getCookiesObject, setCookiesObject };
