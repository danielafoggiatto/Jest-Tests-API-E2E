# 📚 GUIA COMPLETO: TESTES COM JEST

> Projeto profissional com **43 testes**, **3 componentes React**, **1 serviço de API**, documentação completa e plano de aprendizado de 4 semanas.

## 🎯 INÍCIO RÁPIDO

```bash
npm install
npm test
npm run test:coverage
npm run test:watch
```

---

## 📂 ESTRUTURA DO PROJETO

```
Jest-tests/
├── 🔧 CONFIGURAÇÃO
│   ├── package.json              (Dependências)
│   ├── jest.config.js            (Config Jest)
│   ├── jest.setup.js             (Setup global)
│   └── .babelrc                  (Babel/React)
│
├── 📚 DOCUMENTAÇÃO
│   ├── README.md                 (Este arquivo - guia completo)
│   ├── GUIA_ESTUDO.md            (Plano de 4 semanas)
│   ├── EXEMPLOS_PRATICOS.md      (10 padrões)
│   └── TEMPLATE_TESTES.md        (Templates reutilizáveis)
│
└── 📁 src/
    ├── frontend/
    │   ├── components/           (3 componentes React)
    │   │   ├── Button.jsx
    │   │   ├── Counter.jsx
    │   │   └── UserForm.jsx
    │   └── __tests__/            (4 suites de testes)
    │       ├── Button.test.jsx       (5 testes)
    │       ├── Counter.test.jsx      (5 testes)
    │       ├── UserForm.test.jsx     (9 testes)
    │       └── utils.test.js         (13 testes)
    │
    ├── api/
    │   ├── services/
    │   │   └── UserService.js    (CRUD com axios)
    │   └── __tests__/
    │       ├── UserService.test.js   (11 testes)
    │       └── Integration.test.jsx  (5 testes)
    │
    └── utils/
        └── math.js               (Funções auxiliares)
```

---

## 📊 O QUE FOI CRIADO

### ✅ 43 TESTES PRONTOS PARA RODAR

| Arquivo              | Testes | Tipo                  | Dificuldade    |
| -------------------- | ------ | --------------------- | -------------- |
| Button.test.jsx      | 5      | Componente simples    | ⭐ Fácil       |
| Counter.test.jsx     | 5      | Componente com estado | 🌟 Médio       |
| UserForm.test.jsx    | 9      | Validação + Async     | ⭐⭐⭐ Difícil |
| utils.test.js        | 13     | Funções puras         | ⭐ Fácil       |
| UserService.test.js  | 11     | API CRUD              | 🌟 Médio       |
| Integration.test.jsx | 5      | Frontend + API        | ⭐⭐⭐ Difícil |
| **TOTAL**            | **43** | **-**                 | **-**          |

### ✅ COMPONENTES INCLUSOS

- **Button.jsx** - Botão simples (renderização, click, disabled)
- **Counter.jsx** - Contador com estado (increment, decrement, reset)
- **UserForm.jsx** - Formulário com validação e submissão async

### ✅ SERVIÇO DE API

- **UserService.js** - CRUD com axios (GET, POST, PUT, DELETE)

### ✅ FUNÇÕES UTILITÁRIAS

- Operações matemáticas (sum, subtract, multiply, divide)
- Validação de email
- Formatação de moeda

---

## 🚀 EXECUTAR TESTES

### Todos os testes:

```bash
npm test
```

### Modo watch (detecta mudanças):

```bash
npm run test:watch
```

### Ver cobertura de código:

```bash
npm run test:coverage
```

### Apenas frontend:

```bash
npm run test:frontend
```

### Apenas API:

```bash
npm run test:api
```

### Teste específico:

```bash
npm test -- Button.test.jsx
```

### Por padrão de nome:

```bash
npm test -- -t "deve renderizar"
```

### Verbose (mais detalhes):

```bash
npm test -- --verbose
```

---

## 📝 TIPOS DE TESTES INCLUSOS

### 1. TESTES DE COMPONENTES REACT

- Renderização
- Interações do usuário (clicks, typing)
- Mudanças de estado
- Props e callbacks
- Validação de formulários

### 2. TESTES DE FUNÇÕES PURAS

- Operações matemáticas
- Validação de dados
- Formatação
- Tratamento de erros

### 3. TESTES DE API

- Mocking com axios
- CRUD completo
- Tratamento de erros
- Múltiplas chamadas

### 4. TESTES DE INTEGRAÇÃO

- Frontend + API juntos
- Fluxo completo do usuário
- Validação + Submissão + API

---

## 💡 EXEMPLOS DE ASSERÇÕES

### Testes Básicos

```javascript
expect(value).toBe(5); // Igualdade estrita
expect(text).toEqual("hello"); // Comparação profunda
expect(array).toHaveLength(3); // Comprimento
expect(func).toHaveBeenCalled(); // Foi chamado
expect(func).toHaveBeenCalledTimes(2); // Chamado 2 vezes
```

### Testes com DOM

```javascript
expect(element).toBeInTheDocument(); // Existe
expect(button).toBeDisabled(); // Desabilitado
expect(input).toHaveValue("texto"); // Tem valor
expect(text).toHaveTextContent("hello"); // Contém texto
```

### Testes Assincronos

```javascript
await expect(promise).resolves.toBe(5); // Resolve
await expect(promise).rejects.toThrow(); // Rejeita
```

---

## 🔍 BOAS PRÁTICAS

### 1. Padrão AAA (Arrange, Act, Assert)

```javascript
test("descrição do teste", () => {
  // Arrange - Preparar dados
  const input = { name: "João" };

  // Act - Executar ação
  const result = processUser(input);

  // Assert - Verificar resultado
  expect(result).toBe(expected);
});
```

### 2. Testar Comportamento, não Implementação

- ✅ Teste o que o usuário vê e faz
- ❌ Não teste variáveis internas

### 3. Usar `data-testid` para Seletores

```javascript
<button data-testid="submit-btn">Enviar</button>;
const btn = screen.getByTestId("submit-btn");
```

### 4. Mockar Dependências Externas

```javascript
jest.mock("axios");
axios.get.mockResolvedValue({ data: mockData });
```

### 5. Limpar Mocks entre Testes

```javascript
afterEach(() => {
  jest.clearAllMocks();
});
```

### 6. Usar Setup e Teardown

```javascript
beforeEach(() => {
  // Executado antes de cada teste
});

afterEach(() => {
  // Executado depois de cada teste
});
```

---

## 📊 COBERTURA DE CÓDIGO

### Gerar relatório:

```bash
npm run test:coverage
```

### Interpretar resultado:

- **Statements**: % de linhas executadas
- **Branches**: % de caminhos condicionais (if/else)
- **Functions**: % de funções testadas
- **Lines**: % de linhas de código

**Meta recomendada**: 80%+ geral, 100% funções críticas

---

## 🐛 TROUBLESHOOTING

### P: Como rodar apenas um teste?

```bash
npm test -- Button.test.jsx
npm test -- -t "deve renderizar"
```

### P: Como ver mais detalhes?

```bash
npm test -- --verbose
```

### P: Como debugar?

```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

### Erro: "Cannot find module 'react'"

```bash
npm install react react-dom
```

### Erro: "Jest encountered an unexpected token"

Verifique `.babelrc` e `jest.config.js` estão configurados corretamente.

### Erro: "Cannot find module '@testing-library/react'"

```bash
npm install @testing-library/react @testing-library/jest-dom
```

### Erro: "ReferenceError: describe is not defined"

- Verifique se arquivo termina em `.test.js` ou `.test.jsx`
- Verifique se está em pasta `__tests__` ou com sufixo `.test.`

### Erro: "Not wrapped in act(...)"

Use `waitFor` para código assincronos:

```javascript
await waitFor(() => {
  expect(element).toBeInTheDocument();
});
```

### Erro: "TypeError: Cannot read property 'toBeInTheDocument'"

Adicione em `jest.setup.js`:

```javascript
import "@testing-library/jest-dom";
```

---

## 🎓 PLANO DE APRENDIZADO (4 SEMANAS)

### SEMANA 1: FUNDAÇÃO

- [ ] Instalar: `npm install`
- [ ] Rodar testes: `npm test`
- [ ] Ler: README.md
- [ ] Estudar: Button.test.jsx
- [ ] Estudar: utils.test.js

### SEMANA 2: INTERMEDIÁRIO

- [ ] Ler: EXEMPLOS_PRATICOS.md
- [ ] Estudar: Counter.test.jsx
- [ ] Estudar: UserService.test.js
- [ ] Escrever: 5 testes novos
- [ ] Ver cobertura: `npm run test:coverage`

### SEMANA 3: AVANÇADO

- [ ] Estudar: UserForm.test.jsx
- [ ] Estudar: Integration.test.jsx
- [ ] Escrever: 5 testes complexos
- [ ] Atingir: 80% cobertura

### SEMANA 4: CONSOLIDAÇÃO

- [ ] Revisar todos os testes
- [ ] Escrever: 10 testes seus
- [ ] Atingir: 90% cobertura
- [ ] Dominar: Jest completamente!

---

## 📚 DOCUMENTAÇÃO DISPONÍVEL

| Arquivo              | Descrição                         |
| -------------------- | --------------------------------- |
| README.md            | Guia completo (este arquivo)      |
| GUIA_ESTUDO.md       | Plano detalhado de 4 semanas      |
| EXEMPLOS_PRATICOS.md | 10 padrões de teste úteis         |
| TEMPLATE_TESTES.md   | Templates para criar novos testes |

---

## 💻 COMANDOS PRINCIPAIS

```bash
# Instalar dependências
npm install

# Rodar todos os testes
npm test

# Modo watch (auto-reload)
npm run test:watch

# Ver cobertura
npm run test:coverage

# Apenas frontend
npm run test:frontend

# Apenas API
npm run test:api

# Teste específico
npm test -- Button.test.jsx

# Por padrão de nome
npm test -- -t "deve"

# Verbose
npm test -- --verbose
```

---

## 🎯 CHECKLIST DE PROGRESSO

- [ ] npm install executado com sucesso
- [ ] npm test passando (43 testes)
- [ ] README.md lido
- [ ] Button.test.jsx entendido
- [ ] utils.test.js entendido
- [ ] Counter.test.jsx entendido
- [ ] UserService.test.js entendido
- [ ] UserForm.test.jsx entendido
- [ ] Integration.test.jsx entendido
- [ ] 5 testes novos escritos
- [ ] 80%+ cobertura atingida
- [ ] 90%+ cobertura atingida

---

## 🏆 APÓS COMPLETAR

Você será capaz de:

- ✅ Configurar Jest do zero
- ✅ Testar componentes React
- ✅ Testar APIs e serviços
- ✅ Mockar dependências
- ✅ Escrever testes assincronos
- ✅ Medir cobertura
- ✅ Debugar testes
- ✅ Seguir melhores práticas
- ✅ Implementar em projetos reais

---

## 📞 RECURSOS

- [Jest Docs](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Node.js](https://nodejs.org/)

---

**Desenvolvido com ❤️ para QA**
**Última atualização: Janeiro 2026**
