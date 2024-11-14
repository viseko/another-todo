import { v4 as uuidv4 } from 'uuid';

const createTask = () => ({
  id: uuidv4(),
  title: "",
  description: "",
  checked: false,
  checkLists: [],
  time: {
    created: null,
    estimated: null,
    spent: null
  }
});

export default createTask;