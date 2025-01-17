import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FiDelete } from 'react-icons/fi';

type Operation = '+' | '-' | '*' | '/' | '';

export function Calculator() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState<Operation>('');
  const [newNumber, setNewNumber] = useState(false);

  const handleNumber = (num: string) => {
    if (display === '0' || newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperation = (op: Operation) => {
    setFirstNumber(display);
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = () => {
    if (!operation || !firstNumber) return;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }

    setDisplay(result.toString());
    setOperation('');
    setFirstNumber('');
    setNewNumber(true);
  };

  const clear = () => {
    setDisplay('0');
    setFirstNumber('');
    setOperation('');
    setNewNumber(false);
  };

  const deleteLastDigit = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-80 bg-slate-900 border-slate-800">
        <CardContent className="p-4">
          <div className="mb-4 bg-slate-800 p-4 rounded-lg">
            <div className="text-right text-2xl font-mono text-white">{display}</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              className="bg-slate-800 text-white hover:bg-slate-700"
              onClick={clear}
            >
              C
            </Button>
            <Button
              variant="outline"
              className="bg-slate-800 text-white hover:bg-slate-700"
              onClick={deleteLastDigit}
            >
              <FiDelete />
            </Button>
            <Button
              variant="outline"
              className="bg-slate-800 text-white hover:bg-slate-700"
              onClick={() => handleOperation('/')}
            >
              ÷
            </Button>
            <Button
              variant="outline"
              className="bg-slate-800 text-white hover:bg-slate-700"
              onClick={() => handleOperation('*')}
            >
              ×
            </Button>
            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
              <Button
                key={num}
                variant="outline"
                className="bg-slate-800 text-white hover:bg-slate-700"
                onClick={() => handleNumber(num.toString())}
              >
                {num}
              </Button>
            ))}
            <Button
              variant="outline"
              className="bg-slate-800 text-white hover:bg-slate-700"
              onClick={() => handleNumber('.')}
            >
              .
            </Button>
            <Button
              variant="outline"
              className="bg-slate-800 text-white hover:bg-slate-700"
              onClick={() => handleOperation('-')}
            >
              -
            </Button>
            <Button
              variant="outline"
              className="bg-slate-800 text-white hover:bg-slate-700"
              onClick={() => handleOperation('+')}
            >
              +
            </Button>
            <Button
              variant="outline"
              className="bg-slate-800 text-white hover:bg-slate-700"
              onClick={calculate}
            >
              =
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
