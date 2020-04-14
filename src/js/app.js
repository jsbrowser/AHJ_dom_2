const file = [{
  id: 26,
  title: 'Побег из Шоушенка',
  imdb: 9.30,
  year: 1994,
},
{
  id: 25,
  title: 'Крёстный отец',
  imdb: 9.20,
  year: 1972,
},
{
  id: 27,
  title: 'Крёстный отец 2',
  imdb: 9.00,
  year: 1974,
},
{
  id: 1047,
  title: 'Тёмный рыцарь',
  imdb: 9.00,
  year: 2008,
},
{
  id: 223,
  title: 'Криминальное чтиво',
  imdb: 8.90,
  year: 1994,
},
];

const sortRows = (data, dir, type) => {
  const tbodies = document.getElementsByTagName('tbody');
  const tmpTrs = tbodies[0].getElementsByTagName('tr');

  const allTrs = [];
  let tmp;

  for (let i = 0; i < tmpTrs.length; i += 1) {
    tmp = tmpTrs[i].getAttribute(`data-${data}`);
    if (tmp) {
      tmpTrs[i].sort_value = type(tmp);
      allTrs.push(tmpTrs[i]);
    }
  }

  allTrs.sort((a, b) => {
    if (a.sort_value === b.sort_value) {
      return 0;
    }

    return (a.sort_value > b.sort_value ? 1 : -1);
  });

  if (dir) {
    allTrs.reverse();
  }

  let lastRow = null;
  for (let i = allTrs.length - 1; i > 0; i -= 1) {
    allTrs[i].parentNode.insertBefore(allTrs[i], lastRow);
    lastRow = allTrs[i];
  }

  document.getElementById('id').textContent = `${'id'}`;
  document.getElementById('title').textContent = `${'title'}`;
  document.getElementById('year').textContent = `${'year'}`;
  document.getElementById('imdb').textContent = `${'imdb'}`;

  if (dir === 1) {
    document.getElementById(data).textContent = `${data} ↑`;
  } else if (dir === 0) {
    document.getElementById(data).textContent = `${data} ↓`;
  }
};

const trEl = document.createElement('table');
const idArr = [];
const titleArr = [];
const imdbArr = [];
const yearArr = [];
for (let i = 0; i < 5; i += 1) {
  idArr[i] = file[i].id;
  titleArr[i] = file[i].title;
  imdbArr[i] = file[i].imdb.toFixed(2);
  yearArr[i] = file[i].year;
}

trEl.innerHTML = `
  <table id = "table">
  <thead>
  <tr>
    <th id='id'>id</th>
    <th id='title'>title</th>
    <th id='year'>year</th>
    <th id='imdb'>imdb</th>
  </tr>
  </thead>
  <tbody>
  <tr data-id="${idArr[0]}" data-title="${titleArr[0]}" data-year="${yearArr[0]}" data-imdb="${imdbArr[0]}">
    <th>${idArr[0]}</th>
    <th>${titleArr[0]}</th>
    <th>(${yearArr[0]})</th>
    <th>imdb: ${imdbArr[0]}</th>
  </tr>
  <tr data-id="${idArr[1]}" data-title="${titleArr[1]}" data-year="${yearArr[1]}" data-imdb="${imdbArr[1]}">
    <th>${idArr[1]}</th>
    <th>${titleArr[1]}</th>
    <th>(${yearArr[1]})</th>
    <th>imdb: ${imdbArr[1]}</th>
  </tr>
  <tr data-id="${idArr[2]}" data-title="${titleArr[2]}" data-year="${yearArr[2]}" data-imdb="${imdbArr[2]}">
    <th>${idArr[2]}</th>
    <th>${titleArr[2]}</th>
    <th>(${yearArr[2]})</th>
    <th>imdb: ${imdbArr[2]}</th>
  </tr>
  <tr data-id="${idArr[3]}" data-title="${titleArr[3]}" data-year="${yearArr[3]}" data-imdb="${imdbArr[3]}">
    <th>${idArr[3]}</th>
    <th>${titleArr[3]}</th>
    <th>(${yearArr[3]})</th>
    <th>imdb: ${imdbArr[3]}</th>
  </tr>
  <tr data-id="${idArr[4]}" data-title="${titleArr[4]}" data-year="${yearArr[4]}" data-imdb="${imdbArr[4]}">
    <th>${idArr[4]}</th>
    <th>${titleArr[4]}</th>
    <th>(${yearArr[4]})</th>
    <th>imdb: ${imdbArr[4]}</th>
  </tr>
  </tbody>
  </table>
`;
document.body.appendChild(trEl);

const arr = [
  ['id', 0, Number],
  ['id', 1, Number],
  ['title', 0, String],
  ['title', 1, String],
  ['year', 0, Number],
  ['year', 1, Number],
  ['imdb', 0, Number],
  ['imdb', 1, Number],
];

let i = 0;
setInterval(() => {
  sortRows(arr[i][0], arr[i][1], arr[i][2]);
  i += 1;
  if (i >= 8) { i = 0; }
}, 2000);
