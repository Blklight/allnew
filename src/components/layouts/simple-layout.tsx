"use client";
import * as React from "react";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import type { ArticleLayoutProps, LanguageStore } from "@/utils/interfaces";
import { Author } from "../author";

const SimpleLayout = ({ doc, children }: ArticleLayoutProps) => {
  const { title, tags, date } = doc;
  const article = React.useRef("main_article");

  return (
    <section id={article.current} className="main-article py-4">
      <div className="article-grid !pb-0">
        <h5 className="font-sans font-semibold tracking-wide">
          <FormatFullTimeStamp date={date} locale={"pt-br"} />
        </h5>
        <h1 className="md:text-4xl text-3xl font-bold tracking-wide mb-4">
          {title}
        </h1>
      </div>
      <article className="article-grid prose dark:prose-dark">
        {children}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="my-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <Author />
      </article>
    </section>
  );
};

export default SimpleLayout;
