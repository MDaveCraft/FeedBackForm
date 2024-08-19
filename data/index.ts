import { Data } from "./types";

const messages = {
  "Title": "Faculty Feedback Form",
  "Subtitle": "Please provide your feedback for the faculty",
}

const defaultLabels ={
  "faculties" : "Select Faculty Name",
  "classType" : "Select Class Type",
  "sunject": "Select Subject Name",
}

const levels = [
  {
    level:"excellent",
    value: 5
  },
  {
    level:"good",
    value: 4
  },
  {
    level:"average",
    value: 3
  },
  {
    level:"bad",
    value: 2
  },
  {
    level:"very bad",
    value: 1
  }
];

const frameworks:Data[] = [
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
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];


export { messages, frameworks, defaultLabels, levels };