import {createContext, ReactElement, useEffect, useState} from "react";

interface ViewportSizeProviderProps {
  readonly children: ReactElement;
}

const ViewportContext = createContext({});

function ViewportSizeProvider({ children }: ViewportSizeProviderProps) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleWindowResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return <ViewportContext.Provider value={{width, height}}>
    {children}
  </ViewportContext.Provider>
}

export default ViewportSizeProvider;
