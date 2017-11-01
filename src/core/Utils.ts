import { NotFoundException } from '../exceptions';


export class Utils {

    static isEmpty<T>(list: T[]): boolean {
        return !Utils.hasResults(list);
    };

    static hasResults<T>(list: T[]): boolean {
        return (typeof list === 'object' && !!list && list.length) ? list.length > 0 : false;
    };

    static assertResult<T>(result: T, idOrKey: number | string): void {
        if (result === null) {
            throw new NotFoundException(`${idOrKey}`);
        }
    }

    static assertResults<T>(list: T[], idOrKey: number | string | number[]): void {
        if (!Utils.hasResults(list)) {
            throw new NotFoundException(`${idOrKey}`);
        }
    }

    static single<T>(list: T[]): T {
        return Utils.hasResults(list) ? list[0] : null;
    }

    static isPositve(number: number): boolean {
        return number >= 0;
    }

}
