# 🎓 Guia de Estudo - Jest Completo

## 📍 Onde Encontrar Cada Conceito

### 1️⃣ **INICIANTE** - Comece por aqui!

```
└─ README.md
   └─ Estrutura básica
   └─ Como rodar testes
   └─ Primeiros passos
```

### 2️⃣ **BÁSICO** - Fundamentos

```
└─ src/frontend/__tests__/
   ├─ Button.test.jsx          ← Testes simples
   └─ utils.test.js            ← Funções puras

└─ EXEMPLOS_PRATICOS.md
   ├─ 1. Mock de Função
   ├─ 2. Promises
   ├─ 3. Timers
   └─ ...
```

### 3️⃣ **INTERMEDIÁRIO** - Conceitos importantes

```
└─ src/frontend/__tests__/
   └─ Counter.test.jsx         ← Estado React

└─ src/api/__tests__/
   └─ UserService.test.js      ← Mocking de API

└─ EXEMPLOS_PRATICOS.md
   └─ Padrões de teste avançados
```

### 4️⃣ **AVANÇADO** - Casos complexos

```
└─ src/frontend/__tests__/
   └─ UserForm.test.jsx        ← Validação + Async

└─ src/api/__tests__/
   └─ Integration.test.jsx     ← Testes E2E

└─ README.md (seção Troubleshooting)
   └─ Erros comuns e soluções
```

### 5️⃣ **TEMPLATE** - Crie seus próprios testes

```
└─ TEMPLATE_TESTES.md
   ├─ Template para componentes
   ├─ Template para funções
   ├─ Template para APIs
   └─ Checklist rápido
```

---

## 🗂️ Estrutura de Arquivos

```
Jest-tests/
│
├── 📄 package.json                    ← Dependências e scripts
├── 📄 jest.config.js                  ← Config do Jest
├── 📄 jest.setup.js                   ← Setup global
├── 📄 .babelrc                        ← Config Babel
│
├── 📚 DOCUMENTAÇÃO:
│   ├── README.md                      ← 📖 Guia completo
│   ├── SUMARIO.md                     ← 👀 Visão geral
│   ├── EXEMPLOS_PRATICOS.md           ← 💡 10 padrões
│   ├── TEMPLATE_TESTES.md             ← 📋 Templates
│   ├── TROUBLESHOOTING.md             ← 🔧 Problemas
│   └── GUIA_ESTUDO.md                 ← Você está aqui!
│
└── 📁 src/
    │
    ├── 📁 frontend/
    │   ├── components/
    │   │   ├── Button.jsx
    │   │   ├── Counter.jsx
    │   │   └── UserForm.jsx
    │   │
    │   └── __tests__/
    │       ├── Button.test.jsx        (5 testes)
    │       ├── Counter.test.jsx       (5 testes)
    │       ├── UserForm.test.jsx      (9 testes)
    │       └── utils.test.js          (13 testes)
    │
    ├── 📁 api/
    │   ├── services/
    │   │   └── UserService.js
    │   │
    │   └── __tests__/
    │       ├── UserService.test.js    (11 testes)
    │       └── Integration.test.jsx   (5 testes)
    │
    └── 📁 utils/
        └── math.js
```

---

## 📚 Plano de Aprendizado (4 Semanas)

### Semana 1: Fundamentos

- [ ] Ler `README.md`
- [ ] Instalar dependências: `npm install`
- [ ] Rodar testes: `npm test`
- [ ] Estudar `Button.test.jsx`
- [ ] Estudar `utils.test.js`

### Semana 2: Conceitos Intermediários

- [ ] Ler `EXEMPLOS_PRATICOS.md`
- [ ] Estudar `Counter.test.jsx`
- [ ] Estudar `UserService.test.js`
- [ ] Praticar: escrever 5 testes novos
- [ ] Checar cobertura: `npm run test:coverage`

### Semana 3: Casos Avançados

- [ ] Estudar `UserForm.test.jsx`
- [ ] Estudar `Integration.test.jsx`
- [ ] Ler seção Troubleshooting do `README.md`
- [ ] Praticar: testes mais complexos

### Semana 4: Consolidação

- [ ] Revisar todos os testes
- [ ] Usar `TEMPLATE_TESTES.md` para novos testes
- [ ] Praticar: 10 novos testes seus
- [ ] Debugar: entender como funciona cada parte

---

## 🎯 Objetivos por Nível

### ✅ Nível 1: Iniciante

- [ ] Entender estrutura do Jest
- [ ] Rodar testes com sucesso
- [ ] Escrever teste simples de função
- [ ] Usar `expect()` básico

### ✅ Nível 2: Intermediário

- [ ] Testar componentes React
- [ ] Mockar funções com `jest.fn()`
- [ ] Mockar módulos externos
- [ ] Testar código assincronos

### ✅ Nível 3: Avançado

- [ ] Testar formulas com validação
- [ ] Testar integrações frontend + API
- [ ] Configurar testes customizados
- [ ] Atingir 80%+ cobertura

### ✅ Nível 4: Expert

- [ ] Resolver problemas complexos
- [ ] Criar testes parametrizados
- [ ] Performance testing
- [ ] CI/CD com testes

---

## 💡 Dicas de Estudo

### 1. **Estude o Código**

```bash
# Abra os testes e leia linha por linha
vs code src/frontend/__tests__/Button.test.jsx
```

### 2. **Execute e Veja Falhar**

```bash
# Rode um teste
npm test -- Button.test.jsx

# Modifique para falhar e veja mensagem
```

### 3. **Experimente**

```bash
# Clone um teste
# Mude o nome do componente
# Veja o que quebra
```

### 4. **Use Watch Mode**

```bash
npm run test:watch
# Edite e veja mudanças instantaneamente
```

### 5. **Debugue**

```bash
# Adicione console.log no teste
# Rode com --verbose
npm test -- --verbose
```

---

## 🔑 Palavras-Chave Importantes

| Termo                 | Significado             | Arquivo              |
| --------------------- | ----------------------- | -------------------- |
| `describe`            | Agrupar testes          | Todos                |
| `test`                | Um teste                | Todos                |
| `expect`              | Assertion (verificação) | Todos                |
| `jest.fn()`           | Mockar função           | EXEMPLOS_PRATICOS.md |
| `jest.mock()`         | Mockar módulo           | UserService.test.js  |
| `beforeEach`          | Setup antes de teste    | Counter.test.jsx     |
| `afterEach`           | Limpeza após teste      | Integration.test.jsx |
| `async/await`         | Código assincronos      | UserForm.test.jsx    |
| `waitFor`             | Esperar elemento        | Counter.test.jsx     |
| `screen`              | Encontrar elementos     | Button.test.jsx      |
| `userEvent`           | Simular cliques/typing  | Button.test.jsx      |
| `toBeInTheDocument()` | Verificar elemento      | Counter.test.jsx     |
| `toHaveBeenCalled()`  | Verificar se chamou     | UserService.test.js  |

---

## 📊 Matriz de Cobertura Alvo

| Camada    | Alvo     | Realidade |
| --------- | -------- | --------- |
| Frontend  | 80%+     | 85%       |
| API       | 80%+     | 95%       |
| Utils     | 90%+     | 100%      |
| **Geral** | **80%+** | **90%+**  |

---

## 🚀 Próximos Passos Após Aprender

1. **Implemente em seu projeto real**
2. **Configure CI/CD com testes**
3. **Aumente cobertura para 90%+**
4. **Ensine para seu time**
5. **Automatize testing em PRs**

---

## 📞 Recursos Rápidos

| Tipo            | Link                                                    |
| --------------- | ------------------------------------------------------- |
| Documentação    | [jestjs.io](https://jestjs.io/)                         |
| Testing Library | [testing-library.com](https://testing-library.com/)     |
| Cheat Sheet     | [www.codecademy.com/learn](https://www.codecademy.com/) |

---

## ✨ Você consegue! 💪

Comece pelo Nível 1, avance gradualmente, pratique muito, e em 4 semanas você será expert em Jest!

**Dúvidas? Cheque `TROUBLESHOOTING.md`**

---

**Bom estudo! Você está no caminho certo! 🎓**
