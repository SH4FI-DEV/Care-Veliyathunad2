import { useState } from 'react';

const amounts = [500, 1000, 2000, 5000];

export default function AmountSelector() {
  const [selected, setSelected] = useState(1000);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');

  const formatAmount = (amount: number) => {
    return '₹' + amount.toLocaleString('en-IN');
  };

  return (
    <div>
      <h2 className="max-w-xl text-4xl font-medium leading-none sm:text-5xl">
        5 Families Have a Home.<br />The 6th Is Waiting.
      </h2>
      <p className="mt-5 max-w-lg text-muted-foreground">
        Join hundreds of contributors helping us finish the home that's under construction right now.
      </p>

      <div className="mt-8 flex gap-2">
        <button
          onClick={() => setFrequency('once')}
          className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors h-9 px-4 py-2 btn-press ${
            frequency === 'once'
              ? 'bg-foreground text-background shadow-none hover:bg-foreground/85'
              : 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          Give once
        </button>
        <button
          onClick={() => setFrequency('monthly')}
          className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors h-9 px-4 py-2 btn-press ${
            frequency === 'monthly'
              ? 'bg-foreground text-background shadow-none hover:bg-foreground/85'
              : 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          Monthly
        </button>
      </div>

      <p className="mb-3 mt-8 text-sm font-medium">Choose an amount</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => setSelected(amount)}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors h-9 px-4 py-2 btn-press ${
              selected === amount
                ? 'bg-foreground text-background shadow-none hover:bg-foreground/85'
                : 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            {formatAmount(amount)}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <button
          data-donate-trigger
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors bg-primary text-primary-foreground shadow-none hover:bg-primary/85 h-9 px-4 py-2 btn-press"
        >
          Contribute {formatAmount(selected)}
        </button>
      </div>
    </div>
  );
}
