export enum CountActionType {
    PLUS = "plus",
    MINUS = "minus",
    RESET = "reset",
}

export interface ActionType {
    type: CountActionType;
}
