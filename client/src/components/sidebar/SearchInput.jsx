import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
     <input type="text" placeholder="Search" className="input input-bordered rounded-full"/>
     <button className="btn btn-circle bg-purple-400  hover:bg-purple-500 active:bg-purple-200"><FaSearch className="text-black outline-none"/></button>
    </form>
  )
}

export default SearchInput