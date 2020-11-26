import axios from 'axios';
export const path = 'https://api.edamam.com/search';

export const searchRecipe = async (q) => {
  const appID = process.env.REACT_APP_ID;
  const appkey = process.env.REACT_APP_KEY;
  try {
    const data = await axios.get(
      `${path}?q=${q}&app_id=${appID}&app_key=${appkey}`
    );
    return data;
  } catch (error) {
    console.log('something went wrong' + error.message);
  }
};
