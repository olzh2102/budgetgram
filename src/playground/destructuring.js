const book = {
  title: 'The Perk of being Wallflower',
  author: 'Steven Chbosky',
  publisher: {
    name: 'Pengiun'
  }
};

const { name: publisherName = 'Self-publish'} = book.publisher;
console.log(publisherName);