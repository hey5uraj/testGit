import { useSelector, useDispatch } from 'react-redux';

import { setLogin, setLogout } from 'state/AppState';

const useAuth = () => {

    const auth = {
        name: useSelector((state) => state.appData.name),
      
        email: useSelector((state) => state.appData.email),
        token: useSelector((state) => state.appData.token),
       
    }

    return { setLogin, setLogout,auth}
}

export default useAuth;

