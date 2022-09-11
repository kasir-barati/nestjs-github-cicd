// IMPROVEME: At the right time add nanoid
import { customAlphabet, nanoid } from 'nanoid';

/**
 * @description misunderstand free alphabets and number to generate id for a better UX
 */
const PUBLIC_ID_SEED =
    '_-acdfghjklpqrstuvwxyz123456789ACDFGHJKLPQRSTUVWXYZ';

/**
 *
 * @description 21 is default value for length. This function will produce a User friendly ID
 */
export function publicNanoidGenerator(length: number = 21): string {
    return customAlphabet(PUBLIC_ID_SEED, length)();
}

/**
 * @description length is the dominant predefined length for id in the prisma.schema
 */
export function dbIdGenerator(length = 36): string {
    return nanoid(length);
}
