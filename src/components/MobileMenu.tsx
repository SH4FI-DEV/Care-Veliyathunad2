import { useState, useEffect } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('open-mobile-menu', handleOpen);
    return () => window.removeEventListener('open-mobile-menu', handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-md flex flex-col items-center justify-center">
      <button
        onClick={() => setOpen(false)}
        className="absolute top-5 right-5 text-background hover:text-primary transition-colors"
        aria-label="Close menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <nav className="flex flex-col items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-2xl font-medium text-background hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => {
            setOpen(false);
            document.querySelector('[data-donate-trigger]')?.dispatchEvent(new Event('click'));
          }}
          className="mt-4 btn-primary text-base px-8 py-3 cursor-pointer"
        >
          Donate now
        </button>
      </nav>
    </div>
  );
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];
