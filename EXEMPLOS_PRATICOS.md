// Exemplos de Padrões de Teste Úteis

// 1. TESTE COM MOCK DE FUNÇÃO
describe('Exemplo: Mock de Função', () => {
test('deve chamar callback com argumentos corretos', () => {
const mockCallback = jest.fn();
const numbers = [1, 2, 3];

    numbers.forEach(mockCallback);

    expect(mockCallback).toHaveBeenCalledTimes(3);
    expect(mockCallback).toHaveBeenCalledWith(1, 0, numbers);
    expect(mockCallback).toHaveBeenCalledWith(2, 1, numbers);
    expect(mockCallback).toHaveBeenCalledWith(3, 2, numbers);

});
});

// 2. TESTE COM PROMISES
describe('Exemplo: Promises', () => {
test('deve resolver com valor correto', () => {
const promise = Promise.resolve(42);
return expect(promise).resolves.toBe(42);
});

test('deve rejeitar com erro correto', () => {
const promise = Promise.reject(new Error('erro'));
return expect(promise).rejects.toThrow('erro');
});
});

// 3. TESTE COM TIMERS
describe('Exemplo: Timers', () => {
test('deve executar callback após timeout', () => {
jest.useFakeTimers();
const callback = jest.fn();

    setTimeout(callback, 1000);
    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();
    expect(callback).toHaveBeenCalled();

    jest.useRealTimers();

});
});

// 4. TESTE COM SPY
describe('Exemplo: Spy em Objeto', () => {
const user = {
getName() {
return 'João';
},
};

test('deve espiar método do objeto', () => {
const spy = jest.spyOn(user, 'getName');

    user.getName();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockRestore();

});
});

// 5. TESTE COM SETUP E TEARDOWN
describe('Exemplo: Setup e Teardown', () => {
let database;

beforeAll(() => {
// Executado uma vez antes de todos os testes
database = { users: [] };
});

beforeEach(() => {
// Executado antes de cada teste
database.users = [];
});

afterEach(() => {
// Executado depois de cada teste
database.users = [];
});

afterAll(() => {
// Executado uma vez após todos os testes
database = null;
});

test('deve adicionar usuário', () => {
database.users.push({ id: 1, name: 'João' });
expect(database.users).toHaveLength(1);
});

test('database limpo antes deste teste', () => {
expect(database.users).toHaveLength(0);
});
});

// 6. TESTE PARAMETRIZADO
describe('Exemplo: Testes Parametrizados', () => {
const testCases = [
{ input: 2, expected: 4 },
{ input: 3, expected: 9 },
{ input: 4, expected: 16 },
];

test.each(testCases)(
'square($input) deve retornar $expected',
({ input, expected }) => {
expect(input \* input).toBe(expected);
}
);
});

// 7. TESTE COM SNAPSHOT
describe('Exemplo: Snapshot', () => {
test('componente deve renderizar corretamente', () => {
const component = {
name: 'Button',
props: { label: 'Clique' },
render() {
return `<button>${this.props.label}</button>`;
},
};

    expect(component.render()).toMatchSnapshot();

});
});

// 8. TESTE COM MOCK DE MÓDULO
describe('Exemplo: Mock de Módulo', () => {
test('pode mockar um módulo inteiro', () => {
// jest.mock('@/api/service');
// const mockService = require('@/api/service');
// mockService.getData.mockResolvedValue({ data: 'test' });
});
});

// 9. TESTE COM MÚLTIPLAS ASSERÇÕES
describe('Exemplo: Múltiplas Asserções', () => {
test('deve validar objeto complexo', () => {
const user = {
id: 1,
name: 'João',
email: 'joao@example.com',
roles: ['admin', 'user'],
};

    expect(user).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.stringMatching(/@/),
      roles: expect.arrayContaining(['admin']),
    });

});
});

// 10. TESTE COM REJEIÇÃO DE PROMISE
describe('Exemplo: Tratamento de Erros', () => {
test('deve capturar erro específico', async () => {
const asyncFunc = async () => {
throw new TypeError('Type error occurred');
};

    await expect(asyncFunc()).rejects.toThrow(TypeError);
    await expect(asyncFunc()).rejects.toThrow('Type error occurred');

});
});
