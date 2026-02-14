
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Repartidor
 * 
 */
export type Repartidor = $Result.DefaultSelection<Prisma.$RepartidorPayload>
/**
 * Model Paquete
 * 
 */
export type Paquete = $Result.DefaultSelection<Prisma.$PaquetePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Tamano: {
  CHICO: 'CHICO',
  MEDIANO: 'MEDIANO',
  GRANDE: 'GRANDE'
};

export type Tamano = (typeof Tamano)[keyof typeof Tamano]


export const Estado: {
  PENDIENTE: 'PENDIENTE',
  EN_CAMINO: 'EN_CAMINO',
  ENTREGADO: 'ENTREGADO'
};

export type Estado = (typeof Estado)[keyof typeof Estado]

}

export type Tamano = $Enums.Tamano

export const Tamano: typeof $Enums.Tamano

export type Estado = $Enums.Estado

export const Estado: typeof $Enums.Estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Repartidors
 * const repartidors = await prisma.repartidor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Repartidors
   * const repartidors = await prisma.repartidor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>
  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.repartidor`: Exposes CRUD operations for the **Repartidor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repartidors
    * const repartidors = await prisma.repartidor.findMany()
    * ```
    */
  get repartidor(): Prisma.RepartidorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paquete`: Exposes CRUD operations for the **Paquete** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paquetes
    * const paquetes = await prisma.paquete.findMany()
    * ```
    */
  get paquete(): Prisma.PaqueteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Repartidor: 'Repartidor',
    Paquete: 'Paquete'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "repartidor" | "paquete"
      txIsolationLevel: never
    }
    model: {
      Repartidor: {
        payload: Prisma.$RepartidorPayload<ExtArgs>
        fields: Prisma.RepartidorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepartidorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepartidorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          findFirst: {
            args: Prisma.RepartidorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepartidorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          findMany: {
            args: Prisma.RepartidorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>[]
          }
          create: {
            args: Prisma.RepartidorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          createMany: {
            args: Prisma.RepartidorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RepartidorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          update: {
            args: Prisma.RepartidorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          deleteMany: {
            args: Prisma.RepartidorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepartidorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RepartidorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          aggregate: {
            args: Prisma.RepartidorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepartidor>
          }
          groupBy: {
            args: Prisma.RepartidorGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepartidorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RepartidorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RepartidorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RepartidorCountArgs<ExtArgs>
            result: $Utils.Optional<RepartidorCountAggregateOutputType> | number
          }
        }
      }
      Paquete: {
        payload: Prisma.$PaquetePayload<ExtArgs>
        fields: Prisma.PaqueteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaqueteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaquetePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaqueteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaquetePayload>
          }
          findFirst: {
            args: Prisma.PaqueteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaquetePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaqueteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaquetePayload>
          }
          findMany: {
            args: Prisma.PaqueteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaquetePayload>[]
          }
          create: {
            args: Prisma.PaqueteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaquetePayload>
          }
          createMany: {
            args: Prisma.PaqueteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaqueteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaquetePayload>
          }
          update: {
            args: Prisma.PaqueteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaquetePayload>
          }
          deleteMany: {
            args: Prisma.PaqueteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaqueteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaqueteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaquetePayload>
          }
          aggregate: {
            args: Prisma.PaqueteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaquete>
          }
          groupBy: {
            args: Prisma.PaqueteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaqueteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PaqueteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PaqueteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PaqueteCountArgs<ExtArgs>
            result: $Utils.Optional<PaqueteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    repartidor?: RepartidorOmit
    paquete?: PaqueteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RepartidorCountOutputType
   */

  export type RepartidorCountOutputType = {
    paquetes: number
  }

  export type RepartidorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paquetes?: boolean | RepartidorCountOutputTypeCountPaquetesArgs
  }

  // Custom InputTypes
  /**
   * RepartidorCountOutputType without action
   */
  export type RepartidorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorCountOutputType
     */
    select?: RepartidorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepartidorCountOutputType without action
   */
  export type RepartidorCountOutputTypeCountPaquetesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaqueteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Repartidor
   */

  export type AggregateRepartidor = {
    _count: RepartidorCountAggregateOutputType | null
    _min: RepartidorMinAggregateOutputType | null
    _max: RepartidorMaxAggregateOutputType | null
  }

  export type RepartidorMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    telefono: string | null
  }

  export type RepartidorMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    telefono: string | null
  }

  export type RepartidorCountAggregateOutputType = {
    id: number
    nombre: number
    telefono: number
    _all: number
  }


  export type RepartidorMinAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
  }

  export type RepartidorMaxAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
  }

  export type RepartidorCountAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    _all?: true
  }

  export type RepartidorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repartidor to aggregate.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repartidors
    **/
    _count?: true | RepartidorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepartidorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepartidorMaxAggregateInputType
  }

  export type GetRepartidorAggregateType<T extends RepartidorAggregateArgs> = {
        [P in keyof T & keyof AggregateRepartidor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepartidor[P]>
      : GetScalarType<T[P], AggregateRepartidor[P]>
  }




  export type RepartidorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepartidorWhereInput
    orderBy?: RepartidorOrderByWithAggregationInput | RepartidorOrderByWithAggregationInput[]
    by: RepartidorScalarFieldEnum[] | RepartidorScalarFieldEnum
    having?: RepartidorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepartidorCountAggregateInputType | true
    _min?: RepartidorMinAggregateInputType
    _max?: RepartidorMaxAggregateInputType
  }

  export type RepartidorGroupByOutputType = {
    id: string
    nombre: string
    telefono: string | null
    _count: RepartidorCountAggregateOutputType | null
    _min: RepartidorMinAggregateOutputType | null
    _max: RepartidorMaxAggregateOutputType | null
  }

  type GetRepartidorGroupByPayload<T extends RepartidorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepartidorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepartidorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepartidorGroupByOutputType[P]>
            : GetScalarType<T[P], RepartidorGroupByOutputType[P]>
        }
      >
    >


  export type RepartidorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    paquetes?: boolean | Repartidor$paquetesArgs<ExtArgs>
    _count?: boolean | RepartidorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repartidor"]>



  export type RepartidorSelectScalar = {
    id?: boolean
    nombre?: boolean
    telefono?: boolean
  }

  export type RepartidorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "telefono", ExtArgs["result"]["repartidor"]>
  export type RepartidorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paquetes?: boolean | Repartidor$paquetesArgs<ExtArgs>
    _count?: boolean | RepartidorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RepartidorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repartidor"
    objects: {
      paquetes: Prisma.$PaquetePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      telefono: string | null
    }, ExtArgs["result"]["repartidor"]>
    composites: {}
  }

  type RepartidorGetPayload<S extends boolean | null | undefined | RepartidorDefaultArgs> = $Result.GetResult<Prisma.$RepartidorPayload, S>

  type RepartidorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepartidorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepartidorCountAggregateInputType | true
    }

  export interface RepartidorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repartidor'], meta: { name: 'Repartidor' } }
    /**
     * Find zero or one Repartidor that matches the filter.
     * @param {RepartidorFindUniqueArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepartidorFindUniqueArgs>(args: SelectSubset<T, RepartidorFindUniqueArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repartidor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepartidorFindUniqueOrThrowArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepartidorFindUniqueOrThrowArgs>(args: SelectSubset<T, RepartidorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repartidor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorFindFirstArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepartidorFindFirstArgs>(args?: SelectSubset<T, RepartidorFindFirstArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repartidor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorFindFirstOrThrowArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepartidorFindFirstOrThrowArgs>(args?: SelectSubset<T, RepartidorFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repartidors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repartidors
     * const repartidors = await prisma.repartidor.findMany()
     * 
     * // Get first 10 Repartidors
     * const repartidors = await prisma.repartidor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repartidorWithIdOnly = await prisma.repartidor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepartidorFindManyArgs>(args?: SelectSubset<T, RepartidorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repartidor.
     * @param {RepartidorCreateArgs} args - Arguments to create a Repartidor.
     * @example
     * // Create one Repartidor
     * const Repartidor = await prisma.repartidor.create({
     *   data: {
     *     // ... data to create a Repartidor
     *   }
     * })
     * 
     */
    create<T extends RepartidorCreateArgs>(args: SelectSubset<T, RepartidorCreateArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repartidors.
     * @param {RepartidorCreateManyArgs} args - Arguments to create many Repartidors.
     * @example
     * // Create many Repartidors
     * const repartidor = await prisma.repartidor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepartidorCreateManyArgs>(args?: SelectSubset<T, RepartidorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Repartidor.
     * @param {RepartidorDeleteArgs} args - Arguments to delete one Repartidor.
     * @example
     * // Delete one Repartidor
     * const Repartidor = await prisma.repartidor.delete({
     *   where: {
     *     // ... filter to delete one Repartidor
     *   }
     * })
     * 
     */
    delete<T extends RepartidorDeleteArgs>(args: SelectSubset<T, RepartidorDeleteArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repartidor.
     * @param {RepartidorUpdateArgs} args - Arguments to update one Repartidor.
     * @example
     * // Update one Repartidor
     * const repartidor = await prisma.repartidor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepartidorUpdateArgs>(args: SelectSubset<T, RepartidorUpdateArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repartidors.
     * @param {RepartidorDeleteManyArgs} args - Arguments to filter Repartidors to delete.
     * @example
     * // Delete a few Repartidors
     * const { count } = await prisma.repartidor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepartidorDeleteManyArgs>(args?: SelectSubset<T, RepartidorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repartidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repartidors
     * const repartidor = await prisma.repartidor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepartidorUpdateManyArgs>(args: SelectSubset<T, RepartidorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Repartidor.
     * @param {RepartidorUpsertArgs} args - Arguments to update or create a Repartidor.
     * @example
     * // Update or create a Repartidor
     * const repartidor = await prisma.repartidor.upsert({
     *   create: {
     *     // ... data to create a Repartidor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repartidor we want to update
     *   }
     * })
     */
    upsert<T extends RepartidorUpsertArgs>(args: SelectSubset<T, RepartidorUpsertArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repartidors that matches the filter.
     * @param {RepartidorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const repartidor = await prisma.repartidor.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RepartidorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Repartidor.
     * @param {RepartidorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const repartidor = await prisma.repartidor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RepartidorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Repartidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorCountArgs} args - Arguments to filter Repartidors to count.
     * @example
     * // Count the number of Repartidors
     * const count = await prisma.repartidor.count({
     *   where: {
     *     // ... the filter for the Repartidors we want to count
     *   }
     * })
    **/
    count<T extends RepartidorCountArgs>(
      args?: Subset<T, RepartidorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepartidorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repartidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepartidorAggregateArgs>(args: Subset<T, RepartidorAggregateArgs>): Prisma.PrismaPromise<GetRepartidorAggregateType<T>>

    /**
     * Group by Repartidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepartidorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepartidorGroupByArgs['orderBy'] }
        : { orderBy?: RepartidorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepartidorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepartidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repartidor model
   */
  readonly fields: RepartidorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repartidor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepartidorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paquetes<T extends Repartidor$paquetesArgs<ExtArgs> = {}>(args?: Subset<T, Repartidor$paquetesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaquetePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Repartidor model
   */
  interface RepartidorFieldRefs {
    readonly id: FieldRef<"Repartidor", 'String'>
    readonly nombre: FieldRef<"Repartidor", 'String'>
    readonly telefono: FieldRef<"Repartidor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Repartidor findUnique
   */
  export type RepartidorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor findUniqueOrThrow
   */
  export type RepartidorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor findFirst
   */
  export type RepartidorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repartidors.
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repartidors.
     */
    distinct?: RepartidorScalarFieldEnum | RepartidorScalarFieldEnum[]
  }

  /**
   * Repartidor findFirstOrThrow
   */
  export type RepartidorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repartidors.
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repartidors.
     */
    distinct?: RepartidorScalarFieldEnum | RepartidorScalarFieldEnum[]
  }

  /**
   * Repartidor findMany
   */
  export type RepartidorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidors to fetch.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repartidors.
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    distinct?: RepartidorScalarFieldEnum | RepartidorScalarFieldEnum[]
  }

  /**
   * Repartidor create
   */
  export type RepartidorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * The data needed to create a Repartidor.
     */
    data: XOR<RepartidorCreateInput, RepartidorUncheckedCreateInput>
  }

  /**
   * Repartidor createMany
   */
  export type RepartidorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repartidors.
     */
    data: RepartidorCreateManyInput | RepartidorCreateManyInput[]
  }

  /**
   * Repartidor update
   */
  export type RepartidorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * The data needed to update a Repartidor.
     */
    data: XOR<RepartidorUpdateInput, RepartidorUncheckedUpdateInput>
    /**
     * Choose, which Repartidor to update.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor updateMany
   */
  export type RepartidorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repartidors.
     */
    data: XOR<RepartidorUpdateManyMutationInput, RepartidorUncheckedUpdateManyInput>
    /**
     * Filter which Repartidors to update
     */
    where?: RepartidorWhereInput
    /**
     * Limit how many Repartidors to update.
     */
    limit?: number
  }

  /**
   * Repartidor upsert
   */
  export type RepartidorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * The filter to search for the Repartidor to update in case it exists.
     */
    where: RepartidorWhereUniqueInput
    /**
     * In case the Repartidor found by the `where` argument doesn't exist, create a new Repartidor with this data.
     */
    create: XOR<RepartidorCreateInput, RepartidorUncheckedCreateInput>
    /**
     * In case the Repartidor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepartidorUpdateInput, RepartidorUncheckedUpdateInput>
  }

  /**
   * Repartidor delete
   */
  export type RepartidorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter which Repartidor to delete.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor deleteMany
   */
  export type RepartidorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repartidors to delete
     */
    where?: RepartidorWhereInput
    /**
     * Limit how many Repartidors to delete.
     */
    limit?: number
  }

  /**
   * Repartidor findRaw
   */
  export type RepartidorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Repartidor aggregateRaw
   */
  export type RepartidorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Repartidor.paquetes
   */
  export type Repartidor$paquetesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
    where?: PaqueteWhereInput
    orderBy?: PaqueteOrderByWithRelationInput | PaqueteOrderByWithRelationInput[]
    cursor?: PaqueteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaqueteScalarFieldEnum | PaqueteScalarFieldEnum[]
  }

  /**
   * Repartidor without action
   */
  export type RepartidorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
  }


  /**
   * Model Paquete
   */

  export type AggregatePaquete = {
    _count: PaqueteCountAggregateOutputType | null
    _avg: PaqueteAvgAggregateOutputType | null
    _sum: PaqueteSumAggregateOutputType | null
    _min: PaqueteMinAggregateOutputType | null
    _max: PaqueteMaxAggregateOutputType | null
  }

  export type PaqueteAvgAggregateOutputType = {
    latitud: number | null
    longitud: number | null
    ordenEntrega: number | null
  }

  export type PaqueteSumAggregateOutputType = {
    latitud: number | null
    longitud: number | null
    ordenEntrega: number | null
  }

  export type PaqueteMinAggregateOutputType = {
    id: string | null
    codigoEnvio: string | null
    direccion: string | null
    destinatario: string | null
    tamano: $Enums.Tamano | null
    estado: $Enums.Estado | null
    latitud: number | null
    longitud: number | null
    ordenEntrega: number | null
    repartidorId: string | null
  }

  export type PaqueteMaxAggregateOutputType = {
    id: string | null
    codigoEnvio: string | null
    direccion: string | null
    destinatario: string | null
    tamano: $Enums.Tamano | null
    estado: $Enums.Estado | null
    latitud: number | null
    longitud: number | null
    ordenEntrega: number | null
    repartidorId: string | null
  }

  export type PaqueteCountAggregateOutputType = {
    id: number
    codigoEnvio: number
    direccion: number
    destinatario: number
    tamano: number
    estado: number
    latitud: number
    longitud: number
    ordenEntrega: number
    repartidorId: number
    _all: number
  }


  export type PaqueteAvgAggregateInputType = {
    latitud?: true
    longitud?: true
    ordenEntrega?: true
  }

  export type PaqueteSumAggregateInputType = {
    latitud?: true
    longitud?: true
    ordenEntrega?: true
  }

  export type PaqueteMinAggregateInputType = {
    id?: true
    codigoEnvio?: true
    direccion?: true
    destinatario?: true
    tamano?: true
    estado?: true
    latitud?: true
    longitud?: true
    ordenEntrega?: true
    repartidorId?: true
  }

  export type PaqueteMaxAggregateInputType = {
    id?: true
    codigoEnvio?: true
    direccion?: true
    destinatario?: true
    tamano?: true
    estado?: true
    latitud?: true
    longitud?: true
    ordenEntrega?: true
    repartidorId?: true
  }

  export type PaqueteCountAggregateInputType = {
    id?: true
    codigoEnvio?: true
    direccion?: true
    destinatario?: true
    tamano?: true
    estado?: true
    latitud?: true
    longitud?: true
    ordenEntrega?: true
    repartidorId?: true
    _all?: true
  }

  export type PaqueteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paquete to aggregate.
     */
    where?: PaqueteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paquetes to fetch.
     */
    orderBy?: PaqueteOrderByWithRelationInput | PaqueteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaqueteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paquetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paquetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paquetes
    **/
    _count?: true | PaqueteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaqueteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaqueteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaqueteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaqueteMaxAggregateInputType
  }

  export type GetPaqueteAggregateType<T extends PaqueteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaquete]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaquete[P]>
      : GetScalarType<T[P], AggregatePaquete[P]>
  }




  export type PaqueteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaqueteWhereInput
    orderBy?: PaqueteOrderByWithAggregationInput | PaqueteOrderByWithAggregationInput[]
    by: PaqueteScalarFieldEnum[] | PaqueteScalarFieldEnum
    having?: PaqueteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaqueteCountAggregateInputType | true
    _avg?: PaqueteAvgAggregateInputType
    _sum?: PaqueteSumAggregateInputType
    _min?: PaqueteMinAggregateInputType
    _max?: PaqueteMaxAggregateInputType
  }

  export type PaqueteGroupByOutputType = {
    id: string
    codigoEnvio: string
    direccion: string
    destinatario: string
    tamano: $Enums.Tamano
    estado: $Enums.Estado
    latitud: number
    longitud: number
    ordenEntrega: number
    repartidorId: string
    _count: PaqueteCountAggregateOutputType | null
    _avg: PaqueteAvgAggregateOutputType | null
    _sum: PaqueteSumAggregateOutputType | null
    _min: PaqueteMinAggregateOutputType | null
    _max: PaqueteMaxAggregateOutputType | null
  }

  type GetPaqueteGroupByPayload<T extends PaqueteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaqueteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaqueteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaqueteGroupByOutputType[P]>
            : GetScalarType<T[P], PaqueteGroupByOutputType[P]>
        }
      >
    >


  export type PaqueteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoEnvio?: boolean
    direccion?: boolean
    destinatario?: boolean
    tamano?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    ordenEntrega?: boolean
    repartidorId?: boolean
    repartidor?: boolean | RepartidorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paquete"]>



  export type PaqueteSelectScalar = {
    id?: boolean
    codigoEnvio?: boolean
    direccion?: boolean
    destinatario?: boolean
    tamano?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    ordenEntrega?: boolean
    repartidorId?: boolean
  }

  export type PaqueteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigoEnvio" | "direccion" | "destinatario" | "tamano" | "estado" | "latitud" | "longitud" | "ordenEntrega" | "repartidorId", ExtArgs["result"]["paquete"]>
  export type PaqueteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repartidor?: boolean | RepartidorDefaultArgs<ExtArgs>
  }

  export type $PaquetePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paquete"
    objects: {
      repartidor: Prisma.$RepartidorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigoEnvio: string
      direccion: string
      destinatario: string
      tamano: $Enums.Tamano
      estado: $Enums.Estado
      latitud: number
      longitud: number
      ordenEntrega: number
      repartidorId: string
    }, ExtArgs["result"]["paquete"]>
    composites: {}
  }

  type PaqueteGetPayload<S extends boolean | null | undefined | PaqueteDefaultArgs> = $Result.GetResult<Prisma.$PaquetePayload, S>

  type PaqueteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaqueteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaqueteCountAggregateInputType | true
    }

  export interface PaqueteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paquete'], meta: { name: 'Paquete' } }
    /**
     * Find zero or one Paquete that matches the filter.
     * @param {PaqueteFindUniqueArgs} args - Arguments to find a Paquete
     * @example
     * // Get one Paquete
     * const paquete = await prisma.paquete.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaqueteFindUniqueArgs>(args: SelectSubset<T, PaqueteFindUniqueArgs<ExtArgs>>): Prisma__PaqueteClient<$Result.GetResult<Prisma.$PaquetePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paquete that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaqueteFindUniqueOrThrowArgs} args - Arguments to find a Paquete
     * @example
     * // Get one Paquete
     * const paquete = await prisma.paquete.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaqueteFindUniqueOrThrowArgs>(args: SelectSubset<T, PaqueteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaqueteClient<$Result.GetResult<Prisma.$PaquetePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paquete that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaqueteFindFirstArgs} args - Arguments to find a Paquete
     * @example
     * // Get one Paquete
     * const paquete = await prisma.paquete.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaqueteFindFirstArgs>(args?: SelectSubset<T, PaqueteFindFirstArgs<ExtArgs>>): Prisma__PaqueteClient<$Result.GetResult<Prisma.$PaquetePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paquete that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaqueteFindFirstOrThrowArgs} args - Arguments to find a Paquete
     * @example
     * // Get one Paquete
     * const paquete = await prisma.paquete.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaqueteFindFirstOrThrowArgs>(args?: SelectSubset<T, PaqueteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaqueteClient<$Result.GetResult<Prisma.$PaquetePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paquetes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaqueteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paquetes
     * const paquetes = await prisma.paquete.findMany()
     * 
     * // Get first 10 Paquetes
     * const paquetes = await prisma.paquete.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paqueteWithIdOnly = await prisma.paquete.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaqueteFindManyArgs>(args?: SelectSubset<T, PaqueteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaquetePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paquete.
     * @param {PaqueteCreateArgs} args - Arguments to create a Paquete.
     * @example
     * // Create one Paquete
     * const Paquete = await prisma.paquete.create({
     *   data: {
     *     // ... data to create a Paquete
     *   }
     * })
     * 
     */
    create<T extends PaqueteCreateArgs>(args: SelectSubset<T, PaqueteCreateArgs<ExtArgs>>): Prisma__PaqueteClient<$Result.GetResult<Prisma.$PaquetePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paquetes.
     * @param {PaqueteCreateManyArgs} args - Arguments to create many Paquetes.
     * @example
     * // Create many Paquetes
     * const paquete = await prisma.paquete.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaqueteCreateManyArgs>(args?: SelectSubset<T, PaqueteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paquete.
     * @param {PaqueteDeleteArgs} args - Arguments to delete one Paquete.
     * @example
     * // Delete one Paquete
     * const Paquete = await prisma.paquete.delete({
     *   where: {
     *     // ... filter to delete one Paquete
     *   }
     * })
     * 
     */
    delete<T extends PaqueteDeleteArgs>(args: SelectSubset<T, PaqueteDeleteArgs<ExtArgs>>): Prisma__PaqueteClient<$Result.GetResult<Prisma.$PaquetePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paquete.
     * @param {PaqueteUpdateArgs} args - Arguments to update one Paquete.
     * @example
     * // Update one Paquete
     * const paquete = await prisma.paquete.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaqueteUpdateArgs>(args: SelectSubset<T, PaqueteUpdateArgs<ExtArgs>>): Prisma__PaqueteClient<$Result.GetResult<Prisma.$PaquetePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paquetes.
     * @param {PaqueteDeleteManyArgs} args - Arguments to filter Paquetes to delete.
     * @example
     * // Delete a few Paquetes
     * const { count } = await prisma.paquete.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaqueteDeleteManyArgs>(args?: SelectSubset<T, PaqueteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paquetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaqueteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paquetes
     * const paquete = await prisma.paquete.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaqueteUpdateManyArgs>(args: SelectSubset<T, PaqueteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paquete.
     * @param {PaqueteUpsertArgs} args - Arguments to update or create a Paquete.
     * @example
     * // Update or create a Paquete
     * const paquete = await prisma.paquete.upsert({
     *   create: {
     *     // ... data to create a Paquete
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paquete we want to update
     *   }
     * })
     */
    upsert<T extends PaqueteUpsertArgs>(args: SelectSubset<T, PaqueteUpsertArgs<ExtArgs>>): Prisma__PaqueteClient<$Result.GetResult<Prisma.$PaquetePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paquetes that matches the filter.
     * @param {PaqueteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const paquete = await prisma.paquete.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PaqueteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Paquete.
     * @param {PaqueteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const paquete = await prisma.paquete.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PaqueteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Paquetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaqueteCountArgs} args - Arguments to filter Paquetes to count.
     * @example
     * // Count the number of Paquetes
     * const count = await prisma.paquete.count({
     *   where: {
     *     // ... the filter for the Paquetes we want to count
     *   }
     * })
    **/
    count<T extends PaqueteCountArgs>(
      args?: Subset<T, PaqueteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaqueteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paquete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaqueteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaqueteAggregateArgs>(args: Subset<T, PaqueteAggregateArgs>): Prisma.PrismaPromise<GetPaqueteAggregateType<T>>

    /**
     * Group by Paquete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaqueteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaqueteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaqueteGroupByArgs['orderBy'] }
        : { orderBy?: PaqueteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaqueteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaqueteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paquete model
   */
  readonly fields: PaqueteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paquete.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaqueteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repartidor<T extends RepartidorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepartidorDefaultArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paquete model
   */
  interface PaqueteFieldRefs {
    readonly id: FieldRef<"Paquete", 'String'>
    readonly codigoEnvio: FieldRef<"Paquete", 'String'>
    readonly direccion: FieldRef<"Paquete", 'String'>
    readonly destinatario: FieldRef<"Paquete", 'String'>
    readonly tamano: FieldRef<"Paquete", 'Tamano'>
    readonly estado: FieldRef<"Paquete", 'Estado'>
    readonly latitud: FieldRef<"Paquete", 'Float'>
    readonly longitud: FieldRef<"Paquete", 'Float'>
    readonly ordenEntrega: FieldRef<"Paquete", 'Int'>
    readonly repartidorId: FieldRef<"Paquete", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paquete findUnique
   */
  export type PaqueteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
    /**
     * Filter, which Paquete to fetch.
     */
    where: PaqueteWhereUniqueInput
  }

  /**
   * Paquete findUniqueOrThrow
   */
  export type PaqueteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
    /**
     * Filter, which Paquete to fetch.
     */
    where: PaqueteWhereUniqueInput
  }

  /**
   * Paquete findFirst
   */
  export type PaqueteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
    /**
     * Filter, which Paquete to fetch.
     */
    where?: PaqueteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paquetes to fetch.
     */
    orderBy?: PaqueteOrderByWithRelationInput | PaqueteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paquetes.
     */
    cursor?: PaqueteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paquetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paquetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paquetes.
     */
    distinct?: PaqueteScalarFieldEnum | PaqueteScalarFieldEnum[]
  }

  /**
   * Paquete findFirstOrThrow
   */
  export type PaqueteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
    /**
     * Filter, which Paquete to fetch.
     */
    where?: PaqueteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paquetes to fetch.
     */
    orderBy?: PaqueteOrderByWithRelationInput | PaqueteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paquetes.
     */
    cursor?: PaqueteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paquetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paquetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paquetes.
     */
    distinct?: PaqueteScalarFieldEnum | PaqueteScalarFieldEnum[]
  }

  /**
   * Paquete findMany
   */
  export type PaqueteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
    /**
     * Filter, which Paquetes to fetch.
     */
    where?: PaqueteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paquetes to fetch.
     */
    orderBy?: PaqueteOrderByWithRelationInput | PaqueteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paquetes.
     */
    cursor?: PaqueteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paquetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paquetes.
     */
    skip?: number
    distinct?: PaqueteScalarFieldEnum | PaqueteScalarFieldEnum[]
  }

  /**
   * Paquete create
   */
  export type PaqueteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paquete.
     */
    data: XOR<PaqueteCreateInput, PaqueteUncheckedCreateInput>
  }

  /**
   * Paquete createMany
   */
  export type PaqueteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paquetes.
     */
    data: PaqueteCreateManyInput | PaqueteCreateManyInput[]
  }

  /**
   * Paquete update
   */
  export type PaqueteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paquete.
     */
    data: XOR<PaqueteUpdateInput, PaqueteUncheckedUpdateInput>
    /**
     * Choose, which Paquete to update.
     */
    where: PaqueteWhereUniqueInput
  }

  /**
   * Paquete updateMany
   */
  export type PaqueteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paquetes.
     */
    data: XOR<PaqueteUpdateManyMutationInput, PaqueteUncheckedUpdateManyInput>
    /**
     * Filter which Paquetes to update
     */
    where?: PaqueteWhereInput
    /**
     * Limit how many Paquetes to update.
     */
    limit?: number
  }

  /**
   * Paquete upsert
   */
  export type PaqueteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paquete to update in case it exists.
     */
    where: PaqueteWhereUniqueInput
    /**
     * In case the Paquete found by the `where` argument doesn't exist, create a new Paquete with this data.
     */
    create: XOR<PaqueteCreateInput, PaqueteUncheckedCreateInput>
    /**
     * In case the Paquete was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaqueteUpdateInput, PaqueteUncheckedUpdateInput>
  }

  /**
   * Paquete delete
   */
  export type PaqueteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
    /**
     * Filter which Paquete to delete.
     */
    where: PaqueteWhereUniqueInput
  }

  /**
   * Paquete deleteMany
   */
  export type PaqueteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paquetes to delete
     */
    where?: PaqueteWhereInput
    /**
     * Limit how many Paquetes to delete.
     */
    limit?: number
  }

  /**
   * Paquete findRaw
   */
  export type PaqueteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Paquete aggregateRaw
   */
  export type PaqueteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Paquete without action
   */
  export type PaqueteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paquete
     */
    select?: PaqueteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paquete
     */
    omit?: PaqueteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaqueteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const RepartidorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    telefono: 'telefono'
  };

  export type RepartidorScalarFieldEnum = (typeof RepartidorScalarFieldEnum)[keyof typeof RepartidorScalarFieldEnum]


  export const PaqueteScalarFieldEnum: {
    id: 'id',
    codigoEnvio: 'codigoEnvio',
    direccion: 'direccion',
    destinatario: 'destinatario',
    tamano: 'tamano',
    estado: 'estado',
    latitud: 'latitud',
    longitud: 'longitud',
    ordenEntrega: 'ordenEntrega',
    repartidorId: 'repartidorId'
  };

  export type PaqueteScalarFieldEnum = (typeof PaqueteScalarFieldEnum)[keyof typeof PaqueteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Tamano'
   */
  export type EnumTamanoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tamano'>
    


  /**
   * Reference to a field of type 'Tamano[]'
   */
  export type ListEnumTamanoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tamano[]'>
    


  /**
   * Reference to a field of type 'Estado'
   */
  export type EnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado'>
    


  /**
   * Reference to a field of type 'Estado[]'
   */
  export type ListEnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type RepartidorWhereInput = {
    AND?: RepartidorWhereInput | RepartidorWhereInput[]
    OR?: RepartidorWhereInput[]
    NOT?: RepartidorWhereInput | RepartidorWhereInput[]
    id?: StringFilter<"Repartidor"> | string
    nombre?: StringFilter<"Repartidor"> | string
    telefono?: StringNullableFilter<"Repartidor"> | string | null
    paquetes?: PaqueteListRelationFilter
  }

  export type RepartidorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    paquetes?: PaqueteOrderByRelationAggregateInput
  }

  export type RepartidorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RepartidorWhereInput | RepartidorWhereInput[]
    OR?: RepartidorWhereInput[]
    NOT?: RepartidorWhereInput | RepartidorWhereInput[]
    nombre?: StringFilter<"Repartidor"> | string
    telefono?: StringNullableFilter<"Repartidor"> | string | null
    paquetes?: PaqueteListRelationFilter
  }, "id">

  export type RepartidorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    _count?: RepartidorCountOrderByAggregateInput
    _max?: RepartidorMaxOrderByAggregateInput
    _min?: RepartidorMinOrderByAggregateInput
  }

  export type RepartidorScalarWhereWithAggregatesInput = {
    AND?: RepartidorScalarWhereWithAggregatesInput | RepartidorScalarWhereWithAggregatesInput[]
    OR?: RepartidorScalarWhereWithAggregatesInput[]
    NOT?: RepartidorScalarWhereWithAggregatesInput | RepartidorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Repartidor"> | string
    nombre?: StringWithAggregatesFilter<"Repartidor"> | string
    telefono?: StringNullableWithAggregatesFilter<"Repartidor"> | string | null
  }

  export type PaqueteWhereInput = {
    AND?: PaqueteWhereInput | PaqueteWhereInput[]
    OR?: PaqueteWhereInput[]
    NOT?: PaqueteWhereInput | PaqueteWhereInput[]
    id?: StringFilter<"Paquete"> | string
    codigoEnvio?: StringFilter<"Paquete"> | string
    direccion?: StringFilter<"Paquete"> | string
    destinatario?: StringFilter<"Paquete"> | string
    tamano?: EnumTamanoFilter<"Paquete"> | $Enums.Tamano
    estado?: EnumEstadoFilter<"Paquete"> | $Enums.Estado
    latitud?: FloatFilter<"Paquete"> | number
    longitud?: FloatFilter<"Paquete"> | number
    ordenEntrega?: IntFilter<"Paquete"> | number
    repartidorId?: StringFilter<"Paquete"> | string
    repartidor?: XOR<RepartidorScalarRelationFilter, RepartidorWhereInput>
  }

  export type PaqueteOrderByWithRelationInput = {
    id?: SortOrder
    codigoEnvio?: SortOrder
    direccion?: SortOrder
    destinatario?: SortOrder
    tamano?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    ordenEntrega?: SortOrder
    repartidorId?: SortOrder
    repartidor?: RepartidorOrderByWithRelationInput
  }

  export type PaqueteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigoEnvio?: string
    AND?: PaqueteWhereInput | PaqueteWhereInput[]
    OR?: PaqueteWhereInput[]
    NOT?: PaqueteWhereInput | PaqueteWhereInput[]
    direccion?: StringFilter<"Paquete"> | string
    destinatario?: StringFilter<"Paquete"> | string
    tamano?: EnumTamanoFilter<"Paquete"> | $Enums.Tamano
    estado?: EnumEstadoFilter<"Paquete"> | $Enums.Estado
    latitud?: FloatFilter<"Paquete"> | number
    longitud?: FloatFilter<"Paquete"> | number
    ordenEntrega?: IntFilter<"Paquete"> | number
    repartidorId?: StringFilter<"Paquete"> | string
    repartidor?: XOR<RepartidorScalarRelationFilter, RepartidorWhereInput>
  }, "id" | "codigoEnvio">

  export type PaqueteOrderByWithAggregationInput = {
    id?: SortOrder
    codigoEnvio?: SortOrder
    direccion?: SortOrder
    destinatario?: SortOrder
    tamano?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    ordenEntrega?: SortOrder
    repartidorId?: SortOrder
    _count?: PaqueteCountOrderByAggregateInput
    _avg?: PaqueteAvgOrderByAggregateInput
    _max?: PaqueteMaxOrderByAggregateInput
    _min?: PaqueteMinOrderByAggregateInput
    _sum?: PaqueteSumOrderByAggregateInput
  }

  export type PaqueteScalarWhereWithAggregatesInput = {
    AND?: PaqueteScalarWhereWithAggregatesInput | PaqueteScalarWhereWithAggregatesInput[]
    OR?: PaqueteScalarWhereWithAggregatesInput[]
    NOT?: PaqueteScalarWhereWithAggregatesInput | PaqueteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Paquete"> | string
    codigoEnvio?: StringWithAggregatesFilter<"Paquete"> | string
    direccion?: StringWithAggregatesFilter<"Paquete"> | string
    destinatario?: StringWithAggregatesFilter<"Paquete"> | string
    tamano?: EnumTamanoWithAggregatesFilter<"Paquete"> | $Enums.Tamano
    estado?: EnumEstadoWithAggregatesFilter<"Paquete"> | $Enums.Estado
    latitud?: FloatWithAggregatesFilter<"Paquete"> | number
    longitud?: FloatWithAggregatesFilter<"Paquete"> | number
    ordenEntrega?: IntWithAggregatesFilter<"Paquete"> | number
    repartidorId?: StringWithAggregatesFilter<"Paquete"> | string
  }

  export type RepartidorCreateInput = {
    id?: string
    nombre: string
    telefono?: string | null
    paquetes?: PaqueteCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorUncheckedCreateInput = {
    id?: string
    nombre: string
    telefono?: string | null
    paquetes?: PaqueteUncheckedCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    paquetes?: PaqueteUpdateManyWithoutRepartidorNestedInput
  }

  export type RepartidorUncheckedUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    paquetes?: PaqueteUncheckedUpdateManyWithoutRepartidorNestedInput
  }

  export type RepartidorCreateManyInput = {
    id?: string
    nombre: string
    telefono?: string | null
  }

  export type RepartidorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepartidorUncheckedUpdateManyInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaqueteCreateInput = {
    id?: string
    codigoEnvio: string
    direccion: string
    destinatario: string
    tamano: $Enums.Tamano
    estado?: $Enums.Estado
    latitud: number
    longitud: number
    ordenEntrega: number
    repartidor: RepartidorCreateNestedOneWithoutPaquetesInput
  }

  export type PaqueteUncheckedCreateInput = {
    id?: string
    codigoEnvio: string
    direccion: string
    destinatario: string
    tamano: $Enums.Tamano
    estado?: $Enums.Estado
    latitud: number
    longitud: number
    ordenEntrega: number
    repartidorId: string
  }

  export type PaqueteUpdateInput = {
    codigoEnvio?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    destinatario?: StringFieldUpdateOperationsInput | string
    tamano?: EnumTamanoFieldUpdateOperationsInput | $Enums.Tamano
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    ordenEntrega?: IntFieldUpdateOperationsInput | number
    repartidor?: RepartidorUpdateOneRequiredWithoutPaquetesNestedInput
  }

  export type PaqueteUncheckedUpdateInput = {
    codigoEnvio?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    destinatario?: StringFieldUpdateOperationsInput | string
    tamano?: EnumTamanoFieldUpdateOperationsInput | $Enums.Tamano
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    ordenEntrega?: IntFieldUpdateOperationsInput | number
    repartidorId?: StringFieldUpdateOperationsInput | string
  }

  export type PaqueteCreateManyInput = {
    id?: string
    codigoEnvio: string
    direccion: string
    destinatario: string
    tamano: $Enums.Tamano
    estado?: $Enums.Estado
    latitud: number
    longitud: number
    ordenEntrega: number
    repartidorId: string
  }

  export type PaqueteUpdateManyMutationInput = {
    codigoEnvio?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    destinatario?: StringFieldUpdateOperationsInput | string
    tamano?: EnumTamanoFieldUpdateOperationsInput | $Enums.Tamano
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    ordenEntrega?: IntFieldUpdateOperationsInput | number
  }

  export type PaqueteUncheckedUpdateManyInput = {
    codigoEnvio?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    destinatario?: StringFieldUpdateOperationsInput | string
    tamano?: EnumTamanoFieldUpdateOperationsInput | $Enums.Tamano
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    ordenEntrega?: IntFieldUpdateOperationsInput | number
    repartidorId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type PaqueteListRelationFilter = {
    every?: PaqueteWhereInput
    some?: PaqueteWhereInput
    none?: PaqueteWhereInput
  }

  export type PaqueteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepartidorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
  }

  export type RepartidorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
  }

  export type RepartidorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumTamanoFilter<$PrismaModel = never> = {
    equals?: $Enums.Tamano | EnumTamanoFieldRefInput<$PrismaModel>
    in?: $Enums.Tamano[] | ListEnumTamanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tamano[] | ListEnumTamanoFieldRefInput<$PrismaModel>
    not?: NestedEnumTamanoFilter<$PrismaModel> | $Enums.Tamano
  }

  export type EnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RepartidorScalarRelationFilter = {
    is?: RepartidorWhereInput
    isNot?: RepartidorWhereInput
  }

  export type PaqueteCountOrderByAggregateInput = {
    id?: SortOrder
    codigoEnvio?: SortOrder
    direccion?: SortOrder
    destinatario?: SortOrder
    tamano?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    ordenEntrega?: SortOrder
    repartidorId?: SortOrder
  }

  export type PaqueteAvgOrderByAggregateInput = {
    latitud?: SortOrder
    longitud?: SortOrder
    ordenEntrega?: SortOrder
  }

  export type PaqueteMaxOrderByAggregateInput = {
    id?: SortOrder
    codigoEnvio?: SortOrder
    direccion?: SortOrder
    destinatario?: SortOrder
    tamano?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    ordenEntrega?: SortOrder
    repartidorId?: SortOrder
  }

  export type PaqueteMinOrderByAggregateInput = {
    id?: SortOrder
    codigoEnvio?: SortOrder
    direccion?: SortOrder
    destinatario?: SortOrder
    tamano?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    ordenEntrega?: SortOrder
    repartidorId?: SortOrder
  }

  export type PaqueteSumOrderByAggregateInput = {
    latitud?: SortOrder
    longitud?: SortOrder
    ordenEntrega?: SortOrder
  }

  export type EnumTamanoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tamano | EnumTamanoFieldRefInput<$PrismaModel>
    in?: $Enums.Tamano[] | ListEnumTamanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tamano[] | ListEnumTamanoFieldRefInput<$PrismaModel>
    not?: NestedEnumTamanoWithAggregatesFilter<$PrismaModel> | $Enums.Tamano
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTamanoFilter<$PrismaModel>
    _max?: NestedEnumTamanoFilter<$PrismaModel>
  }

  export type EnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PaqueteCreateNestedManyWithoutRepartidorInput = {
    create?: XOR<PaqueteCreateWithoutRepartidorInput, PaqueteUncheckedCreateWithoutRepartidorInput> | PaqueteCreateWithoutRepartidorInput[] | PaqueteUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: PaqueteCreateOrConnectWithoutRepartidorInput | PaqueteCreateOrConnectWithoutRepartidorInput[]
    createMany?: PaqueteCreateManyRepartidorInputEnvelope
    connect?: PaqueteWhereUniqueInput | PaqueteWhereUniqueInput[]
  }

  export type PaqueteUncheckedCreateNestedManyWithoutRepartidorInput = {
    create?: XOR<PaqueteCreateWithoutRepartidorInput, PaqueteUncheckedCreateWithoutRepartidorInput> | PaqueteCreateWithoutRepartidorInput[] | PaqueteUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: PaqueteCreateOrConnectWithoutRepartidorInput | PaqueteCreateOrConnectWithoutRepartidorInput[]
    createMany?: PaqueteCreateManyRepartidorInputEnvelope
    connect?: PaqueteWhereUniqueInput | PaqueteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type PaqueteUpdateManyWithoutRepartidorNestedInput = {
    create?: XOR<PaqueteCreateWithoutRepartidorInput, PaqueteUncheckedCreateWithoutRepartidorInput> | PaqueteCreateWithoutRepartidorInput[] | PaqueteUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: PaqueteCreateOrConnectWithoutRepartidorInput | PaqueteCreateOrConnectWithoutRepartidorInput[]
    upsert?: PaqueteUpsertWithWhereUniqueWithoutRepartidorInput | PaqueteUpsertWithWhereUniqueWithoutRepartidorInput[]
    createMany?: PaqueteCreateManyRepartidorInputEnvelope
    set?: PaqueteWhereUniqueInput | PaqueteWhereUniqueInput[]
    disconnect?: PaqueteWhereUniqueInput | PaqueteWhereUniqueInput[]
    delete?: PaqueteWhereUniqueInput | PaqueteWhereUniqueInput[]
    connect?: PaqueteWhereUniqueInput | PaqueteWhereUniqueInput[]
    update?: PaqueteUpdateWithWhereUniqueWithoutRepartidorInput | PaqueteUpdateWithWhereUniqueWithoutRepartidorInput[]
    updateMany?: PaqueteUpdateManyWithWhereWithoutRepartidorInput | PaqueteUpdateManyWithWhereWithoutRepartidorInput[]
    deleteMany?: PaqueteScalarWhereInput | PaqueteScalarWhereInput[]
  }

  export type PaqueteUncheckedUpdateManyWithoutRepartidorNestedInput = {
    create?: XOR<PaqueteCreateWithoutRepartidorInput, PaqueteUncheckedCreateWithoutRepartidorInput> | PaqueteCreateWithoutRepartidorInput[] | PaqueteUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: PaqueteCreateOrConnectWithoutRepartidorInput | PaqueteCreateOrConnectWithoutRepartidorInput[]
    upsert?: PaqueteUpsertWithWhereUniqueWithoutRepartidorInput | PaqueteUpsertWithWhereUniqueWithoutRepartidorInput[]
    createMany?: PaqueteCreateManyRepartidorInputEnvelope
    set?: PaqueteWhereUniqueInput | PaqueteWhereUniqueInput[]
    disconnect?: PaqueteWhereUniqueInput | PaqueteWhereUniqueInput[]
    delete?: PaqueteWhereUniqueInput | PaqueteWhereUniqueInput[]
    connect?: PaqueteWhereUniqueInput | PaqueteWhereUniqueInput[]
    update?: PaqueteUpdateWithWhereUniqueWithoutRepartidorInput | PaqueteUpdateWithWhereUniqueWithoutRepartidorInput[]
    updateMany?: PaqueteUpdateManyWithWhereWithoutRepartidorInput | PaqueteUpdateManyWithWhereWithoutRepartidorInput[]
    deleteMany?: PaqueteScalarWhereInput | PaqueteScalarWhereInput[]
  }

  export type RepartidorCreateNestedOneWithoutPaquetesInput = {
    create?: XOR<RepartidorCreateWithoutPaquetesInput, RepartidorUncheckedCreateWithoutPaquetesInput>
    connectOrCreate?: RepartidorCreateOrConnectWithoutPaquetesInput
    connect?: RepartidorWhereUniqueInput
  }

  export type EnumTamanoFieldUpdateOperationsInput = {
    set?: $Enums.Tamano
  }

  export type EnumEstadoFieldUpdateOperationsInput = {
    set?: $Enums.Estado
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RepartidorUpdateOneRequiredWithoutPaquetesNestedInput = {
    create?: XOR<RepartidorCreateWithoutPaquetesInput, RepartidorUncheckedCreateWithoutPaquetesInput>
    connectOrCreate?: RepartidorCreateOrConnectWithoutPaquetesInput
    upsert?: RepartidorUpsertWithoutPaquetesInput
    connect?: RepartidorWhereUniqueInput
    update?: XOR<XOR<RepartidorUpdateToOneWithWhereWithoutPaquetesInput, RepartidorUpdateWithoutPaquetesInput>, RepartidorUncheckedUpdateWithoutPaquetesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumTamanoFilter<$PrismaModel = never> = {
    equals?: $Enums.Tamano | EnumTamanoFieldRefInput<$PrismaModel>
    in?: $Enums.Tamano[] | ListEnumTamanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tamano[] | ListEnumTamanoFieldRefInput<$PrismaModel>
    not?: NestedEnumTamanoFilter<$PrismaModel> | $Enums.Tamano
  }

  export type NestedEnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTamanoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tamano | EnumTamanoFieldRefInput<$PrismaModel>
    in?: $Enums.Tamano[] | ListEnumTamanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tamano[] | ListEnumTamanoFieldRefInput<$PrismaModel>
    not?: NestedEnumTamanoWithAggregatesFilter<$PrismaModel> | $Enums.Tamano
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTamanoFilter<$PrismaModel>
    _max?: NestedEnumTamanoFilter<$PrismaModel>
  }

  export type NestedEnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PaqueteCreateWithoutRepartidorInput = {
    id?: string
    codigoEnvio: string
    direccion: string
    destinatario: string
    tamano: $Enums.Tamano
    estado?: $Enums.Estado
    latitud: number
    longitud: number
    ordenEntrega: number
  }

  export type PaqueteUncheckedCreateWithoutRepartidorInput = {
    id?: string
    codigoEnvio: string
    direccion: string
    destinatario: string
    tamano: $Enums.Tamano
    estado?: $Enums.Estado
    latitud: number
    longitud: number
    ordenEntrega: number
  }

  export type PaqueteCreateOrConnectWithoutRepartidorInput = {
    where: PaqueteWhereUniqueInput
    create: XOR<PaqueteCreateWithoutRepartidorInput, PaqueteUncheckedCreateWithoutRepartidorInput>
  }

  export type PaqueteCreateManyRepartidorInputEnvelope = {
    data: PaqueteCreateManyRepartidorInput | PaqueteCreateManyRepartidorInput[]
  }

  export type PaqueteUpsertWithWhereUniqueWithoutRepartidorInput = {
    where: PaqueteWhereUniqueInput
    update: XOR<PaqueteUpdateWithoutRepartidorInput, PaqueteUncheckedUpdateWithoutRepartidorInput>
    create: XOR<PaqueteCreateWithoutRepartidorInput, PaqueteUncheckedCreateWithoutRepartidorInput>
  }

  export type PaqueteUpdateWithWhereUniqueWithoutRepartidorInput = {
    where: PaqueteWhereUniqueInput
    data: XOR<PaqueteUpdateWithoutRepartidorInput, PaqueteUncheckedUpdateWithoutRepartidorInput>
  }

  export type PaqueteUpdateManyWithWhereWithoutRepartidorInput = {
    where: PaqueteScalarWhereInput
    data: XOR<PaqueteUpdateManyMutationInput, PaqueteUncheckedUpdateManyWithoutRepartidorInput>
  }

  export type PaqueteScalarWhereInput = {
    AND?: PaqueteScalarWhereInput | PaqueteScalarWhereInput[]
    OR?: PaqueteScalarWhereInput[]
    NOT?: PaqueteScalarWhereInput | PaqueteScalarWhereInput[]
    id?: StringFilter<"Paquete"> | string
    codigoEnvio?: StringFilter<"Paquete"> | string
    direccion?: StringFilter<"Paquete"> | string
    destinatario?: StringFilter<"Paquete"> | string
    tamano?: EnumTamanoFilter<"Paquete"> | $Enums.Tamano
    estado?: EnumEstadoFilter<"Paquete"> | $Enums.Estado
    latitud?: FloatFilter<"Paquete"> | number
    longitud?: FloatFilter<"Paquete"> | number
    ordenEntrega?: IntFilter<"Paquete"> | number
    repartidorId?: StringFilter<"Paquete"> | string
  }

  export type RepartidorCreateWithoutPaquetesInput = {
    id?: string
    nombre: string
    telefono?: string | null
  }

  export type RepartidorUncheckedCreateWithoutPaquetesInput = {
    id?: string
    nombre: string
    telefono?: string | null
  }

  export type RepartidorCreateOrConnectWithoutPaquetesInput = {
    where: RepartidorWhereUniqueInput
    create: XOR<RepartidorCreateWithoutPaquetesInput, RepartidorUncheckedCreateWithoutPaquetesInput>
  }

  export type RepartidorUpsertWithoutPaquetesInput = {
    update: XOR<RepartidorUpdateWithoutPaquetesInput, RepartidorUncheckedUpdateWithoutPaquetesInput>
    create: XOR<RepartidorCreateWithoutPaquetesInput, RepartidorUncheckedCreateWithoutPaquetesInput>
    where?: RepartidorWhereInput
  }

  export type RepartidorUpdateToOneWithWhereWithoutPaquetesInput = {
    where?: RepartidorWhereInput
    data: XOR<RepartidorUpdateWithoutPaquetesInput, RepartidorUncheckedUpdateWithoutPaquetesInput>
  }

  export type RepartidorUpdateWithoutPaquetesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepartidorUncheckedUpdateWithoutPaquetesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaqueteCreateManyRepartidorInput = {
    id?: string
    codigoEnvio: string
    direccion: string
    destinatario: string
    tamano: $Enums.Tamano
    estado?: $Enums.Estado
    latitud: number
    longitud: number
    ordenEntrega: number
  }

  export type PaqueteUpdateWithoutRepartidorInput = {
    codigoEnvio?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    destinatario?: StringFieldUpdateOperationsInput | string
    tamano?: EnumTamanoFieldUpdateOperationsInput | $Enums.Tamano
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    ordenEntrega?: IntFieldUpdateOperationsInput | number
  }

  export type PaqueteUncheckedUpdateWithoutRepartidorInput = {
    codigoEnvio?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    destinatario?: StringFieldUpdateOperationsInput | string
    tamano?: EnumTamanoFieldUpdateOperationsInput | $Enums.Tamano
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    ordenEntrega?: IntFieldUpdateOperationsInput | number
  }

  export type PaqueteUncheckedUpdateManyWithoutRepartidorInput = {
    codigoEnvio?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    destinatario?: StringFieldUpdateOperationsInput | string
    tamano?: EnumTamanoFieldUpdateOperationsInput | $Enums.Tamano
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    ordenEntrega?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}