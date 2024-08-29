const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  baseYouTubeUrl: "https://www.youtube.com/embed/",
  apiKey: "e01a75f11350c3ebf5b7bd1638b62b90",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
