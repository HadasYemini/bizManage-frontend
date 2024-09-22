import React, { useEffect, useState } from "react"
const UsersContext = React.createContext(null)

export function UsersContextProvider({ children }) {

    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState()

    function isUserExist(userName) {
        let allUsers = JSON.parse(localStorage.getItem("users"))
        if (!allUsers) {
            return false
        }else{
            return users.find(user => user.userName === userName)
        }
    }

    function validateUser(user) {
        const tempUser = isUserExist(user.userName);
        if (tempUser && tempUser.password === user.password) {
            setCurrentUser(tempUser)
            return true
        }else{
            return false
        }
    }

    function updateUser(user) {
        let tempUsers = [...users]
        const ind = tempUsers.findIndex(u => u.userName === user.userName)
        tempUsers[ind] = user
        setUsers(tempUsers)
        localStorage.setItem("users", JSON.stringify(tempUsers));
    }

    // save user from register
    function saveUser(user) {
        const tempUser = [...users,user]
        setUsers(tempUser)
        localStorage.setItem("users", JSON.stringify(tempUser));
    }

    useEffect(()=>{
        const allUsers = JSON.parse(localStorage.getItem("users"))
        if (allUsers) {
            setUsers([...allUsers])
        }
    },[])



    return <UsersContext.Provider value={{ users, setUsers, saveUser, updateUser, isUserExist, validateUser, currentUser, setCurrentUser,
     }}>
        {children}
    </UsersContext.Provider>
}

export const useUsers = () => {
    const context = React.useContext(UsersContext)
    return context
}