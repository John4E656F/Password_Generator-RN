export type DataState = {
  numbers: boolean;
  symbols: boolean;
  capitalize: boolean;
  uppercase: boolean;
  lowercase: boolean;
};

export interface DataStatePass extends DataState {
  PasswordLengthInput: number;
}
