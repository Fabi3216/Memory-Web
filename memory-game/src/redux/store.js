  // src/redux/store.js
  import { configureStore, createSlice } from '@reduxjs/toolkit';

  const initialState = {
    cards: [],
    moves: 0,
    matchedPairs: 0,
    difficulty: 8,
  };

  const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
      setCards(state, action) {
        state.cards = action.payload;
      },
      flipCard(state, action) {
        const card = state.cards.find(c => c.id === action.payload);
        card.isFlipped = !card.isFlipped;
      },
      incrementMoves(state) {
        state.moves += 1;
      },
      incrementMatchedPairs(state) {
        state.matchedPairs += 1;
      },
      resetGame(state) {
        state.cards = [];
        state.moves = 0;
        state.matchedPairs = 0;
      },
      setDifficulty(state, action) {
        state.difficulty = action.payload;
      },
    },
  });

  export const { setCards, flipCard, incrementMoves, incrementMatchedPairs, resetGame, setDifficulty } = gameSlice.actions;

  export const store = configureStore({
    reducer: {
      game: gameSlice.reducer,
    },
  });
  
