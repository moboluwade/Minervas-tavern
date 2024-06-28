'use client'

import { useState } from "react";
type HandleSearch = (query: string) => Promise<void>

interface Props {
    handleSearch: HandleSearch
}
const SearchBar: React.FC<Props> = ({ handleSearch }) => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <div className='flex flex-col justify-start items-start relative'>
            <label htmlFor="searchbar">Find a book</label>
            <div className='flex flex-row'>
                <input
                    id='searchbar'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className='w-80 h-8 pl-2 pr-20 border bg-black focus:outline-none focus:border-2 rounded-md'
                />
                <button
                    onClick={()=>{handleSearch(search)}}
                    className='h-8 -ml-16'>search </button>
            </div>
        </div>
    )
}

export default SearchBar