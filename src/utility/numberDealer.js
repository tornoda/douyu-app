export function convertNumber (num) {
  if (num < 1000) return num
  return (num / 10000).toFixed(1) + 'w';
}