import axios from 'axios';
import { UserService } from '../../api/services/UserService';

// Mock do axios
jest.mock('axios');

describe('Testes da API - UserService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getUsers', () => {
    test('deve buscar lista de usuários com sucesso', async () => {
      const mockUsers = [
        { id: 1, name: 'João', email: 'joao@example.com' },
        { id: 2, name: 'Maria', email: 'maria@example.com' },
      ];

      axios.get.mockResolvedValue({ data: mockUsers });

      const result = await UserService.getUsers();

      expect(axios.get).toHaveBeenCalledWith(
        'http://localhost:3000/api/users'
      );
      expect(result).toEqual(mockUsers);
      expect(result).toHaveLength(2);
    });

    test('deve lançar erro ao falhar na busca de usuários', async () => {
      axios.get.mockRejectedValue(new Error('Network error'));

      await expect(UserService.getUsers()).rejects.toThrow(
        'Erro ao buscar usuários'
      );
    });
  });

  describe('getUserById', () => {
    test('deve buscar usuário por ID com sucesso', async () => {
      const mockUser = {
        id: 1,
        name: 'João',
        email: 'joao@example.com',
      };

      axios.get.mockResolvedValue({ data: mockUser });

      const result = await UserService.getUserById(1);

      expect(axios.get).toHaveBeenCalledWith(
        'http://localhost:3000/api/users/1'
      );
      expect(result).toEqual(mockUser);
    });

    test('deve lançar erro quando usuário não encontrado', async () => {
      axios.get.mockRejectedValue(new Error('Not found'));

      await expect(UserService.getUserById(999)).rejects.toThrow(
        'Erro ao buscar usuário'
      );
    });
  });

  describe('createUser', () => {
    test('deve criar usuário com sucesso', async () => {
      const newUser = { name: 'Pedro', email: 'pedro@example.com' };
      const mockResponse = { id: 3, ...newUser };

      axios.post.mockResolvedValue({ data: mockResponse });

      const result = await UserService.createUser(newUser);

      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3000/api/users',
        newUser
      );
      expect(result).toEqual(mockResponse);
    });

    test('deve lançar erro ao criar usuário inválido', async () => {
      const invalidUser = { name: 'Pedro' }; // Falta email

      axios.post.mockRejectedValue(new Error('Validation error'));

      await expect(UserService.createUser(invalidUser)).rejects.toThrow(
        'Erro ao criar usuário'
      );
    });
  });

  describe('updateUser', () => {
    test('deve atualizar usuário com sucesso', async () => {
      const updatedUser = { name: 'João Silva', email: 'joao.silva@example.com' };
      const mockResponse = { id: 1, ...updatedUser };

      axios.put.mockResolvedValue({ data: mockResponse });

      const result = await UserService.updateUser(1, updatedUser);

      expect(axios.put).toHaveBeenCalledWith(
        'http://localhost:3000/api/users/1',
        updatedUser
      );
      expect(result).toEqual(mockResponse);
    });

    test('deve lançar erro ao atualizar usuário inexistente', async () => {
      axios.put.mockRejectedValue(new Error('Not found'));

      await expect(
        UserService.updateUser(999, { name: 'Test' })
      ).rejects.toThrow('Erro ao atualizar usuário');
    });
  });

  describe('deleteUser', () => {
    test('deve deletar usuário com sucesso', async () => {
      axios.delete.mockResolvedValue({ status: 200 });

      const result = await UserService.deleteUser(1);

      expect(axios.delete).toHaveBeenCalledWith(
        'http://localhost:3000/api/users/1'
      );
      expect(result).toEqual({ success: true });
    });

    test('deve lançar erro ao deletar usuário inexistente', async () => {
      axios.delete.mockRejectedValue(new Error('Not found'));

      await expect(UserService.deleteUser(999)).rejects.toThrow(
        'Erro ao deletar usuário'
      );
    });
  });

  describe('Múltiplas chamadas de API', () => {
    test('deve fazer múltiplas chamadas em sequência', async () => {
      const mockUser = { id: 1, name: 'João', email: 'joao@example.com' };

      axios.get.mockResolvedValue({ data: mockUser });
      axios.put.mockResolvedValue({ data: { ...mockUser, name: 'João Silva' } });

      const user = await UserService.getUserById(1);
      expect(user).toEqual(mockUser);

      const updated = await UserService.updateUser(1, { name: 'João Silva' });
      expect(updated.name).toBe('João Silva');

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.put).toHaveBeenCalledTimes(1);
    });
  });
});
