const initialState = {
  totalPrice: 0,
  cleaningPrice: 6500,
  items: [
    {
      id: 1,
      title: 'Количество санузлов',
      price: 350,
      total: 0,
    },
    {
      id: 2,
      title: 'Мойка окон (двустворчатые)',
      price: 700,
      total: 0,
    },

    {
      id: 3,
      title: 'Мойка окон (одностворчатые)',
      price: 500,
      total: 0,
    },

    {
      id: 4,
      title: 'Мытье холодильника внутри',
      price: 350,
      total: 0,
    },

    {
      id: 5,
      title: 'Мытье духовки/СВЧ внутри',
      price: 300,
      total: 0,
    },

    {
      id: 6,
      title: 'Мытье люстры',
      price: 250,
      total: 0,
    },

    {
      id: 7,
      title: 'Особые поручения',
      price: 700,
      total: 0,
    },

    {
      id: 8,
      title: 'Уборка на балконе (полностью)',
      price: 2000,
      total: 0,
    },

    {
      id: 9,
      title: 'Химчистка стула',
      price: 600,
      total: 0,
    },

    {
      id: 10,
      title: 'Химчистка кресла',
      price: 1200,
      total: 0,
    },

    {
      id: 11,
      title: 'Химчистка дивана',
      price: 3000,
      total: 0,
    },

    {
      id: 12,
      title: 'Потолок',
      price: 700,
      total: 0,
    },

    {
      id: 13,
      title: 'Стены в одной комнате',
      price: 700,
      total: 0,
    },

    {
      id: 14,
      title: 'Заехать за ключами',
      price: 350,
      total: 0,
    },

    {
      id: 15,
      title: 'Уборка на балконе (без стекол)',
      price: 700,
      total: 0,
    },

    {
      id: 16,
      title: 'Мойка окон (трехстворчатые)',
      price: 1000,
      total: 0,
    },

    {
      id: 17,
      title: 'Парогенератор',
      price: 700,
      total: 0,
    },
  ],
  fast: { room1: 2500, room2: 3500, room3: 4500, room4: 5500 },
  repair: { room1: 7500, room2: 12500, room3: 14500, room4: 15500 },
  general: { room1: 6500, room2: 9000, room3: 11000, room4: 13500 },
};

export function calcReducer(state = initialState, action) {
  if (action.type === 'ITEM_TOTAL_MINUS') {
    const newArr = state.items.map((obj) => {
      if (obj.id === action.payload.id) {
        return { ...obj, total: obj.total - 1 };
      } else {
        return obj;
      }
    });
    return {
      ...state,
      totalPrice: state.totalPrice - action.payload.price,
      items: newArr,
    };
  }

  if (action.type === 'ITEM_TOTAL_PLUS') {
    const newArr = state.items.map((obj) => {
      if (obj.id === action.payload.id) {
        return { ...obj, total: obj.total + 1 };
      } else {
        return obj;
      }
    });
    return {
      ...state,
      totalPrice: state.totalPrice + action.payload.price,
      items: newArr,
    };
  }
  if (action.type === 'SET_CLEANING_PRICE') {
    let newPrice = 0;
    if (action.payload.value === 'fast') {
      newPrice = state.fast[`${action.payload.lastValue.firstSelect}`];
      return { ...state, cleaningPrice: newPrice };
    }
    if (action.payload.value === 'general') {
      newPrice = state.general[`${action.payload.lastValue.firstSelect}`];
      return { ...state, cleaningPrice: newPrice };
    }
    if (action.payload.value === 'repair') {
      newPrice = state.repair[`${action.payload.lastValue.firstSelect}`];
      return { ...state, cleaningPrice: newPrice };
    }
    if (action.payload.lastValue.secondSelect === 'general') {
      newPrice = state.general[`${action.payload.value}`];
    }
    if (action.payload.lastValue.secondSelect === 'fast') {
      newPrice = state.fast[`${action.payload.value}`];
    }
    if (action.payload.lastValue.secondSelect === 'repair') {
      newPrice = state.repair[`${action.payload.value}`];
    }
    return { ...state, cleaningPrice: newPrice };
  }
  return state;
}
