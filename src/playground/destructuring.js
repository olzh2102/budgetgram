// Object desctructuring
const book = {
  title: 'The Perk of being Wallflower',
  author: 'Steven Chbosky',
  publisher: {
    name: 'Pengiun'
  }
};

const { name: publisherName = 'Self-publish'} = book.publisher;
console.log(publisherName);

// Array desctructuring 

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];
const [ drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}`);