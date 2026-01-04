// Exemplo de Teste de Integração Frontend + API
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import UserForm from '../components/UserForm';
import { UserService } from '../../api/services/UserService';

jest.mock('axios');

describe('Testes de Integração: UserForm + UserService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('deve submeter formulário e chamar API corretamente', async () => {
    const mockUser = { id: 1, name: 'João', email: 'joao@example.com' };
    axios.post.mockResolvedValue({ data: mockUser });

    const { rerender } = render(
      <UserForm onSubmit={UserService.createUser} />
    );

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const submitBtn = screen.getByTestId('submit-btn');

    // Preencher e submeter
    await userEvent.type(nameInput, 'João');
    await userEvent.type(emailInput, 'joao@example.com');
    await userEvent.click(submitBtn);

    // Verificar chamada à API
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3000/api/users',
        {
          name: 'João',
          email: 'joao@example.com',
        }
      );
    });

    // Verificar sucesso
    await waitFor(() => {
      expect(screen.getByTestId('success-message')).toBeInTheDocument();
    });
  });

  test('deve mostrar erro quando API falha', async () => {
    axios.post.mockRejectedValue(new Error('Erro na API'));

    render(<UserForm onSubmit={UserService.createUser} />);

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

  test('deve fazer múltiplas submissões em sequência', async () => {
    axios.post.mockResolvedValue({ data: {} });

    render(<UserForm onSubmit={UserService.createUser} />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const submitBtn = screen.getByTestId('submit-btn');

    // Primeira submissão
    await userEvent.type(nameInput, 'João');
    await userEvent.type(emailInput, 'joao@example.com');
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(nameInput).toHaveValue('');
    });

    // Segunda submissão
    await userEvent.type(nameInput, 'Maria');
    await userEvent.type(emailInput, 'maria@example.com');
    await userEvent.click(submitBtn);

    expect(axios.post).toHaveBeenCalledTimes(2);
  });

  test('ciclo completo: formulário → validação → API → sucesso', async () => {
    const mockResponse = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      createdAt: new Date().toISOString(),
    };

    axios.post.mockResolvedValue({ data: mockResponse });

    render(<UserForm onSubmit={UserService.createUser} />);

    // Etapa 1: Tentar submeter vazio (deve validar)
    const submitBtn = screen.getByTestId('submit-btn');
    await userEvent.click(submitBtn);

    expect(screen.getByTestId('name-error')).toBeInTheDocument();
    expect(axios.post).not.toHaveBeenCalled();

    // Etapa 2: Preencher com dados inválidos (email ruim)
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');

    await userEvent.type(nameInput, 'Test');
    await userEvent.type(emailInput, 'invalid-email');
    await userEvent.click(submitBtn);

    expect(screen.getByTestId('email-error')).toBeInTheDocument();
    expect(axios.post).not.toHaveBeenCalled();

    // Etapa 3: Corrigir email e submeter com sucesso
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3000/api/users',
        {
          name: 'Test',
          email: 'test@example.com',
        }
      );
      expect(screen.getByTestId('success-message')).toBeInTheDocument();
    });

    // Etapa 4: Formulário limpo para nova submissão
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });
});

/**
 * Padrões Demonstrados:
 * 
 * 1. Mock de API com axios.post
 * 2. Teste de comportamento do formulário
 * 3. Validação antes da API
 * 4. Tratamento de erros
 * 5. Múltiplas submissões
 * 6. Ciclo completo de UX
 * 7. Espera por elementos com waitFor
 * 8. Limpeza entre testes
 */
