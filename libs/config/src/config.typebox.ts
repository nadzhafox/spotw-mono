import { Type, type Static } from '@sinclair/typebox'
import { TypeCompiler } from '@sinclair/typebox/compiler'

export const ConfigSchema = Type.Object({
    user: Type.String(),
    password: Type.String(),
    database: Type.String(),
    port: Type.Number({ default: 5432 }),
    host: Type.String({ default: '127.0.0.1' })
})

// todo https://github.com/sinclairzx81/typebox?tab=readme-ov-file#typecompiler
// export const ConfigSchema = TypeCompiler.Compile(T);

export type ConfigSchema = Static<typeof ConfigSchema>    