import Link from 'next/link';

const MenuComponent = () => {
  return (
    <ul>
      <li>
        <Link href={'/'}>Index</Link>
      </li>
      <li>
        <Link href={'/another'}>Another</Link>
      </li>
      <li>
        <Link href={'/user'}>User</Link>
      </li>
      <li>
        <Link href={'/board'}>Board</Link>
      </li>
      <li>
        <Link href={'/together'}>Together</Link>
      </li>
    </ul>
  );
};

export default MenuComponent;
