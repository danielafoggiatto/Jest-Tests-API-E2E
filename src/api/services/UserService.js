// Serviço de API para consumir dados
import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

export class UserService {
  static async getUsers() {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar usuários: ${error.message}`);
    }
  }

  static async getUserById(id) {
    try {
      const response = await axios.get(`${API_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário: ${error.message}`);
    }
  }

  static async createUser(user) {
    try {
      const response = await axios.post(`${API_URL}/users`, user);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  static async updateUser(id, user) {
    try {
      const response = await axios.put(`${API_URL}/users/${id}`, user);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

  static async deleteUser(id) {
    try {
      await axios.delete(`${API_URL}/users/${id}`);
      return { success: true };
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }
}

export default UserService;
