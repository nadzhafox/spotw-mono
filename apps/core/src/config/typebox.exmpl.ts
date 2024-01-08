import { Type, type Static } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'

//--------------------------------------------------------------------------------------------
//
// Let's say you have the following type ...
//
//--------------------------------------------------------------------------------------------

// type T = {
//   id: string,
//   name: string,
//   timestamp: number
// }

//--------------------------------------------------------------------------------------------
//
// ... you can express this type in the following way.
//
//--------------------------------------------------------------------------------------------

const T = Type.Object({                              // const T = {
    id: Type.String(),                                 //   type: 'object',
    name: Type.String(),                               //   properties: {
    timestamp: Type.Integer()                          //     id: {
})                                                   //       type: 'string'
//     },
//     name: {
//       type: 'string'
//     },
//     timestamp: {
//       type: 'integer'
//     }
//   },
//   required: [
//     'id',
//     'name',
//     'timestamp'
//   ]
// }

//--------------------------------------------------------------------------------------------
//
// ... then infer back to the original static type this way.
//
//--------------------------------------------------------------------------------------------

type T = Static<typeof T>                            // type T = {
//   id: string,
//   name: string,
//   timestamp: number
// }

//--------------------------------------------------------------------------------------------
//
// ... then use the type both as Json Schema and as a TypeScript type.
//
//--------------------------------------------------------------------------------------------


function receive(value: T) {                         // ... as a Static Type

    if (Value.Check(T, value)) {                        // ... as a Json Schema

        // ok...
    }
}