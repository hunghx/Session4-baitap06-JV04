
export const Input = ({col, handleSearch}) => {
   
  return (
    <th>
    {col.label}<br />
    <input type="text" onChange={e=>handleSearch({[col.field]:e.target.value})}/>
</th>
  )
}

