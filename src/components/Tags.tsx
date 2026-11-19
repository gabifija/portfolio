type TagsProps = {
  tags: readonly string[];
  /** Accessible name for the list, e.g. "stack". */
  label: string;
};

/** A row of small mono details: stack entries, skills (ADR 0003). */
const Tags = ({ tags, label }: TagsProps) => (
  <ul aria-label={label} className='flex flex-wrap gap-2'>
    {tags.map((tag) => (
      <li key={tag} className='rounded bg-line/60 px-2 py-0.5 font-mono text-xs text-muted'>
        {tag}
      </li>
    ))}
  </ul>
);

export default Tags;
