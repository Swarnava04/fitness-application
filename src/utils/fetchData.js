export const exerciseOptions = {
  method: "GET",
  headers: {
    // "X-RapidAPI-Key": "542f610621msh7d2c67b48b0e608p1b111djsn7bb8bc0ff22d",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  // params: {
  //   id: 'UCE_M8A5yxnLfW0KghEeajjw'
  // },
  headers: {
    "X-RapidAPI-Key": "542f610621msh7d2c67b48b0e608p1b111djsn7bb8bc0ff22d",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
