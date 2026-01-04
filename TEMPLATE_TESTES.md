// ================================================================================
// 📋 TEMPLATE: Use este arquivo como base para criar seus próprios testes
// ================================================================================

/\*\*

- TEMPLATE PARA TESTES DE COMPONENTE REACT
-
- Copie este template e adapte para seus componentes!
  \*/

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MeuComponente from '../MeuComponente';

describe('Testes do MeuComponente', () => {
// ✅ Setup - executado antes de cada teste
beforeEach(() => {
// Preparar dados de teste
jest.clearAllMocks();
});

// ✅ Testes de Renderização
describe('Renderização', () => {
test('deve renderizar sem erros', () => {
render(<MeuComponente />);
// Adicionar assertions
});

    test('deve exibir título correto', () => {
      render(<MeuComponente title="Meu Título" />);
      expect(screen.getByText('Meu Título')).toBeInTheDocument();
    });

});

// ✅ Testes de Interação
describe('Interações do Usuário', () => {
test('deve responder a cliques', async () => {
const handleClick = jest.fn();
render(<MeuComponente onClick={handleClick} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(handleClick).toHaveBeenCalled();
    });

    test('deve atualizar input', async () => {
      render(<MeuComponente />);

      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'novo texto');

      expect(input).toHaveValue('novo texto');
    });

});

// ✅ Testes de Estado
describe('Gerenciamento de Estado', () => {
test('deve mudar estado ao interagir', async () => {
render(<MeuComponente />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText('novo estado')).toBeInTheDocument();
      });
    });

});

// ✅ Testes de Props
describe('Props', () => {
test('deve aceitar e usar prop corretamente', () => {
render(<MeuComponente disabled={true} />);

      expect(screen.getByRole('button')).toBeDisabled();
    });

});

// ✅ Testes de Erros
describe('Tratamento de Erros', () => {
test('deve mostrar mensagem de erro', () => {
render(<MeuComponente showError={true} />);

      expect(screen.getByText(/erro/i)).toBeInTheDocument();
    });

});

// ✅ Cleanup - executado após cada teste
afterEach(() => {
jest.clearAllMocks();
});
});

// ================================================================================

/\*\*

- TEMPLATE PARA TESTES DE FUNÇÃO
  \*/

// Função a testar
export function minhaFuncao(a, b) {
if (typeof a !== 'number' || typeof b !== 'number') {
throw new Error('Argumentos devem ser números');
}
return a + b;
}

describe('Testes da Função', () => {
test('deve somar dois números', () => {
expect(minhaFuncao(2, 3)).toBe(5);
});

test('deve lançar erro com argumentos inválidos', () => {
expect(() => minhaFuncao('a', 2)).toThrow('Argumentos devem ser números');
});

test.each([
[1, 2, 3],
[5, 5, 10],
[0, 0, 0],
])('minhaFuncao(%i, %i) deve retornar %i', (a, b, expected) => {
expect(minhaFuncao(a, b)).toBe(expected);
});
});

// ================================================================================

/\*\*

- TEMPLATE PARA TESTES DE API/SERVIÇO
  \*/

import axios from 'axios';

jest.mock('axios');

class MeuServicoAPI {
static async buscarDados(id) {
const response = await axios.get(`/api/dados/${id}`);
return response.data;
}

static async criarDado(data) {
const response = await axios.post('/api/dados', data);
return response.data;
}
}

describe('Testes do MeuServicoAPI', () => {
afterEach(() => {
jest.clearAllMocks();
});

test('deve buscar dados com sucesso', async () => {
const mockData = { id: 1, name: 'Test' };
axios.get.mockResolvedValue({ data: mockData });

    const result = await MeuServicoAPI.buscarDados(1);

    expect(axios.get).toHaveBeenCalledWith('/api/dados/1');
    expect(result).toEqual(mockData);

});

test('deve criar dado com sucesso', async () => {
const newData = { name: 'Novo' };
const mockResponse = { id: 1, ...newData };
axios.post.mockResolvedValue({ data: mockResponse });

    const result = await MeuServicoAPI.criarDado(newData);

    expect(axios.post).toHaveBeenCalledWith('/api/dados', newData);
    expect(result).toEqual(mockResponse);

});

test('deve lançar erro quando requisição falha', async () => {
axios.get.mockRejectedValue(new Error('Network error'));

    await expect(MeuServicoAPI.buscarDados(1)).rejects.toThrow('Network error');

});
});

// ================================================================================

/\*\*

- DICAS PARA USAR ESSES TEMPLATES
-
- 1.  Copie o template relevante
- 2.  Substitua os nomes dos componentes/funções
- 3.  Adicione mais testes conforme necessário
- 4.  Mantenha a estrutura organizada (describe > test)
- 5.  Use nomes descritivos nos testes
- 6.  Teste casos de sucesso E erro
- 7.  Não se esqueça de mockar dependências externas
- 8.  Use waitFor para código assincronos
- 9.  Limpe mocks após cada teste
- 10. Aim para 80%+ de cobertura
      \*/

// ================================================================================

// CHECKLIST RÁPIDO
/_
✅ Renderiza corretamente?
✅ Props são usadas?
✅ User eventos funcionam?
✅ Estado muda corretamente?
✅ Erros são tratados?
✅ Dados carregam?
✅ Cleanup funciona?
✅ Mocks são claros?
✅ Nomes descritivos?
✅ 80%+ cobertura?
_/
