const SearchInput = ({handleSearch}) => {
  return (
    <div className="flex mx-auto max-w-7xl lg:px-8 mt-8">
      <input 
        type="text" 
        className="p-2 h-10 w-full border border-slate-300 rounded" 
        placeholder="Serach news here..."
        onChange={e => handleSearch(e.target.value)}
        />
    </div>
  )
}

export default SearchInput;