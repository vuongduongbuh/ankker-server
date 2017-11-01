import { GraphQLObjectType } from 'graphql';

import {
    IdField,
    FirstNameField,
    LastNameField,
    UpdatedAtField,
    CreatedAtField,
    BooksField
} from '../fields';


export const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'A single author.',
    fields: () => ({
        id: new IdField(),
        firstName: new FirstNameField(),
        lastName: new LastNameField(),
        books: new BooksField(),
        updatedAt: new UpdatedAtField(),
        createdAt: new CreatedAtField()
    })
});
