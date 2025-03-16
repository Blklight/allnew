import { Label } from "@/components/ui/label";
import MultipleSelector, { Option } from "@/components/ui/multiselect";
import { ca } from "date-fns/locale";
import { useId } from "react";

const frameworks: Option[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    disable: true,
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
    disable: true,
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
];

const categoriesForTutorials: Option[] = [
  {
    value: "javascript",
    label: "Javascript",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "tutorial",
    label: "Tutorial",
  },
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    disable: true,
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },

  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
    disable: true,
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
  {
    value: "design-system",
    label: "Design System",
  },
  {
    value: "ui-components",
    label: "UI Components",
  },
  {
    value: "blog",
    label: "Blog",
  },
  {
    value: "learning-paths",
    label: "Learning Paths",
  },
  {
    value: "playground",
    label: "Playground",
  },
  {
    value: "project",
    label: "Project",
  },
  {
    value: "article",
    label: "Article",
  },
];

export default function ComponentMultipleSelector() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label>Categorias</Label>
      <MultipleSelector
        commandProps={{
          label: "Selecione as categorias",
        }}
        value={categoriesForTutorials.slice(0, 3)}
        defaultOptions={categoriesForTutorials}
        placeholder="Selecione as categorias"
        hideClearAllButton
        hidePlaceholderWhenSelected
        emptyIndicator={
          <p className="text-center text-sm">Nenhuma categoria encontrada</p>
        }
      />
    </div>
  );
}
