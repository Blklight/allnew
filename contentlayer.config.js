import { defineDocumentType, defineNestedType, makeSource } from "contentlayer2/source-files"
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

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

export const AuthorsArticle = defineNestedType(() => ({
  name: "AuthorsArticle",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    quote: {
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

export const Tutorial = defineNestedType(() => ({
  name: "Tutorial",
  fields: {
    learningPath: {
      type: "string",
      required: false
    },
    step: {
      type: "number",
      required: false
    },
    difficulty: {
      type: "enum",
      options: ["iniciante", "intermediário", "avançado"],
      required: false,
    },
  },
}))

export const Doc = defineDocumentType(() => ({
  name: "Doc",
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
    documentType: {
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
    stylesheet: {
      type: "nested",
      of: Stylesheet,
      required: false
    },
    tutorial: {
      type: "nested",
      of: Tutorial,
      required: false
    },
    authors: {
      type: "list",
      of: AuthorsArticle,
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    }
  }
}))

/**
 * Generates:
 * {
 *   id: string
 *   title: string
 *   description?: string
 *   type: "article" | "project" | "tutorial"
 *   date: Date
 *   modifiedDate?: Date
 *   tags?: string[]
 *   draft: boolean
 *   cover?: string
 *   stylesheets?: {
 *     pageLayout?: string
 *     cardLayout?: string
 *     typography?: string
 *     filter?: string
 *   }[]
 *   authors?: {
 *     id: string
 *     name: string
 *     email?: string
 *     avatar?: string
 *     twitter?: string
 *     linkedin?: string
 *     instagram?: string
 *   }[]
 *   slug: string
 * }
 */

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [
    Doc,
    Author
  ],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "night-owl",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link para a seção",
          },
        },
      ]
    ],
  },
})