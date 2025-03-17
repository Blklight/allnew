import { ptBR, enUS } from "date-fns/locale";
import type { ReactNode } from "react";

export interface DateProps {
  date: string;
  locale?: "pt-br" | "en-us";
}

export interface LanguageStore {
  language: "pt-br" | "en-us";
  setLanguage: (language: string) => void;
}

export interface ArticleLayoutProps {
  doc: {
    title: string;
    tags: string[];
    date: string;
    image?: string;
  };
  children: ReactNode;
}

export interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  image?: string;
  slug: string;
}

export interface TocHeading {
  value: string;
  depth: number;
  url: string;
}

export type DocumentCard = {
  title: string;
  description?: string;
  documentType: "article" | "project" | "tutorial";
  date: string;
  modifiedDate?: Date;
  tags?: string[];
  draft: boolean;
  cover?: string;
  tutorial?: {
    learningPath?: string;
    steps?: number;
    difficulty?: string;
  };
  stylesheet?: {
    pageLayout?: string;
    cardLayout?: string;
    typography?: string;
    filter?: string;
  };
  authors?: {
    id: string;
    name: string;
    email?: string;
    avatar?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  }[];
  slug: string;
};

export interface DocumentLayoutProps {
  doc: DocumentCard;
  children: ReactNode;
}
