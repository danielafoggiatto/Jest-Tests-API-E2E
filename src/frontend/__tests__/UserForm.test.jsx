import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from '../components/UserForm';

describe('Testes Avançados - UserForm', () => {
  test('deve renderizar o formulário com todos os campos', () => {
    const mockSubmit = jest.fn();
    render(<UserForm onSubmit={mockSubmit} />);

    expect(screen.getByTestId('user-form')).toBeInTheDocument();
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
  });

  test('deve validar campo nome obrigatório', async () => {
    const mockSubmit = jest.fn();
    render(<UserForm onSubmit={mockSubmit} />);

    const emailInput = screen.getByTestId('email-input');
    const submitBtn = screen.getByTestId('submit-btn');

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.click(submitBtn);

    expect(screen.getByTestId('name-error')).toHaveTextContent(
      'Nome é obrigatório'
    );
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test('deve enviar formulário com dados válidos', async () => {
    const mockSubmit = jest.fn().mockResolvedValue({});
    render(<UserForm onSubmit={mockSubmit} />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const submitBtn = screen.getByTestId('submit-btn');

    await userEvent.type(nameInput, 'João Silva');
    await userEvent.type(emailInput, 'joao@example.com');
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        name: 'João Silva',
        email: 'joao@example.com',
      });
    });
  });

  test('deve mostrar mensagem de sucesso após envio', async () => {
    const mockSubmit = jest.fn().mockResolvedValue({});
    render(<UserForm onSubmit={mockSubmit} />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const submitBtn = screen.getByTestId('submit-btn');

    await userEvent.type(nameInput, 'João');
    await userEvent.type(emailInput, 'joao@example.com');
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByTestId('success-message')).toBeInTheDocument();
    });
  });

  test('deve limpar formulário após envio bem-sucedido', async () => {
    const mockSubmit = jest.fn().mockResolvedValue({});
    render(<UserForm onSubmit={mockSubmit} />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const submitBtn = screen.getByTestId('submit-btn');

    // Preencher
    await userEvent.type(nameInput, 'João');
    await userEvent.type(emailInput, 'joao@example.com');

    // Enviar
    await userEvent.click(submitBtn);

    // Verificar se limpou
    await waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
    });
  });

  test('deve desabilitar botão quando loading é true', () => {
    const mockSubmit = jest.fn();
    render(<UserForm onSubmit={mockSubmit} loading={true} />);

    const submitBtn = screen.getByTestId('submit-btn');
    expect(submitBtn).toBeDisabled();
    expect(submitBtn).toHaveTextContent('Enviando...');
  });

  test('deve mostrar erro de submissão', async () => {
    const mockSubmit = jest.fn().mockRejectedValue(
      new Error('Erro ao enviar formulário')
    );
    render(<UserForm onSubmit={mockSubmit} />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const submitBtn = screen.getByTestId('submit-btn');

    await userEvent.type(nameInput, 'João');
    await userEvent.type(emailInput, 'joao@example.com');
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByTestId('submit-error')).toBeInTheDocument();
    });
  });
});
