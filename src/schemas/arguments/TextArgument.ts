import { GraphQLArgumentConfig, GraphQLString, GraphQLNonNull } from 'graphql';

import { ValidationException } from '../../exceptions';


export interface ITextArgument {
    text: string;
}

export class TextArgument implements GraphQLArgumentConfig {

    public type = new GraphQLNonNull(GraphQLString);
    public description = 'This argument is used for the search query';

    static validate(text: string): void {
        if (text.length < 3) {
            throw new ValidationException('The text argument must have at least 3 characters');
        }
        if (text.indexOf('%') >= 0) {
            throw new ValidationException('% is not a valid search character');
        }
    }

}
