import axios from 'axios';

export const fetchArtworks = () => {
  return axios
    .get('https://api.artic.edu/api/v1/artworks')
    .then((res: {data: any}) => res.data);
};

export const fetchArtwork = id => {
  return axios
    .get(`https://api.artic.edu/api/v1/artworks/${id}`)
    .then((res: {data: any}) => res.data);
};
export const fetchArtworksByIdsArray = arrayList => {
  const idsString = arrayList.join(',');
  return axios
    .get(`https://api.artic.edu/api/v1/artworks?ids=${idsString}`)
    .then((res: {data: any}) => res.data);
};
