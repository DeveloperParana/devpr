import { Data } from '../types';

export const backToBlog = (data: Data) =>
  `<a href="${data.baseUrl}blog">Voltar ao blog</a>`;
