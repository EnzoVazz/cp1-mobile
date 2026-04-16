# 📱 Checkpoint 02 - Mobile Application Development

Projeto desenvolvido como parte da avaliação (Checkpoint 02) da disciplina de Mobile Application Development, no curso de Tecnologia em Desenvolvimento de Sistemas (1TDSPF) da FIAP.

## 🎯 Objetivo do Projeto

Criar um aplicativo mobile focado na entrada de dados, persistência local e navegação fluida. O projeto garante que os dados do usuário não sejam perdidos ao fechar o app, otimizando a experiência através do preenchimento automático.

## ✨ Funcionalidades

* **Navegação Integrada:** Separação clara entre a entrada de dados (Cadastro) e a visualização (Perfil) utilizando o sistema moderno de roteamento baseado em arquivos.
* **Validação de Formulário:** Bloqueio de submissões vazias com feedback direto ao usuário via alertas nativos.
* **Máscaras de Input:** Formatação automática e intuitiva para os campos de CPF e Telefone utilizando a biblioteca `react-native-mask-text`.
* **Persistência de Dados:** Uso do `AsyncStorage` para salvar as informações de cadastro localmente no dispositivo.
* **Autopreenchimento:** O aplicativo recupera e preenche automaticamente os dados do formulário sempre que é iniciado, garantindo a retenção das informações.

## 🛠️ Tecnologias Utilizadas

* React Native
* Expo
* TypeScript
* Expo Router (`expo-router`)
* Async Storage (`@react-native-async-storage/async-storage`)
* React Native Mask Text (`react-native-mask-text`)

## 📂 Estrutura do Projeto

```text
📦 raiz-do-projeto
 ┣ 📂 app
 ┃ ┣ 📜 _layout.tsx    # Configuração e gerenciamento da Stack de rotas
 ┃ ┣ 📜 index.tsx      # Tela de Cadastro: formulário, validação e persistência
 ┃ ┗ 📜 perfil.tsx     # Tela de destino: exibição dinâmica dos dados e perfil do aluno
 ┣ 📂 assets           # Arquivos estáticos e imagens locais (ex: foto de perfil)
 ┗ 📜 package.json     # Dependências e scripts de execução do projeto
```

## 🚀 Como Executar

1. Clone o repositório para sua máquina local.
2. Certifique-se de ter o Node.js instalado.
3. Instale as dependências do projeto executando o comando no terminal: `npm install`
4. Inicie o servidor do Expo limpando o cache para garantir o roteamento correto: `npx expo start -c`
5. Escaneie o QR Code com o aplicativo **Expo Go** no seu celular ou pressione **w** no terminal para testar diretamente no navegador web.