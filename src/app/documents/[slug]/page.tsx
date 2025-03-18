import { MDXComponents } from "@/components/mdx";
import { getDocument, getDocuments } from "@/services";
import { notFound, redirect } from "next/navigation";

import { Metadata, ResolvingMetadata } from "next";
import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const docs = allDocs;
  const test = docs.map((doc) => ({
    slug: doc.slug.replace("documents/", ""),
  }));
  return docs.map((doc) => ({
    slug: doc.slug.replace("documents/", ""),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = await getDocument(await params);

  if (!data?.doc) return notFound();

  return (
    <>
      {/* {data && ( */}
      <MDXComponents
        layout={data.doc?.cover ? "basic-layout" : "basic-layout"}
        doc={data.doc}
        code={data.doc?.body?.code}
      />
      {/* <div className="prose mx-auto">
        <Content />
      </div> */}
      {/* )} */}

      {/* <pre>{JSON.stringify(data.doc, null, 2)}</pre> */}
    </>
  );
}
