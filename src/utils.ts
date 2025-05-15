import { Load } from "./load"
import { Planet } from "./planet"
import { Spaceship } from "./spaceship"

type Constructor<T> = new (...args: any[]) => T;

export function randomInstance<T>(types: T[]): T {
    const index = Math.floor(Math.random() * types.length)
    return types[index]
}