import { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import { ICat } from '../types';

const CatContext = createContext<any>([]);

export function CatContextProvider({ children }: { children: ReactNode }) {
  return (
    <CatContext.Provider value={useLocalStorage<ICat[]>('cats', [] as ICat[])}>
      {children}
    </CatContext.Provider>
  );
}

export function useCatContext() {
  return useContext(CatContext);
}
