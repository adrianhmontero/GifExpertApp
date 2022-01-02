export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=wFmN419uGulDIqGbYdCjS3oGc31iXFl4&limit=5&rating=P&q=${encodeURI(
    category
  )}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const rawGifs = data.map((g) => {
    return {
      id: g.id,
      title: g.title,
      url: g?.images?.downsized_medium?.url,
    };
  });
  return rawGifs;
};
