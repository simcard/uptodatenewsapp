import { Source } from './source';

export interface Article extends Source {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  title: string;
  url: string;
  urlToImage: string;
}