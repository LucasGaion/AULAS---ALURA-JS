const notas  = [10, 6.5, 8, 7.5]

let somasDasNotas = 0

// foreach -> calback - é uma funçao que chama outra
notas.forEach( nota => {
    somasDasNotas += nota
})

let media = somasDasNotas/notas.length

console.log(media)