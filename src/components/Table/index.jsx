import React, { useReducer } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { useState } from 'react'

const initState = [
    {id: 1, name: 'Nguyễn Văn A', email: 'abc@gmail.com', birthday: '04/07/2000', phone: '0987654321'},
    {id: 2, name: 'Nguyễn Văn B', email: 'abc@gmail.com', birthday: '04/07/2000', phone: '0987654321'},
    {id: 3, name: 'Nguyễn Văn C', email: 'abc@gmail.com', birthday: '04/07/2000', phone: '0987654321'},
    {id: 4, name: 'Nguyễn Văn D', email: 'abc@gmail.com', birthday: '04/07/2000', phone: '0987654321'},
    {id: 5, name: 'Nguyễn Văn E', email: 'abc@gmail.com', birthday: '04/07/2000', phone: '0987654321'},
]

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            // Xử lý logic thêm dữ liệu vào mảng
            return [...state, action.payload];
        case "EDIT":
            // Xử lý logic sửa
            let updated = state.map(u => {
                if (u.id === action.payload.id) {
                    u.name = action.payload.name;
                    u.email = action.payload.email;
                    u.birthday = action.payload.birthday;
                    u.phone = action.payload.phone;
                }
                return u;
            })
            return [...updated];
        case "REMOVE":
            // Xử lý logic xóa
            let indexDel = state.findIndex(u => u.id === action.payload);
            if (indexDel !== -1) { // tìm thấy thì xóa
                state.splice(indexDel, 1);
            }
            return [...state];
        default:
            return state;
    }
}

export default function TableComponent() {
    const columns = [
        {label: 'Id', field: 'id'},
        {label: 'Email', field: 'email'},
        {label: 'Name', field: 'name'},
        {label: 'Phone', field: 'phone'},
        {label: 'Birthday', field: 'birthday'},
    ]
    const [search , setSearch] = useState({
        id:"",
        email:"",
        name:"",
        phone:"",
        birthday:""
    })
    console.log(search);
    const handleSearch = (data)=>{
      setSearch({...search,...data})
    }
    /**
     * Sử dụng reducer và useReducer để định nghĩa các logic xử lý (thêm, sửa, xóa) cho state data. 
     * Viết hàm xử lý sự kiện cho 3 button Thêm, Sửa, Xóa để dispatch action để reducer update dữ liệu state data.
     */
    const [data, dispatch] = useReducer(reducer, initState);
    /**
     * Xây dựng tính năng sắp xếp dữ liệu khi click vào tiêu đề của từng cột, sử dụng hooks, events, props, ...
     * Tham khảo cách sắp xếp trong bài thực hành session4
     */
    const handleAdd = () => {
        dispatch({
            type: "ADD",
            payload: {
                id: 6,
                name: 'test useReducer',
                email: 'abc@gmail.com',
                birthday: '04/07/2000', 
                phone: '0987654321'
            }
        })
    }
    const handleEdit = () => {
        dispatch({
            type: "EDIT",
            payload: {
                id: 5,
                name: 'useReducer updated',
                email: 'abc@gmail.com',
                birthday: '04/07/2000', 
                phone: '0987654321'
            }
        })
    }
    const handleremove = () => {
        dispatch({
            type: "REMOVE",
            payload: 1
        })
    }
    
    return (
        <div>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleEdit}>EDIT</button>
            <button onClick={handleremove}>REMOVE</button>
            <h1>Table Component</h1>
            <table border={1} cellPadding={5} cellSpacing={0} width={'100%'}>
                <TableHead columns={columns} handleSearch={handleSearch}/>
                <TableBody search={search} data={data} columns={columns} />
            </table>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
