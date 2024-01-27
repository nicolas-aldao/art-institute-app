import axios from 'axios';
import {API_URL} from '../constants';

export const fetchArtworks = () => {
  return axios.get(`${API_URL}/artworks`).then((res: {data: any}) => res.data);
};

export const fetchArtwork = (id: string) => {
  return axios
    .get(`${API_URL}/artworks/${id}`)
    .then((res: {data: any}) => res.data);
};
export const fetchArtworksByIdsArray = (arrayList: number[]) => {
  const idsString = arrayList.join(',');
  return axios
    .get(`${API_URL}/artworks?ids=${idsString}`)
    .then((res: {data: any}) => res.data);
};
