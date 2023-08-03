'use client'
import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
             <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border"></hr>
        <div className="mx-auto p-4 flex flex-col text-center text-neutral-900px">
          <div>© 2023 Pagany Léonard</div>
          <div className="flex flex-row items-center justify-center space-x-2 mb-1">
            <a 
            href="https://github.com/lpagany/Portfolio-PaganyLeonard" 
            rel="noreferrer" 
            target="_blank"
            >
            <AiOutlineGithub
            className="hover:-translate-y-1 transition-transform cursor-pointer"
            size={30}
              />
              </a>

              <a
              href="https://www.linkedin.com/in/pagany-l%C3%A9onard-41a688a/"
              rel="noreferrer"
              target="_blank"
              >
                <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer"
                size={30}
                />
            </a>
          </div>
        </div>
    </div>
        </footer>
    );
}

export default Footer;