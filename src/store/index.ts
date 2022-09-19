import React from 'react';

export interface IStore {}

class RootStore implements IStore {
  constructor() {}
}

const StoresContext = React.createContext(new RootStore());
const useStore = () => React.useContext(StoresContext);

export {StoresContext, useStore};

export default RootStore;
