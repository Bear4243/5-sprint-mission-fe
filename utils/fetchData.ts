// 흠 이걸 모든 api에서 사용 하려면 어떻게 해야하지.. 나중에 써야지
export async function fetchData(url: URL) {
  const res = await fetch(url);
  return res.json();
}
