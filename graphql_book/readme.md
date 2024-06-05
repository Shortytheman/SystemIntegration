# Example Queries and Mutations


## Create an author with name "hello2" and give us the id in return

```javascript
mutation {
  createAuthor(name: "hello2") {
    id
  }
}
```
## Fetch author with Id of 3, and respond with name only.

```javascript
Query{
  author(id: 3) {
    name
  }
}
```
## Create a book, and attach the author with id "1" to it

```javascript
mutation{
  createBook(authorId: 1, title: "book2", releaseYear: 1881) {
    authorId
    title
  }
}
```
## Fetch all book and give os all the information on book and attached author

```javascript
query {
  books {
    id
    title
    releaseYear
    author {
      id
      name
    }
  }
}
```