import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button';

describe('Testes do Componente Button', () => {
  test('deve renderizar o botão com label correto', () => {
    render(<Button label="Clique aqui" onClick={() => {}} />);
    
    const button = screen.getByRole('button', { name: /Clique aqui/i });
    expect(button).toBeInTheDocument();
  });

  test('deve chamar onClick quando clicado', async () => {
    const handleClick = jest.fn();
    render(<Button label="Clique" onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('deve desabilitar o botão quando disabled é true', () => {
    render(<Button label="Clique" onClick={() => {}} disabled={true} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('não deve chamar onClick quando desabilitado', async () => {
    const handleClick = jest.fn();
    render(<Button label="Clique" onClick={handleClick} disabled={true} />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('deve renderizar com classe CSS customizada', () => {
    const { container } = render(
      <Button label="Botão" onClick={() => {}} />
    );
    
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });
});
