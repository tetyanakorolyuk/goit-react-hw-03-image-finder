import { Circles } from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader() {
  return (
    <div className={s.loader}>
      <Circles ariaLabel="loading" color="#FFB6C1"/>
    </div>
  );
}

export default Loader;
