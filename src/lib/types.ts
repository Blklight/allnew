export interface Article {
  id: string;
  title: string;
  url: string;
  description: string;
  imageUrl: string;
  addedAt: string;
}

export interface LearningPath {
  id: string;
  name: string;
  description: string;
  articles: Article[];
}
