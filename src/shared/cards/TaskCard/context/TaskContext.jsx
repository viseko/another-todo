import { createContext, useContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({children, item}) => (
  <TaskContext.Provider value={{item}}>
    {children}
  </TaskContext.Provider>
);

export const useTaskContext = () => useContext(TaskContext);