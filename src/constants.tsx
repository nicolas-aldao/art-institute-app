export const COLORS = {
  PRIMARY: '#fc9f2a',
  LIKE: '#e83d40',
  FAVORITES: '#ffd334',
  SKELETON: '#b4b4b4',
};

export const generateImageUrl = (img: string) =>
  `${`https://www.artic.edu/iiif/2/${img}/full/843,/0/default.jpg`}`;

export const API_URL = 'https://api.artic.edu/api/v1';
