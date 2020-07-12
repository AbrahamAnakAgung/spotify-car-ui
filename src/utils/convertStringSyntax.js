export function convertStringSyntax(str, toSyntax) {
  // strSyntax value: dash, camelCase, upperCase, lowerCase, capitalize, underscore
  let result = ""
  if (toSyntax === "dash") result = str.split(" ").join("-").toLowerCase()

  return result
}
