/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */

import type { JSX } from "react";

// import type { TocHeading } from "@/utils/interfaces";
export interface TocHeading {
  value: string;
  depth: number;
  url: string;
}

/**
 * Generates an inline table of contents
 *
 * @param {{
 *  toc: Array<TocHeading>,
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  exclude?: string|string[]
 * }} props
 *
 * @returns {JSX.Element}
 */
export const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = "",
}: {
  toc: Array<TocHeading>;
  indentDepth?: number;
  fromHeading?: number;
  toHeading?: number;
  asDisclosure?: boolean;
  exclude?: string | string[];
}): JSX.Element => {
  const re = Array.isArray(exclude)
    ? new RegExp("^(" + exclude.join("|") + ")$", "i")
    : new RegExp("^(" + exclude + ")$", "i");

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  );

  return (
    <>
      {asDisclosure ? (
        <details open>
          <summary className="ml-6 pt-2 pb-2 text-xl font-bold">
            Table of Contents
          </summary>
          <div className="ml-6">
            <ul>
              {filteredToc.map((heading) => (
                <li
                  key={heading.value}
                  className={`${heading.depth >= indentDepth && "ml-6"}`}
                >
                  <a href={heading.url}>{heading.value}</a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ) : (
        <ul>
          {filteredToc.map((heading) => (
            <li
              key={heading.value}
              className={`${heading.depth >= indentDepth && "ml-6"}`}
            >
              <a href={heading.url}>{heading.value}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
