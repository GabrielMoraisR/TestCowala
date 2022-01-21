const arrayOrganizar =  [
  {
    souEu: true,
    responsavel: false,
    nome: 'Gabriel de Morais'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Renata Aline'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Leandro de Morais'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Ademir Tassi'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Marielza Morais'
  }
]

function classificador(a, b) {
  if (a.souEu > b.souEu) {
    return -1;
  } 
  if (a.souEu < b.souEu) {
    return 1;
  }
  if (a.responsavel > b.responsavel ) {
    return -1;
  }
}

console.log(array.sort(classificador));