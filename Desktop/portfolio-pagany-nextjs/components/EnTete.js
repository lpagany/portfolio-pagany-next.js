import styles from '../styles/EnTete.css';
import React from 'react';
import Link from 'next/link';

const EnTete = () => {
  return (
    <div className="bg-gray-100 p-4">
      <ul className="flex justify-center">
        <li className="mx-4">
          <Link href="/" passHref>
            <a className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded">Accueil</a>
          </Link>
        </li>
        <li className="mx-4">
          <Link href="/projets" passHref>
            <a className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded">Projets</a>
          </Link>
        </li>
        <li className="mx-4">
          <Link href="/contact" passHref>
            <a className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded">Contact</a>
          </Link>
        </li>
        <li className="mx-4">
          <Link href="/temoignages" passHref>
            <a className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded">Témoignages</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EnTete;