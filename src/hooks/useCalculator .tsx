import { useState } from 'react';

export function useCalculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [subExpression, setSubExpression] = useState('');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  // 1. Limpiar (C / AC)
  const clearCalculator = () => {
    setDisplayValue('0');
    setSubExpression('');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  // 2. Borrar (⌫ - Eliminar el último dígito)
  const deleteLastDigit = () => {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue('0');
    }
  };

  // 3. Escribir números y decimales
  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      if (digit === '.' && displayValue.includes('.')) return;
      setDisplayValue(displayValue === '0' && digit !== '.' ? digit : displayValue + digit);
    }
  };

  // 4. Operaciones básicas (+, −, ×, ÷)
  const handleOperation = (nextOperator: string) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setFirstOperand(result);
      setDisplayValue(String(result));
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
    setSubExpression(`${displayValue} ${nextOperator}`);
  };

  // 5. Calcular resultado final (=) y registrar historial
  const calculateResult = () => {
    const inputValue = parseFloat(displayValue);

    if (operator && firstOperand !== null) {
      const result = calculate(firstOperand, inputValue, operator);
      const fullOperation = `${firstOperand} ${operator} ${inputValue} = ${result}`;
      
      setDisplayValue(String(result));
      setSubExpression(fullOperation);
      setHistory((prev) => [fullOperation, ...prev.slice(0, 4)]); // Guarda las últimas 5 operaciones

      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(true);
    }
  };

  const calculate = (first: number, second: number, op: string): number => {
    switch (op) {
      case '+': return first + second;
      case '−': return first - second;
      case '×': return first * second;
      case '÷': return second !== 0 ? first / second : 0;
      default: return second;
    }
  };

  // Enrutador de eventos para los botones
  const handlePress = (value: string) => {
    if (value === 'C' || value === 'AC') {
      clearCalculator();
    } else if (value === '⌫') {
      deleteLastDigit();
    } else if (value === '+' || value === '−' || value === '×' || value === '÷') {
      handleOperation(value);
    } else if (value === '=') {
      calculateResult();
    } else if (value === '+/-') {
      setDisplayValue(String(parseFloat(displayValue) * -1));
    } else if (value === '%') {
      setDisplayValue(String(parseFloat(displayValue) / 100));
    } else {
      inputDigit(value);
    }
  };

  return {
    displayValue,
    subExpression,
    history,
    handlePress,
  };
}