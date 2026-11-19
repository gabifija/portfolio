import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { sections } from '../sections';

const linkClassName = 'text-muted hover:text-accent-strong focus-visible:text-accent-strong';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='fixed inset-x-0 top-0 z-10 h-20 border-b border-line bg-paper/90 backdrop-blur'>
      <div className='mx-auto flex h-full max-w-[1000px] items-center justify-between px-6'>
        <a href='#home' onClick={closeMenu} className='text-lg font-semibold text-ink hover:text-accent-strong'>
          gabi.
        </a>

        {/* desktop menu */}
        <nav aria-label='main' className='hidden md:block'>
          <ul className='flex gap-8'>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={linkClassName}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* mobile menu toggle */}
        <button
          type='button'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'close menu' : 'open menu'}
          aria-expanded={menuOpen}
          aria-controls='mobile-menu'
          className='text-ink md:hidden'
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <nav
          id='mobile-menu'
          aria-label='menu'
          className='h-[calc(100dvh-5rem)] border-t border-line bg-paper md:hidden'
        >
          <ul className='flex h-full flex-col items-center justify-center gap-10'>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={closeMenu} className={`text-4xl ${linkClassName}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
