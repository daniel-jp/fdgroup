import { Link } from 'react-router-dom';

const MobileNavItem = ({href, children}:any) => {
  return (
    <Link to={href}>
      {children}
    </Link>
  );
};
export default MobileNavItem;