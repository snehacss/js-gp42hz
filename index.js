
function getElement(id) {
  return document.getElementById(id);
}

fetch('package.json')
.then(res => res.json())
.then((res) => {
  const data = res.data;
  getElement('name').innerHTML =  'Name: ' + data.name;
  getElement('symbol').innerHTML = 'Symbol: ' + data.symbol;
  getElement('rank').innerHTML = 'Rank: ' + data.rank;
  getElement('price').innerHTML = 'Price: ' + data.quotes.USD.price;
  // do the rest here
});