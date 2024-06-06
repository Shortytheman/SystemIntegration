// index.js
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { readFileSync } from 'fs';
import { Book, Author, syncDatabase } from './models.js';

// Read the GraphQL schema from the file
const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }));

// Resolvers
const resolvers = {
    Query: {
        books: () => Book.findAll(),
        book: (_, { id }) => Book.findByPk(id),
        authors: () => Author.findAll(),
        author: (_, { id }) => Author.findByPk(id)
    },
    Mutation: {
        createBook: async (_, { authorId, title, releaseYear }) => {
            const book = await Book.create({ authorId, title, releaseYear });
            return book;
        },
        updateBook: async (_, { id, authorId, title, releaseYear }) => {
            const book = await Book.findByPk(id);
            if (book) {
                await book.update({ authorId, title, releaseYear });
                return book;
            }
            return null;
        },
        deleteBook: async (_, { id }) => {
            const result = await Book.destroy({ where: { id } });
            return { message: result ? 'Book deleted' : 'Book not found' };
        },
        createAuthor: async (_, { name }) => {
            const author = await Author.create({ name });
            return author;
        },
        updateAuthor: async (_, { id, name }) => {
            const author = await Author.findByPk(id);
            if (author) {
                await author.update({ name });
                return author;
            }
            return null;
        },
        deleteAuthor: async (_, { id }) => {
            const result = await Author.destroy({ where: { id } });
            return { message: result ? 'Author deleted' : 'Author not found' };
        }
    },
    Book: {
        author: (book) => Author.findByPk(book.authorId)
    },
    Author: {
        books: (author) => Book.findAll({ where: { authorId: author.id } })
    }
};

// Initialize the database
syncDatabase();

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Initialize an Express application
const app = express();

// Apply the Apollo GraphQL middleware to the Express application
await server.start();
server.applyMiddleware({ app });

// Start the server
app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
