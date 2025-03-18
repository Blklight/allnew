import { getDraftDocument } from "@/services";
import { Frame } from "./frame";
import { MDXComponents } from "./mdx";

export const ShowArticlePreview = async ({
  layout = "basic-layout",
}: {
  layout: string;
}) => {
  const article = await getDraftDocument({
    slug: "front-end-tutorial",
  });

  if (!article?.doc) return null;

  return (
    <Frame text="Preview" className="mb-6">
      <MDXComponents
        layout={layout}
        doc={article?.doc}
        code={article?.doc?.body?.code}
      />
    </Frame>
  );
};
