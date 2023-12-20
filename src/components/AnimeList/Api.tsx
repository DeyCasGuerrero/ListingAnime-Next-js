import ApiClient from '@/components/AnimeList/Data'
import { fetchAnimeData } from './ApiAnime';
import React from 'react';

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

async function List() {

  const ids: number[] = Random();

  const mapAnimesID = ids.map(async (id) => {
    return await fetchAnimeData(id);
  });
  const posts = await Promise.all(mapAnimesID);
  console.log(posts)

  return (
    <div>
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          {post && post.data && post.data.mal_id && (
            <ApiClient post={post} key={post.data.mal_id} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default List;