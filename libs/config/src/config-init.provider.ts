
import { TObject } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'
import * as _ from "lodash";
import { INIT_CONFIG, VALIDATION_SCHEMA } from "./consts"
import { createClient } from 'redis';

/* 
    Init config from default values schema
    connect with this credential to redis
    read rest config, cast to schema types and validate
*/
export const configInitProvider = {
    provide: INIT_CONFIG,
    useFactory: async (validationSchema: TObject<TObject>): Promise<any> => {

        const defaultValues = Value.Create(validationSchema)
        const paths = getObjectPaths(defaultValues)

        const { redis: { config: { user, password }, host, port } } = defaultValues;
        const redisClient = await createClient({
            url: `redis://${user}:${password}@${host}:${port}`
        })
            // todo handling errors
            .on('error', (err) => { throw new Error(err) })
            // todo handle disconnect
            .connect();

        let options = {};
        for (const path of paths) {
            const value = await redisClient.get(
                `config:${path.join(":")}`,
            );
            if (value) {
                _.set(options, path, value);
            }
        }

        options = Value.Cast(validationSchema, options);

        if (!Value.Check(validationSchema, options)) {
            const error = Value.Errors(validationSchema, options).First();
            console.error(error);
            throw new Error(error?.message);
        }

        return options;
    },
    inject: [VALIDATION_SCHEMA]
}


const getObjectPaths = (obj: Record<string, any>, currentPath: string[] = []): string[][] => {
    let paths: string[][] = [];

    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            paths = paths.concat(getObjectPaths(obj[key], [...currentPath, key]));
        } else {
            paths.push([...currentPath, key]);
        }
    }

    return paths;
};