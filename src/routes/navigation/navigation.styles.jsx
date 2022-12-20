import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 85%;
  padding: 25px;`

export const NavLinks = styled.div` 
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

/* .navigation {
    // height: 70px;
    // width: 100%;
    // display: flex;
    // justify-content: space-between;
    // margin-bottom: 25px;
  
    .logo-container {
      height: 100%;
      width: 85%;
      padding: 25px;
    }
  
    .nav-links-container {
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  
      .nav-link {
        padding: 10px 15px;
        cursor: pointer;
      }
    }
  }
   */