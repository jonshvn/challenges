export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'clear_counter' : IDL.Func([], [IDL.Text], []),
    'days_to_seconds' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'increment_counter' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'square' : IDL.Func([IDL.Nat], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
