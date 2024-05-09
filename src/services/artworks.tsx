import axios from 'axios';
import {API_URL} from '../constants';

export const fetchArtworks = async () => {
  return await axios.get(`${API_URL}/artworks`).then((res: {data: any}) => res.data);
};

export const fetchArtwork = async (id: string) => {
  return await axios
    .get(`${API_URL}/artworks/${id}`)
    .then((res: {data: any}) => res.data);
};
export const fetchArtworksByIdsArray = async (arrayList: number[]) => {
  console.log('llamada')
  const idsString = arrayList.join(',');
  return await axios
    .get(`${API_URL}/artworks?ids=${idsString}`)
    .then((res: {data: any}) => res.data);
};
