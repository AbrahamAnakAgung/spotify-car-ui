export function convertSecondToMinute(seconds) {
  let mins = Math.floor(Number(seconds) / 60)
  let secs = Number(seconds) % 60
  return `${mins}:${secs < 10 ? "0" + secs : secs}`
}
