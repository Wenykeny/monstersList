import React from 'react'
import './search_style.css'

export const SearchBox = ({ placeholder, handleChange, handleAvatar}) => (
    <div>
        <input type="search" className="search" name="searchField" onChange={handleChange} placeholder={placeholder} />
        {/* // Selection field */}
        <div className="select_img">
            <select name="avatar" className="select" onChange={handleAvatar}>
                <option value="0">Select Random</option>
                <option value="5">People Avatar</option>
                <option value="2">Monsters</option>
                <option value="3">Disembodied Heads</option>
                <option value="4">Beautiful Kittens</option>
                <option value="1">Cartoon Robo</option>
            </select>
        </div>
    </div>
)

