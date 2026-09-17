export interface Movie {
  id: number;
  name: string;
  image?: {
    medium?: string;
    original?: string;
  };
  genres?: string[];
  rating?: {
    average?: number;
  };
  summary?: string;
}