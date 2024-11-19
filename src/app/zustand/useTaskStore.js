import {create} from 'zustand';
import {persist} from "zustand/middleware";

const addItem = (state, item) => {
  const {id} = item;
  return {
    ...state,
    byID: {
      ...state.byID,
      [id]: item,
    },
    allID: [...state.allID, id]
  };
};

const removeItem = (state, id) => {
  const { [id]: _, ...newByID } = state.byID;
  return {
    ...state,
    byID: newByID,
    allID: state.allID.filter(itemID => itemID !== id)
  };
};

const updateItem = (state, payload) => {
  const {id} = payload;
  return {
    ...state,
    byID: {
      ...state.byID,
      [id]: {
        ...state.byID[id],
        ...payload
      }
    }
  };
};

const useTaskStore = create(
  persist(
    (set, get) => ({
      byID: {},
      allID: [],
      editMode: false,
      taskToEdit: null,
      add: (item) => set(state => addItem(state, item)),
      remove: (id) => set(state => removeItem(state, id)),
      update: (payload) => set(state => updateItem(state, payload)),
      editTask: (id) => {
        const task = get().byID[id];
        set({taskToEdit: task, editMode: Boolean(task)});
      }
    }),
    {
      name: "cards"
    }
  )
);

export default useTaskStore;
