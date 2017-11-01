import { GraphQLFieldDefinition } from 'graphql';

import { DateType } from '../types/DateType';


export class UpdatedAtField implements GraphQLFieldDefinition {

    public type = DateType;
    public name = 'updated at';
    public description = 'This is the date when the object was updated';
    public args;

}
