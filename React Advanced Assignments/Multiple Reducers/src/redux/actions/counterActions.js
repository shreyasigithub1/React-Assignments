// define counter action constants here

export const INCREASE_COUNT = ("Increase Count");
export const DECREASE_COUNT = ("Decrease Count");
export const RESET_COUNT = ("Reset Count");

// define counter action creators here

export const increaseCount = () => ({ type: INCREASE_COUNT });
export const decreaseCount = () => ({ type: DECREASE_COUNT });
export const resetCount = () => ({ type: RESET_COUNT });

