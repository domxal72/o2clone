export default async function useFetchJson(url){
  const res = await fetch(url);
  const data = await res.json();
  
}
