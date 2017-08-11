export function formatAuthor(authors) {
  let author = '';
  if (authors && authors instanceof Array) {
    authors.forEach(aut => {
      author += `${aut},`;
    });
    author = author.substr(0, author.length - 2);
  } else if (authors) {
    author = authors;
  }
  return author;
}
