export function log(content: string | number): boolean {
  let success = false;
  if (content) {
    success = true;
    alert(content);
  }
  return success;
}
