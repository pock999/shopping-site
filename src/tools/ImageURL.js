const getImageURL = (pic) => {
  const images = require.context('../assets/', false, /\.jpg$/);
  return images(`./${pic}.jpg`);
};
export default getImageURL;
