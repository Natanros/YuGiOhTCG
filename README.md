# 🎴 Yu-Gi-Oh! Card Explorer

Um explorador de cartas de Yu-Gi-Oh com interface temática e efeitos visuais imersivos, inspirado no universo do anime e jogo de cartas.

![Yu-Gi-Oh](https://img.shields.io/badge/Yu--Gi--Oh!-Card%20Explorer-c9b037?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![CSS3](https://img.shields.io/badge/CSS3-Animations-1572B6?style=for-the-badge&logo=css3)

## 📋 Sobre o Projeto

O **Yu-Gi-Oh! Card Explorer** é uma aplicação web que permite aos fãs de Yu-Gi-Oh explorar e pesquisar cartas do jogo oficial. Com uma interface inspirada no Shadow Realm e nos Millennium Items, o site oferece uma experiência visual única com animações avançadas em CSS.

### ✨ Principais Funcionalidades

- 🔍 **Pesquisa de Cartas**: Busque cartas específicas por nome
- 📚 **Listagem Completa**: Navegue por todas as cartas disponíveis com paginação
- 🎯 **Modal Detalhado**: Visualize informações completas de cada carta
- ✨ **Animação de Materialização**: Efeito espetacular de invocação de cartas em 3D
- 🌙 **Tema Dark**: Interface escura com detalhes dourados inspirada no universo Yu-Gi-Oh
- 🎨 **Efeitos Místicos**: Símbolos Millennium, hieróglifos e partículas animadas no background

## 🚀 Demo

![Demo do Projeto](https://yu-gi-oh-tcg.vercel.app/)

_Clique em qualquer carta para ver a animação de materialização!_

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React** 18.x - Biblioteca JavaScript para construção da interface
- **React Hooks** - useState, useEffect para gerenciamento de estado
- **Axios** - Cliente HTTP para requisições à API
- **CSS3** - Animações e efeitos visuais avançados
  - Keyframes animations
  - Transform 3D
  - Filters (blur, brightness)
  - Gradients (linear, radial, conic)
  - Backdrop filters

### Design

- **Google Fonts** - Tipografia personalizada (Cinzel, Crimson Text, Marcellus)
- **CSS Grid** - Layout responsivo de cards
- **Flexbox** - Organização de componentes

### API

- **YGOPRODeck API** - Base de dados oficial de cartas Yu-Gi-Oh
  - Endpoint: `https://db.ygoprodeck.com/api/v7/cardinfo.php`

## 📂 Estrutura do Projeto

```
Poke-Cards/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon_package_v0.16/
├── src/
│   ├── components/
│   │   ├── Cards.js           # Componente principal com sistema de abas
│   │   ├── Cards.css          # Estilos globais e tema
│   │   ├── SearchTab.js       # Aba de pesquisa
│   │   ├── AllCardsTab.js     # Aba de listagem com paginação
│   │   ├── CardItem.js        # Card individual na grid
│   │   ├── CardModal.js       # Modal com detalhes da carta
│   │   ├── CardModal.css      # Animações de materialização
│   │   └── Pagination.js      # Controles de paginação
│   ├── api.js                 # Configuração do Axios
│   ├── App.js                 # Componente raiz
│   ├── App.css                # Estilos do background e efeitos místicos
│   ├── index.js               # Entry point
│   └── index.css              # Reset e estilos globais
└── package.json
```

## 🎨 Características Visuais

### Paleta de Cores

- **Background**: Tons escuros de cinza (#0a0a0f, #18181f, #13131a)
- **Accent**: Dourado (#c9b037, #a89030)
- **Text**: Bege claro (#f3e9c7, #d4c5a0)

### Animações Especiais

#### 1. **Materialização de Carta (Modal)**

```css
- Rotação 3D (rotateY, rotateX)
- Scale crescente (0.3 → 1)
- Blur decrescente (20px → 0)
- Brightness normalizando (3 → 1)
- Partículas douradas radiantes
```

#### 2. **Background Místico**

- Símbolos Millennium flutuantes
- Hieróglifos egípcios animados
- Círculos mágicos rotativos
- Partículas do Shadow Realm
- Raios de energia sutis

#### 3. **Hover Effects**

- Cards elevam e brilham
- Botões têm transições suaves
- Imagens ganham brilho dourado

## 🚀 Como Executar

### Pré-requisitos

- Node.js 14+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/Poke-Cards.git
cd Poke-Cards
```

2. Instale as dependências

```bash
npm install
```

3. Execute o projeto

```bash
npm start
```

4. Acesse no navegador

```
http://localhost:3000
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout em duas colunas no modal, grid de cards otimizado
- **Tablet**: Ajuste automático do grid de cards
- **Mobile**: Layout empilhado, imagens e textos proporcionais

## 🎯 Funcionalidades Detalhadas

### Pesquisa de Cartas

- Digite o nome da carta no campo de busca
- Resultados exibidos instantaneamente
- Contador de cartas encontradas

### Listagem Completa

- Navegação por páginas (20 cartas por página)
- Indicador de página atual
- Botões de próxima/anterior
- Total estimado: 12.500+ cartas

### Modal de Detalhes

Informações exibidas:

- ✅ Imagem da carta em alta resolução
- ✅ Nome e tipo
- ✅ Descrição completa
- ✅ Atributos (ATK/DEF, Nível, Atributo)
- ✅ Raça e Arquétipo
- ✅ Preços em diferentes marketplaces
- ✅ Link para YGOPRODECK

## 🌟 Destaques Técnicos

### Componentização

- Separação clara de responsabilidades
- Componentes reutilizáveis
- Estado gerenciado com hooks

### Performance

- Lazy loading de imagens
- Paginação para evitar sobrecarga
- Animações otimizadas com CSS

### UX/UI

- Feedback visual imediato
- Estados de loading
- Mensagens de erro amigáveis
- Animações não invasivas

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).

## 👨‍💻 Autor

**Nataniel**

- GitHub: [@Natanros](https://github.com/Natanros)

## 🙏 Agradecimentos

- [YGOPRODeck](https://ygoprodeck.com/) pela API gratuita
- Comunidade Yu-Gi-Oh pela inspiração
- Google Fonts pelas fontes utilizadas

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

**It's time to d-d-d-duel!** 🎴✨
