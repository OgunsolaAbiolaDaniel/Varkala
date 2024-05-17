import React from 'react'

function DocsDropDownMenu() {
  return (
    <div className="hidden lg:flex z-30 bg-white text-sm text-gray-400 py-1 absolute left-[48%] top-28 shadow-lg">
      <ul className="list-none font-medium w-full">
        <li className="px-3 py-2">Introduction</li>
        <li className="px-3 py-2">Directory structure</li>
        <li className="px-3 py-2">Gulp</li>
        <li className="px-3 py-2">Customizing CSS</li>
        <li className="px-3 py-2">Credits</li>
        <li className="px-3 py-2">Changelog</li>
        <hr className="border border-gray-400" />
        <li className="px-3 py-2">Bootstrap</li>
        <li className="px-3 py-2">Theme</li>
      </ul>
    </div>
  );
}

export default DocsDropDownMenu