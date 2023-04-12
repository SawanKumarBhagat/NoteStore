import Link from "next/link";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

function Header({ user, signout}) {
  const [name, setName] = useState();
  // console.log(user.value)
  useEffect(() => {
    if(user.value){
      const decoded = jwt.verify(user.value, 'process.env.SECRET');
      setName(decoded.name);
      console.log(name)
    }
  }, [user])
  

  return (
    <div className="sticky top-0 px-5 h-16 flex items-center justify-between mx-auto max-w-7xl z-20 border-b border-[#eee]">
      <div className="flex flex-row">
        <p className="font-[500] text-lg  pr-2">
          Note <span className="text-[#33AAFF] text-lg">Store</span>
        </p>
      </div>
      <div>
        <p className="text-[#000000A6] font-normal">
          {user.value && (
            <Link
              href="/signin"
              className="flex space-x-2 font-semibold text-lg text-[#33AAFF] leading-none"
              onClick={signout}
            >
              <button className="flex space-x-1 items-center">
                <i className="material-icons text-[#33AAFF]">account_circle</i>
                <p>{name}</p>
              </button>
              <button className="text-gray-700 font-semibold bg-[#dadee4] rounded-md px-[10px] py-2 active:text-black">
                Sign Out
              </button>
            </Link>
          )}
          {!user.value && (
            <Link
              href="/signin"
              className="flex space-x-1 font-semibold text-lg leading-none"
            >
              <button className="text-gray-700 font-semibold bg-[#dadee4] rounded-md px-[10px] py-2 active:text-black">
                Sign in
              </button>
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}

export default Header;
