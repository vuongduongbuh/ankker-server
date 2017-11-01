import * as Express from 'express';

import { DataLoadersContext } from './DataloadersContext';
import { ServicesContext } from './ServicesContext';


export class Context<A> {

    /**
     * We use this property to store the resolve arguments
     * from the root query or mutation, so that we can access
     * them later in a type resolver
     */
    private args: A;

    constructor(
        private request: Express.Request,
        private repsonse: Express.Response,
        private dataLoaders: DataLoadersContext,
        private services: ServicesContext
    ) { }

    public get Args(): A {
        return this.args;
    }

    public get Response(): Express.Response {
        return this.repsonse;
    }

    public get Request(): Express.Request {
        return this.request;
    }

    public get DataLoaders(): DataLoadersContext {
        return this.dataLoaders;
    }

    public get Services(): ServicesContext {
        return this.services;
    }

    public getLanguage(): string[] {
        return this.request.acceptsLanguages();
    }

    public hasUserRoles(roles: string[]): boolean {
        // TODO: Here you should check if the user as the needed roles for the requested query
        return true;
    }

    public setResolveArgument(args: A): void {
        this.args = args;
    }

}
