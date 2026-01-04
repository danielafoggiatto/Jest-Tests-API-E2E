@echo off
REM Script de instalação rápida para Jest-tests

echo.
echo ========================================
echo   JEST-TESTS - Setup Rápido
echo ========================================
echo.

echo [1/3] Verificando Node.js...
node --version
if errorlevel 1 (
    echo.
    echo ERRO: Node.js não está instalado!
    echo Baixe em: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo [2/3] Instalando dependências...
call npm install

if errorlevel 1 (
    echo.
    echo ERRO: Falha ao instalar dependências!
    echo Tente rodar: npm install
    pause
    exit /b 1
)

echo.
echo [3/3] Rodando testes...
call npm test -- --listTests

echo.
echo ========================================
echo   ✅ Instalação concluída com sucesso!
echo ========================================
echo.
echo Próximos passos:
echo   npm test           - Rodar todos os testes
echo   npm run test:watch - Modo watch
echo   npm run test:coverage - Ver cobertura
echo.
echo Leia os arquivos:
echo   - README.md para começar
echo   - GUIA_ESTUDO.md para um plano
echo.
pause
