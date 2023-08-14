import React from 'react'
import FestivalListSeachButton from './FestivalListSeachButton'

export default function FestivalListHeader() {
    return (
        <div className='flex justify-center'>
            <select >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
            </select>
            <select >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
            </select>
            <FestivalListSeachButton/>
        </div>
    )
}
