import { links } from '../links';
import Section from './Section';

// Direct links instead of a form (ADR 0006). The link text is the address
// itself, so it's readable and easy to copy.
const contactLinks = [
  { ...links.email, text: links.email.href.replace('mailto:', ''), external: false },
  { ...links.linkedin, text: 'linkedin.com/in/gabifija', external: true },
  { ...links.github, text: 'github.com/gabifija', external: true },
];

const Contact = () => {
  return (
    <Section id='contact' heading='contact'>
      <p className='text-xl text-muted'>get in touch.</p>

      <dl className='divide-y divide-line pt-8'>
        {contactLinks.map(({ label, href, text, external }) => (
          <div key={label} className='grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-6'>
            <dt className='font-mono text-sm text-subtle'>{label}</dt>
            <dd>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className='text-lg text-accent-strong underline decoration-line underline-offset-4 transition-colors hover:decoration-accent-strong'
              >
                {text}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Contact;
