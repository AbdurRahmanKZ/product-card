//#3 создание объекта с персонажем с множеством свойств
const person = {
  name: 'AbdurRahman',
  lastname: 'Titanov',
  email: 'titantito2002@gmail.com',
  job: 'CNC operator(AutoCad)',
  age: 23,
  country: 'Kazakhstan',
  city: 'Pavlodar',
  relationshipStatus: 'on it',
}
//#4 создание объекта с машиной и затем дабавление туда владельца
const car = {
  mark: 'Lada',
  model: 'Granta',
  producedYear: 2021,
  color: 'grey',
  gearbox: 'auto',
}
car.owner = person;

//#5 создание функций которая убеждается что есть свойство в maxSpeed в машине
function ensureMaxSpeed(car) {
  if (!('maxSpeed' in car)) {
    car.maxSpeed = 180;
  }
}
//#6 создание функции которая выдает значение свойства объекта
function getProp(object, key) {
  return object[key];
}

//#7 создание массива с названиями продуктов
const fruites = [
  'apple',
  'orange',
  'pineapple',
  'dates',
  'watermelon'
];
//#8 создание массива книг и затем дабавление еще одной в конец 
const booksClassic = [
  { author: 'Margaret Tetcher',
    producedYear: 1987,
    titleColor: 'yellow',
    jenr: 'Roman'
  },
  { author: 'Marko Polo',
    producedYear: 1942,
    titleColor: 'black',
    jenr: 'Horror'
  },
  { author: 'Deil Karnegy',
    producedYear: 1998,
    titleColor: 'blue',
    jenr: 'Psychology'
  },
  { author: 'Jeorge Oruel',
    producedYear: 1912,
    titleColor: 'yellow',
    jenr: 'Action'
  }
];
booksClassic.push({ author: 'Capital in 21th century',
    producedYear: 2000,
    titleColor: 'red',
    jenr: 'Finance'
});
//#9 создание массива с книгами фентези жанра и затем слияние их в одном новом массиве
const booksFantasy = [
  { author: 'Marveleo',
    name: 'Whoever Who',
    producedYear: 2002,
    titleColor: 'red',
    jenr: 'Action'
  },
  { author: 'Uncharted man',
    name: 'In car on the Mountain',
    producedYear: 2005,
    titleColor: 'blue sky',
    jenr: 'Action'
  },
  { author: 'Killer John',
    name: 'Namye',
    producedYear: 2008,
    titleColor: 'redye',
    jenr: 'Comedy'
  }
];
const booksAll = [...booksClassic, ...booksFantasy];
//#10 создание нового массива книг с дабавление свойства isRare которая проверяет дату выхода книги если раньше 2000 года то редкий
const booksWithRare = booksAll.map(book => {
  if (book.producedYear < 2000) {
    return { ...book, isRare: true};
    } else {
      return { ...book, isRare: false};
    }
});