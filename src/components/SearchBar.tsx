import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        onSearch(inputValue);
        setInputValue('');
    };

    return (
        <div className="flex items-center justify-center gap-2 p-4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter location name"
                className="w-2/3 p-2 border rounded-lg shadow-sm"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
