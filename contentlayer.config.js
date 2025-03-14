import { defineDocumentType, defineNestedType, makeSource } from "contentlayer2/source-files"

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.(md|mdx)`,
  contentType: "markdown",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    avatar: {
      type: "string",
      required: false,
    },
    occupation: {
      type: "string",
      required: false,
    },
    email: {
      type: "string",
      required: false,
    },
    github: {
      type: "string",
      required: false,
    },
    medium: {
      type: "string",
      required: false,
    },
    twitter: {
      type: "string",
      required: false,
    },
    linkedin: {
      type: "string",
      required: false,
    },
    instagram: {
      type: "string",
      required: false,
    },
  },
}));

export const Stylesheet = defineNestedType(() => ({
  name: "Stylesheet",
  fields: {
    pageLayout: {
      type: "string",
      required: false
    },
    cardLayout: {
      type: "string",
      required: false
    },
    typography: {
      type: "string",
      required: false
    },
    filter: {
      type: "string",
      required: false
    }
  },

}))

export const Document = defineDocumentType(() => ({
  name: "Document",
  filePathPattern: `documents/**/*.(md|mdx)`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
    type: {
      type: "enum",
      options: ["article", "project", "tutorial"],
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    modifiedDate: {
      type: "date",
      required: false,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: false,
      default: [],
    },
    draft: {
      type: "boolean",
      required: true,
    },
    cover: {
      type: "string",
      required: false,
    },
    stylesheets: {
      type: "nested",
      of: {
        type: "reference",
        resolve: Stylesheet,
      },
    },
    authors: {
      type: "list",
      of: {
        type: "nested",
        of: {
          type: "reference",
          resolve: Author,
        },
      },
      required: false,
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    }
  }
}))

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [
    Document,
    Author
  ],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})