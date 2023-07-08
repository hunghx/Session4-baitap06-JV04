import React from 'react'
import { Input } from './Input'

export default function TableHead({columns,handleSearch}) {

    return (
        <thead>
            <tr>
                {columns.map((col, idx) =><Input key={idx} col={col} handleSearch={handleSearch} />)}
            </tr>
        </thead>
    )
}
