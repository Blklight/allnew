import { compareDesc } from "date-fns";

import { allAuthors, allDocs } from "contentlayer/generated";
import type { DocumentCard } from "@/utils/interfaces";

export const rawDocuments = allDocs
  .filter((doc) => doc.draft === false)
  .sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

export const getAuthors = () => {
  return allAuthors;
};

export const frontmatter = (doc: DocumentCard) => {
  return {
    title: doc.title,
    description: doc.description,
    cover: doc.cover,
    date: doc.date,
    modifiedDate: doc.modifiedDate,
    tags: doc.tags,
    draft: doc.draft,
    authors: doc.authors,
    stylesheets: doc.stylesheets,
    documentType: doc.documentType,
    tutorial: doc.tutorial,
    slug: doc.slug,
  };
};

export const fetchDocuments = (docs: any) => {
  return docs.map(async (doc: any) => {
    const document = frontmatter(doc);
    const authorList = doc.authors;

    const authorPromise = authorList.map(async (author: any) => {
      const authorResults = await allAuthors.filter(
        (obj) => obj.name === author.name
      );

      return authorResults;
    });

    let authordetails = await Promise.all(authorPromise);
    authordetails = authordetails.flat();

    return {
      document,
      authordetails,
    };
  });
};

export const getDocuments = () => {
  const documents = Promise.all(fetchDocuments(rawDocuments));

  return documents;
};

export const getDocument = async (params: any) => {
  console.log("getdocument line 63", params);
  const allDocuments = await Promise.all(fetchDocuments(rawDocuments));

  const formattedRoute = `documents/${params?.slug}`;
  // const documentIndex = allDocuments.findIndex(
  //   (data) => data.document.slug === formattedRoute
  // );

  const doc = rawDocuments.find((obj) => obj.slug === formattedRoute);
  console.log("getdocument line 73", doc?.title);
  debugger;
  const authorList = doc?.authors;

  const authorPromise = authorList?.map((author) =>
    allAuthors.filter((obj) => obj.name === author.name)
  );

  if (!authorPromise) return;

  let authordetails = await Promise.all(authorPromise);
  debugger;
  // authordetails = authordetails.flat();

  return { doc, authordetails };
};
