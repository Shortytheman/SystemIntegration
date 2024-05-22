// models.js
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.INTEGER
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const Author = sequelize.define('Author', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Author.hasMany(Book, { foreignKey: 'authorId' });
Book.belongsTo(Author, { foreignKey: 'authorId' });

const syncDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log("Database & tables created!");
};

export { sequelize, Book, Author, syncDatabase };
