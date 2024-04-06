import React from 'react'

const Header = () => {
  return (
    <div className="bg-white py-3">
    <header className="flex box-border  ">
      <div className="grid place-content-start px-2 text-xs text-clip"><img className='  mt-2 size-5 inline' src='https://upload.wikimedia.org/wikipedia/commons/d/d6/Tilda_Logo.png'/></div>
      <div className=" inline w-4/5 h-1 pt-2 text-sm text-clip ">Frequently asked questions</div>

<ul className='md:flex inline md:items-center'>
  <li className='mx-4'> <a className="inline h-1 text-sm text-nowrap" href="https://tilda.cc/">Go to Tilda.cc</a></li>
  <li className='mx-4'><a className='inline  h-1 text-sm text-nowrap' href="https://help.tilda.cc/">Go to Help Center</a> </li>
  <li className='mx-4'> <select className="text-sm border-2 mr-5 border-gray-300 rounded-" placeholder="EN">
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="pt">PT</option>
          <option value="fr">FR</option>
          
        </select></li>
  
</ul>

     
    </header>
  </div>
  )
}

export default Header