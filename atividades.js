// Atividade 1
console.log(" ------------ Atividade 1 ------------")
const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

// Encontra livros por ID
function encontraLivro (id) {
    const livroEncontrado = biblioteca.find((livro) => {return livro['id'] === id });

    if (livroEncontrado) {
        return livroEncontrado;
    } else {
        return "Nenhum livro encontrado com esse ID."
    }
}

console.log(encontraLivro(4))

// Atividade 2
console.log(" ------------ Atividade 2 ------------")

const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]


function filtrarFilmesPorAno(ano) {
    const filmesEncontrados = catalogoFilmes.filter((filme) => {
        return filme.anoLancamento === ano
    })
    if (filmesEncontrados.length >= 1) {
        return filmesEncontrados;
    } else {
        return "Nenhum filme encontrado com essa data de lancamento."
    }
}

console.log(filtrarFilmesPorAno(1999))

// Atividade 3
console.log(" ------------ Atividade 3 ------------")

const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco(maxPreco) {
    const produtosFiltrados = listaProdutos.filter((produto) => { return produto.preco <= maxPreco })

    return produtosFiltrados.sort((a,b) => {
        if (a["preco"] < b["preco"]) return -1;
        if (a["preco"] > b["preco"]) return 1;
        return 0;
    })
}

console.log(filtrarOrdenarProdutosPorPreco(25.99))


// Atividade 4
console.log(" ------------ Atividade 4 ------------")

const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

function compararIdadeCrescente(a, b) {
    return a.idade - b.idade; // Retorna valor negativo se `a` < `b`, 0 se iguais, positivo se `a` > `b`
}

function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade; // Inverte a lógica de crescente
}

console.log("Idade Crescente:");
console.log(ordenarAnimais(compararIdadeCrescente));

console.log("Idade Decrescente:");
console.log(ordenarAnimais(compararIdadeDecrescente));


// Atividade 5
console.log(" ------------ Atividade 5 ------------")

const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(id) {
   for (const departamento of departamentos) {
    const funcionario = departamento.funcionarios.find((funcionario) => funcionario["id"] === id)
    if (funcionario) {
        return funcionario
    }
   }
   return null;
}

const funcionarioEncontrado = encontrarFuncionarioPorId(110);

if (funcionarioEncontrado) {
    console.log(funcionarioEncontrado)
} else {
    console.log("Nenhum funcionario encontrado")
}