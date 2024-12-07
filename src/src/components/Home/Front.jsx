import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Front({img, isOpen, setIsOpen }) {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <section  id="" className="z-10">
      <div onClick={()=>setIsOpen(true)} className=" cursor-pointer sm:w-11/12 mx-auto">
        <div
          className={` sm:rounded-3xl relative w-full sm:h-[320px] h-[90px] ${img} bg-center bg-contain sm:bg-contain lg:bg-center bg-no-repeat `}
        >
          <div className="absolute bottom-[24%] sm:left-[6%] left-[5%] flex items-center flex-wrap gap-4">
            {searchBar && (
              <form className="flex items-end gap-4 flex-wrap">
                <SearchBar />
                <button className="bg-white px-2 py-3 w-24 font-bold uppercase text-sm text-black hover:text-white hover:bg-black hover:bg-opacity-50 rounded-md">
                  Find
                </button>
              </form>
            )}
             

            {/* {!searchBar && (
              <button
                onClick={() => setSearchBar(!searchBar)}
                className="sm:text-[20px] text-white sm:px-10 px-3 py-3 rounded-md border-[1px] border-white capitalize sm:w-auto w-full font-bold"
              >
                Check Availibilty
              </button>
            )} */}
          </div>
       
        </div>
      </div>
    </section>
  );
}
