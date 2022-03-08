import React from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";
import {AppState} from "../../store/reducers";
import {RouterState} from "connected-react-router";

function useActive(currentPath:string,path:string):string{
  return currentPath ===path? "ant-menu-item-selected":""
}

const Navigation = () => {
  const router = useSelector<AppState,RouterState>(state => state.router)
  const pathname = router.location.pathname
  const isHome = useActive(pathname,'/')
  const isShop = useActive(pathname,'/shop')
  const isSingin = useActive(pathname,'/singin')
  const isSingup = useActive(pathname,'/singup')



  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item className={isHome}>
        <Link to='/'>首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop}>
        <Link to='/shop'>商城</Link>
      </Menu.Item>
      <Menu.Item className={isSingin}>
        <Link to='/singin'>登录</Link>
      </Menu.Item>
      <Menu.Item className={isSingup}>
        <Link to='/singup'>注册</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
