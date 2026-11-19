import type { ReactNode } from 'react';
import type { SectionId } from '../sections';

type SectionProps = {
  id: SectionId;
  /** Visible heading. Omit for home, which introduces itself. */
  heading?: string;
  /** Fill at least the first screen (home only). */
  fill?: boolean;
  children: ReactNode;
};

/**
 * One full-width block of the page: consistent spacing, max width and heading.
 * `scroll-mt-20` keeps the heading clear of the fixed header when linked to.
 */
const Section = ({ id, heading, fill = false, children }: SectionProps) => {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={heading ? headingId : undefined}
      aria-label={heading ? undefined : id}
      className={`scroll-mt-20 ${fill ? 'min-h-screen flex items-center pt-20' : 'py-20 sm:py-24'}`}
    >
      <div className='mx-auto w-full max-w-[1000px] px-6'>
        {heading && (
          <h2 id={headingId} className='pb-8 text-3xl font-semibold tracking-tight sm:text-4xl'>
            {heading}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
