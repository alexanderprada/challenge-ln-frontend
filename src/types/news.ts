export interface New {
  title: string;
  url: string;
  lead: string;
  imageUrl: string;
  subtitle?: string;
  autor?: string;
  autorImage?: string;
  badge?: string;
  readTime?: number;
}

export interface NewsResponse {
  data: New[];
}
