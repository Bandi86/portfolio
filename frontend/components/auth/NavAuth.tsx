import { cookies } from 'next/headers';
import Link from 'next/link';
import Logout from './Logout';

const NavAuth = () => {
  const cookiesList = cookies();
  const token = cookiesList.has('jwt');


  return (
    <div>
      {token ? (
        <div className='flex flex-row gap-6'>
          <Link href='/profile/id'>
            <button>Profil</button>
          </Link>
          <Logout />
        </div>
      ) : (
        <div className='flex flex-row gap-6'>
          <Link href='/login'>Bejelentkezés</Link>
          <Link href='/register'>Regisztráció</Link>
        </div>
      )}
    </div>
  );
};

export default NavAuth;
