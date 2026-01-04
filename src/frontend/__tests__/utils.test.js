import {
  sum,
  subtract,
  multiply,
  divide,
  validateEmail,
  formatCurrency,
} from '../../utils/math';

describe('Testes das Funções Utilitárias', () => {
  describe('Operações matemáticas', () => {
    test('sum deve adicionar dois números', () => {
      expect(sum(2, 3)).toBe(5);
      expect(sum(0, 0)).toBe(0);
      expect(sum(-5, 5)).toBe(0);
    });

    test('subtract deve subtrair dois números', () => {
      expect(subtract(10, 3)).toBe(7);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(3, 3)).toBe(0);
    });

    test('multiply deve multiplicar dois números', () => {
      expect(multiply(4, 5)).toBe(20);
      expect(multiply(0, 100)).toBe(0);
      expect(multiply(-3, 4)).toBe(-12);
    });

    test('divide deve dividir dois números', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(15, 3)).toBe(5);
      expect(divide(7, 2)).toBe(3.5);
    });

    test('divide deve lançar erro ao dividir por zero', () => {
      expect(() => divide(10, 0)).toThrow('Divisão por zero!');
    });
  });

  describe('Validação de Email', () => {
    test('deve validar emails corretos', () => {
      expect(validateEmail('usuario@example.com')).toBe(true);
      expect(validateEmail('teste.email@domain.co.uk')).toBe(true);
      expect(validateEmail('nome+tag@site.org')).toBe(true);
    });

    test('deve rejeitar emails inválidos', () => {
      expect(validateEmail('emailinvalido')).toBe(false);
      expect(validateEmail('email@')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
      expect(validateEmail('email @domain.com')).toBe(false);
    });
  });

  describe('Formatação de Moeda', () => {
    test('deve formatar valores em BRL', () => {
      const result = formatCurrency(100);
      expect(result).toContain('R$');
      expect(result).toContain('100');
    });

    test('deve formatar diferentes valores', () => {
      const result1 = formatCurrency(1000.50);
      const result2 = formatCurrency(0.01);
      
      expect(result1).toContain('1.000');
      expect(result2).toContain('0,01');
    });
  });
});
