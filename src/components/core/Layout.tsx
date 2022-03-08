import React,{FC} from 'react';
import Navigation from "./Navigation";

interface Props {
  children: React.ReactNode
}


const Layout: FC<Props> = ({children}) => {
  return (
    <div>
      <Navigation/>{children}
    </div>
  );
};

export default Layout;
