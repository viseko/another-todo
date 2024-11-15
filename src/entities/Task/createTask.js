import { v4 as uuidv4 } from 'uuid';

const createTask = () => ({
  id: uuidv4(),
  title: "",
  description: "",
  checked: false,
  checkLists: [],
  priority: 0,
  difficult: 0,
  dateCreated: 0,
  dateDeadline: "",
  timeCost: "",
  cost: 0,
});

export default createTask;