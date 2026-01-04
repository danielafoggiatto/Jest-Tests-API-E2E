import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

describe('Testes do Componente Counter', () => {
  test('deve renderizar com valor inicial 0', () => {
    render(<Counter />);
    
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('deve incrementar o contador ao clicar em +', async () => {
    render(<Counter />);
    
    const incrementBtn = screen.getByTestId('increment-btn');
    const counterValue = screen.getByTestId('counter-value');
    
    await userEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent('1');
    
    await userEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent('2');
  });

  test('deve decrementar o contador ao clicar em -', async () => {
    render(<Counter />);
    
    const decrementBtn = screen.getByTestId('decrement-btn');
    const incrementBtn = screen.getByTestId('increment-btn');
    const counterValue = screen.getByTestId('counter-value');
    
    // Primeiro incrementa para ter um valor maior
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent('2');
    
    // Depois decrementa
    await userEvent.click(decrementBtn);
    expect(counterValue).toHaveTextContent('1');
  });

  test('deve resetar o contador ao clicar em Reset', async () => {
    render(<Counter />);
    
    const incrementBtn = screen.getByTestId('increment-btn');
    const resetBtn = screen.getByTestId('reset-btn');
    const counterValue = screen.getByTestId('counter-value');
    
    // Incrementa
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent('2');
    
    // Reset
    await userEvent.click(resetBtn);
    expect(counterValue).toHaveTextContent('0');
  });

  test('deve permitir múltiplas operações em sequência', async () => {
    render(<Counter />);
    
    const incrementBtn = screen.getByTestId('increment-btn');
    const decrementBtn = screen.getByTestId('decrement-btn');
    const resetBtn = screen.getByTestId('reset-btn');
    const counterValue = screen.getByTestId('counter-value');
    
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent('3');
    
    await userEvent.click(decrementBtn);
    expect(counterValue).toHaveTextContent('2');
    
    await userEvent.click(resetBtn);
    expect(counterValue).toHaveTextContent('0');
  });
});
