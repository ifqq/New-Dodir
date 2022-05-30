export const itemTotalMinus = (id, price) => ({
  type: 'ITEM_TOTAL_MINUS',
  payload: {
    id: id,
    price: price,
  },
});

export const itemTotalPlus = (id, price) => ({
  type: 'ITEM_TOTAL_PLUS',
  payload: {
    id: id,
    price: price,
  },
});

export const setCleaningPrice = (value, lastValue) => ({
  type: 'SET_CLEANING_PRICE',
  payload: {
    value: value,
    lastValue: lastValue,
  },
});
