// The page's sections, in page order. The navbar renders from this
// list; App renders the section components in the same order.
export const sections = [
  { id: 'home', label: 'home' },
  { id: 'work', label: 'work' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
] as const;

export type SectionId = (typeof sections)[number]['id'];
