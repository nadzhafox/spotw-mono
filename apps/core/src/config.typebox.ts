import { Type, type Static } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'

export const ConfigSchema = Type.Object({
    postgres: Type.Object({
        user: Type.String(),
        password: Type.String(),
        database: Type.String(),
        port: Type.Number({ default: 5432 }),
        host: Type.String({ default: '127.0.0.1' })
    }),
    app: Type.Object({
        port: Type.Number({ default: 3000 }),
        host: Type.String({ default: '0.0.0.0' }),
    }),
    redis: Type.Object({
        config: Type.Object({
            user: Type.String({ default: "config" }),
            password: Type.String({ default: "config-password" })
        }),
        port: Type.Number({ default: 6379 }),
        host: Type.String({ default: 'localhost' }),
    })
})

// todo https://github.com/sinclairzx81/typebox?tab=readme-ov-file#typecompiler
// export const ConfigSchema = TypeCompiler.Compile(T);

export type ConfigSchema = Static<typeof ConfigSchema>

export function validateConfigSchema(data: unknown): ConfigSchema {
    const defaulted = Value.Default(ConfigSchema, data)
    const converted = Value.Convert(ConfigSchema, defaulted)
    const cleaned = Value.Clean(ConfigSchema, converted)
    return cleaned as ConfigSchema;
}