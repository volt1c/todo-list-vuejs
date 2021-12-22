function getCookiesObject() {
  try {
    return JSON.parse(document.cookie);
  } catch (err) {
    return {};
  }
}
function setCookiesObject(obj) {
  return (document.cookie = JSON.stringify(obj));
}

export { getCookiesObject, setCookiesObject };
