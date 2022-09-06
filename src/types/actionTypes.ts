type ActionTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActions<T extends { [key: string]: (...args: any[]) => any }> =
    ReturnType<ActionTypes<T>>