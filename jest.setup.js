import '@testing-library/jest-dom';

// Mock para variáveis de ambiente
process.env.API_URL = 'http://localhost:3000/api';

// Configuração global para timeouts
jest.setTimeout(10000);
