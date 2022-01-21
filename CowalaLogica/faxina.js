const deleteObj = {
  name: 'Gabriel',
  age: 22,
  manufacturing: false,
  car: 'BMW'

}

function clean(objeto) {
  for (let item in objeto) {
    if (!objeto[item]) {
      delete objeto[item];
    }
  }
  return objeto;
}

console.log(clean(deleteObj));