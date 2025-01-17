import { cn } from '@/lib/utils';

interface SegmentProps {
  active: boolean;
  className: string;
}

const Segment = ({ active, className }: SegmentProps) => (
  <div
    className={cn(
      'absolute bg-red-600 transition-opacity duration-100',
      active ? 'opacity-100' : 'opacity-20',
      className
    )}
  />
);

interface SevenSegmentDigitProps {
  value: string;
}

export function SevenSegmentDigit({ value }: SevenSegmentDigitProps) {
  const segments = {
    '0': [1, 1, 1, 0, 1, 1, 1],
    '1': [0, 0, 1, 0, 0, 1, 0],
    '2': [1, 0, 1, 1, 1, 0, 1],
    '3': [1, 0, 1, 1, 0, 1, 1],
    '4': [0, 1, 1, 1, 0, 1, 0],
    '5': [1, 1, 0, 1, 0, 1, 1],
    '6': [1, 1, 0, 1, 1, 1, 1],
    '7': [1, 0, 1, 0, 0, 1, 0],
    '8': [1, 1, 1, 1, 1, 1, 1],
    '9': [1, 1, 1, 1, 0, 1, 1],
    '-': [0, 0, 0, 1, 0, 0, 0],
    '.': [0, 0, 0, 0, 0, 0, 0],
    ' ': [0, 0, 0, 0, 0, 0, 0]
  };

  const pattern = segments[value as keyof typeof segments] || segments[' '];

  return (
    <div className="relative w-12 h-20 mx-1">
      <Segment active={pattern[0]} className="h-2 w-8 top-0 left-2" />
      <Segment active={pattern[1]} className="w-2 h-8 top-1 left-0" />
      <Segment active={pattern[2]} className="w-2 h-8 top-1 right-0" />
      <Segment active={pattern[3]} className="h-2 w-8 top-9 left-2" />
      <Segment active={pattern[4]} className="w-2 h-8 bottom-1 left-0" />
      <Segment active={pattern[5]} className="w-2 h-8 bottom-1 right-0" />
      <Segment active={pattern[6]} className="h-2 w-8 bottom-0 left-2" />
    </div>
  );
}

interface SevenSegmentDisplayProps {
  value: string;
}

export function SevenSegmentDisplay({ value }: SevenSegmentDisplayProps) {
  const digits = value.split('');

  return (
    <div className="flex justify-end items-center bg-black bg-opacity-90 p-4 rounded-lg">
      {digits.map((digit, index) => (
        <SevenSegmentDigit key={index} value={digit} />
      ))}
    </div>
  );
}
