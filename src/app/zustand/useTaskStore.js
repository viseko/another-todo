import {create} from 'zustand';
import {persist} from "zustand/middleware";

const addItem = (state, item) => {
  const {id} = item;
  state.byID[id] = item;
  state.allID.push(id);

  return {
    ...state
  };
};

const removeItem = (state, id) => {
  delete state.byID[id];
  state.allID = state.allID.filter(itemID => itemID !== id);

  return {
    ...state
  };
};

const updateItem = (state, payload) => {
  const {id} = payload;
  const targetItem = state.byID[id];
  state.byID[id] = {
    ...targetItem,
    ...payload
  };

  return {
    ...state
  };
} ;

const useTaskStore = create(
  persist(
    (set) => ({
      byID: {},
      allID: [],
      add: (item) => set(state => addItem(state, item)),
      remove: (id) => set(state => removeItem(state, id)),
      update: (payload) => set(state => updateItem(state, payload))
    }),
    {
      name: "cards" 
    }
  )
);

export default useTaskStore;  