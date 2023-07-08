import React from 'react'

export default function TableBody({data, columns, search}) {
    let {id, email, name, phone, birthday} = search;
    let listInfo = data.filter((element)=>{
        // nếu các trường rỗng thì bỏ qua
        if(id.trim()===""){
            return (element.email.includes(email)&&element.name.includes(name)&&element.phone.includes(phone)&&element.birthday.includes(birthday))
        }else{
            return(element.id==id&&element.email.includes(email)&&element.name.includes(name)&&element.phone.includes(phone)&&element.birthday.includes(birthday))
        }
    })
    return (
        <tbody>
            {listInfo.map(x => <tr key={x.id}>
                {columns.map(col => <td key={col.field+"_"+x.id}>{x[col.field]}</td>)}
            </tr>)}
        </tbody>
    )
}
