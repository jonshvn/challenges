import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'add' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'clear_counter' : () => Promise<string>,
  'days_to_seconds' : (arg_0: bigint) => Promise<bigint>,
  'increment_counter' : (arg_0: bigint) => Promise<bigint>,
  'square' : (arg_0: bigint) => Promise<bigint>,
}
