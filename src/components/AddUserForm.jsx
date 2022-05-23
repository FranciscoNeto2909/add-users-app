import { useDispatch } from "react-redux"
import { addUser } from "../redux/slice/Slice"
import { useState } from "react"

export default function AddUserForm() {
    
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [avatar, setAvatar] = useState("")
    const [city, setCity] = useState("")

    function handlePostUser() {
        const user = {
            id:1,
            name,
            age,
            avatar,
            city
        }
        dispatch(addUser(user))
    }

    return(
        <form>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" 
                value={name} onChange={e=>setName(e.target.value)} autoComplete="none"/>
                <br />
            <label htmlFor="age">Idade</label>
            <input type="text" id="age"
                value={age} onChange={e=>setAge(e.target.value)} autoComplete="none"/>
                <br />
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" 
                value={avatar} onChange={e=>setAvatar(e.target.value)} autoComplete="none"/>
                <br />
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" 
                value={city} onChange={e=>setCity(e.target.value)} autoComplete="none"/>
                <br />
            <button onClick={handlePostUser}>Enviar</button>
        </form>
    )
}