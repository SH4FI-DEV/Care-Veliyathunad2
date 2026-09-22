import { useState, useEffect } from 'react';

export default function DonateDialog() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const triggers = document.querySelectorAll('[data-donate-trigger]');
    const handleClick = () => setOpen(true);
    triggers.forEach((el) => el.addEventListener('click', handleClick));
    return () => triggers.forEach((el) => el.removeEventListener('click', handleClick));
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

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-background rounded-lg p-6 sm:p-8 max-w-lg w-full mx-4 shadow-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Support Our Mission</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors btn-press"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Every ₹1000 contribution goes directly toward building safe homes for families in need. Scan the QR code or use the bank details below.
        </p>

        {/* QR Code */}
        <div className="flex flex-col items-center mb-6 p-6 rounded-lg border border-border bg-card">
          <p className="text-xs font-bold uppercase text-muted-foreground mb-4">Scan to Pay via UPI</p>
          <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center border-2 border-primary p-3 shadow-sm">
            <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="white"/>
              <rect x="10" y="10" width="50" height="50" fill="#1A3A2A"/>
              <rect x="15" y="15" width="40" height="40" fill="white"/>
              <rect x="20" y="20" width="30" height="30" fill="#1A3A2A"/>
              <rect x="140" y="10" width="50" height="50" fill="#1A3A2A"/>
              <rect x="145" y="15" width="40" height="40" fill="white"/>
              <rect x="150" y="20" width="30" height="30" fill="#1A3A2A"/>
              <rect x="10" y="140" width="50" height="50" fill="#1A3A2A"/>
              <rect x="15" y="145" width="40" height="40" fill="white"/>
              <rect x="20" y="150" width="30" height="30" fill="#1A3A2A"/>
              <rect x="70" y="10" width="8" height="8" fill="#1A3A2A"/><rect x="86" y="10" width="8" height="8" fill="#1A3A2A"/><rect x="102" y="10" width="8" height="8" fill="#1A3A2A"/>
              <rect x="70" y="26" width="8" height="8" fill="#1A3A2A"/><rect x="86" y="26" width="8" height="8" fill="#1A3A2A"/><rect x="118" y="26" width="8" height="8" fill="#1A3A2A"/>
              <rect x="70" y="42" width="8" height="8" fill="#1A3A2A"/><rect x="102" y="42" width="8" height="8" fill="#1A3A2A"/><rect x="118" y="42" width="8" height="8" fill="#1A3A2A"/>
              <rect x="10" y="70" width="8" height="8" fill="#1A3A2A"/><rect x="26" y="70" width="8" height="8" fill="#1A3A2A"/><rect x="42" y="70" width="8" height="8" fill="#1A3A2A"/>
              <rect x="70" y="70" width="8" height="8" fill="#1A3A2A"/><rect x="86" y="70" width="8" height="8" fill="#1A3A2A"/><rect x="102" y="70" width="8" height="8" fill="#1A3A2A"/>
              <rect x="118" y="70" width="8" height="8" fill="#1A3A2A"/><rect x="140" y="70" width="8" height="8" fill="#1A3A2A"/><rect x="156" y="70" width="8" height="8" fill="#1A3A2A"/><rect x="180" y="70" width="8" height="8" fill="#1A3A2A"/>
              <rect x="10" y="86" width="8" height="8" fill="#1A3A2A"/><rect x="42" y="86" width="8" height="8" fill="#1A3A2A"/><rect x="58" y="86" width="8" height="8" fill="#1A3A2A"/>
              <rect x="86" y="86" width="8" height="8" fill="#1A3A2A"/><rect x="118" y="86" width="8" height="8" fill="#1A3A2A"/><rect x="140" y="86" width="8" height="8" fill="#1A3A2A"/><rect x="170" y="86" width="8" height="8" fill="#1A3A2A"/>
              <rect x="26" y="102" width="8" height="8" fill="#1A3A2A"/><rect x="42" y="102" width="8" height="8" fill="#1A3A2A"/><rect x="70" y="102" width="8" height="8" fill="#1A3A2A"/>
              <rect x="102" y="102" width="8" height="8" fill="#1A3A2A"/><rect x="130" y="102" width="8" height="8" fill="#1A3A2A"/><rect x="156" y="102" width="8" height="8" fill="#1A3A2A"/><rect x="180" y="102" width="8" height="8" fill="#1A3A2A"/>
              <rect x="10" y="118" width="8" height="8" fill="#1A3A2A"/><rect x="26" y="118" width="8" height="8" fill="#1A3A2A"/><rect x="58" y="118" width="8" height="8" fill="#1A3A2A"/>
              <rect x="86" y="118" width="8" height="8" fill="#1A3A2A"/><rect x="118" y="118" width="8" height="8" fill="#1A3A2A"/><rect x="140" y="118" width="8" height="8" fill="#1A3A2A"/><rect x="156" y="118" width="8" height="8" fill="#1A3A2A"/>
              <rect x="70" y="140" width="8" height="8" fill="#1A3A2A"/><rect x="86" y="140" width="8" height="8" fill="#1A3A2A"/><rect x="118" y="140" width="8" height="8" fill="#1A3A2A"/>
              <rect x="140" y="140" width="8" height="8" fill="#1A3A2A"/><rect x="170" y="140" width="8" height="8" fill="#1A3A2A"/>
              <rect x="70" y="156" width="8" height="8" fill="#1A3A2A"/><rect x="102" y="156" width="8" height="8" fill="#1A3A2A"/><rect x="130" y="156" width="8" height="8" fill="#1A3A2A"/>
              <rect x="156" y="156" width="8" height="8" fill="#1A3A2A"/><rect x="180" y="156" width="8" height="8" fill="#1A3A2A"/>
              <rect x="86" y="170" width="8" height="8" fill="#1A3A2A"/><rect x="102" y="170" width="8" height="8" fill="#1A3A2A"/><rect x="140" y="170" width="8" height="8" fill="#1A3A2A"/><rect x="156" y="170" width="8" height="8" fill="#1A3A2A"/>
              <rect x="70" y="180" width="8" height="8" fill="#1A3A2A"/><rect x="86" y="180" width="8" height="8" fill="#1A3A2A"/><rect x="118" y="180" width="8" height="8" fill="#1A3A2A"/>
              <rect x="140" y="180" width="8" height="8" fill="#1A3A2A"/><rect x="180" y="180" width="8" height="8" fill="#1A3A2A"/>
            </svg>
          </div>
          <p className="text-sm font-semibold text-foreground mt-3">homefor1000@upi</p>
          <p className="text-xs text-primary font-medium mt-1">Home for ₹1000 Foundation</p>
        </div>

        {/* Bank Details */}
        <div className="space-y-3 mb-6">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold uppercase text-muted-foreground">Bank Transfer</p>
              <button
                onClick={() => copyToClipboard('Home for ₹1000 Foundation\nA/C: 12345678901234\nIFSC: SBIN0001234', 'bank')}
                className="text-xs text-primary hover:underline cursor-pointer font-medium btn-press"
              >
                {copied === 'bank' ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
            <p className="text-sm text-foreground font-medium">Account: Home for ₹1000 Foundation</p>
            <p className="text-sm text-muted-foreground">A/C No: 12345678901234</p>
            <p className="text-sm text-muted-foreground">IFSC: SBIN0001234</p>
            <p className="text-sm text-muted-foreground">Bank: State Bank of India</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold uppercase text-muted-foreground">UPI</p>
              <button
                onClick={() => copyToClipboard('homefor1000@upi', 'upi')}
                className="text-xs text-primary hover:underline cursor-pointer font-medium btn-press"
              >
                {copied === 'upi' ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
            <p className="text-sm text-foreground font-medium">homefor1000@upi</p>
          </div>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="w-full btn-green h-11 text-sm cursor-pointer btn-press"
        >
          Close
        </button>
      </div>
    </div>
  );
}
