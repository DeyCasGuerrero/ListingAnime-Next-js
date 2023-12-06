import ApiClient from '@/components/AnimeList/ApiClient';
async function fetchAnimeData(animeId: any) {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/${animeId}/full`);
    const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// function bucle(): number[] {
//   const ids: number[] = [];
//   for (let i = 1; i <= 479; i++) {
//     ids.push(i);
//   }
//   return ids;
// }
function Random(): number[] {
  const randomNumbers: number[] = [];
  while (randomNumbers.length <= 5) {
    const randomNumber = Math.floor(Math.random() * (478 - 1 + 1) + 1);

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

async function List(/*{ useRandom = false }: { useRandom?: boolean }*/) {

  let ids: number[]=Random();
  // if (useRandom) {
  //   ids = Random();
  // } else {
  //   ids = bucle();
  // }
  const mapAnimesID = ids.map(async (id) => {
    return await fetchAnimeData(id);
  });
  const posts = await Promise.all(mapAnimesID);
  
  return (
    <div>
      {posts.map(post => (
        <ApiClient post={post} key={post.data?.mal_id}></ApiClient>
      ))}
    </div>
  );
}

export default List;