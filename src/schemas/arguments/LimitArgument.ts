import { GraphQLArgumentConfig, GraphQLInt } from 'graphql';

import { Utils } from '../../core/Utils';
import { ValidationException } from '../../exceptions';


export class LimitArgument implements GraphQLArgumentConfig {

    public type = GraphQLInt;
    public description = 'This is the max amount of data that should be send to the client';
    public defaultValue = 100;

    static validate(limit: number): void {
        if (!Utils.isPositve(limit)) {
            throw new ValidationException('Limit must be positive');
        }
    }

}
