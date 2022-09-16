# Configurar o seu ambiente para rodar o projeto;

- Aprendemos como configurar o seu ambiente para poder criar e rodar um projeto React, instalando o Node/npm e o GIT para controlarmos as versões e/ou baixarmos a aplicação do Github.

# Diferenciar npx de npm;

- Utilizamos o npx na aplicação e aprendemos a diferenciar o comando npx do comando npm, mostrando quando é melhor usar cada um.

# Criar um projeto com create-react-app com template typescript usando npm;

- Criamos um projeto utilizando npx, entendemos que o CRA (Create React App) tem possibilidade de criar projetos com template (optamos pelo typescript), escolhendo o npm como o nosso gerenciador de pacotes padrão.

# O Create React App estrutura o projeto.

- Entendemos como o Create React App estrutura a aplicação, vendo dos arquivos de configuração (tsconfig, package.json, package-lock.json entre outros), até as pastas/arquivos que serão atualizados por nós (pasta src, arquivos app.tsx, index.tsx, index.css entre outros).

# Funciona a pasta public;

- Abordamos sobre a pasta public, para que ela serve e por que raramente mexemos nela, mostramos também o arquivo index.html e como que o React popula ele com os componentes.

# Criar um componente com class component e como utilizá-lo;

- Criamos um componente com class component, mostrando toda a sintaxe desde o extends até o retorno e o export.

# O que é JSX;

- Vimos que o React retorna na verdade um JSX, não um HTML, também falamos de algumas diferenças entre os dois.

# Criar um function component;

- Também criamos um componente com function component (a forma mais atual de se escrever componentes desde a versão 16.8), e mostramos como é mais simples criarmos dessa forma.

# Utilizar o método map para renderizar arrays;

- Renderizamos arrays de JSX com o método map, mostrando que assim conseguimos aproveitar parte do JSX e mudar apenas o valor de item para item, utilizando assim o princípio DRY (Don't Repeat Yourself).

# Usar o CSS inline;

- Aprendemos como criar o CSS inline direto no atributo, como variável JS e utilizando condicionais para mudar o estilo.

# Utilizar CSS e Sass no projeto;

- Vimos como importar CSS e SASS no projeto é fácil dentro de um projeto criado com Create React App.

# Colocar o CSS Modules em um projeto com Create React App + Typescript;

- Configuramos o projeto para aceitar CSS Modules.

# Vantagens de se utilizar CSS Modules.

- Discutimos as vantagens de se utilizar CSS Modules na aplicação.

# Adicionar informações externas ao componente com Props;

- Aprendemos a utilizar propriedades externas para reutilizar componentes de forma única.

# Funciona o props.children;

- Vimos que o React disponibiliza uma props padrão chamada children, que ao contrário das outras props, é escrita dentro do componente, abrindo e fechando a tag como em uma tag HTML.

# O key (chaves) é importante em arrays no React;

- Entendemos mais a fundo como o React trabalha com arrays, e como o key é importante para que ele não se perca entre os itens deste array.

# Usar spread operator de forma consciente para passar props para os componentes;

- Utilizamos o spread operator para poder passar todos os itens de um objeto como props para o componente, também pensamos como isso pode se tornar um problema.

# O React utiliza os estados para atualizar os componentes;

- Aprendemos como o React guarda informações que serão importantes para uma possível nova renderização de um componente.

# Criar estados com function components e class components;

- Criamos estados tanto com function components quanto com class components, entendendo como se cria esses estados em cada tipo.

# Controlar campos de um Formulário com estados;

- Aprendemos a diferença de um formulário/input controlado e não controlado, e como podemos controlá-los para pegar/mudar seus campos como quisermos.

# Criar interfaces e reutilizá-las;

- Vimos como o Typescript nos dá uma forma de criar interfaces para podermos descrever tipos mais complexos, como os props dos componentes.

# Utilizar props e para informar uma mudança de estado;

- Utilizamos a junção de props + state para podermos passar state para outros componentes e para podermos avisar que um estado deve ser mudado.
