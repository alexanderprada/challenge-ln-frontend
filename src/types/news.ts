export interface New {
  title: string;
  url: string;
  lead: string;
  imageUrl: string;
  subtitle: string;
  author?: string;
  authorImage?: string;
  badge?: string;
  readTime?: number;
  body?: string;
}

export interface NewsResponse {
  data: New[];
}
