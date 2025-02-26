export async function fetchData(url: URL) {
  const res = await fetch(url);
  return res.json();
}
