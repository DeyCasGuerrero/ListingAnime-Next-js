export async function fetchAnimeData(animeId: any) {
    try {
      const apiUrl = process.env.API_URL;
      const response = await fetch(`${apiUrl}/${animeId}/full`);
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  