import { createContext, useState } from "react";

const UserStateContext = createContext()

const UserState = (props) => {

    const [userData, setUserData] = useState("Context Running")
    const setData = (value) => {
        setUserData(value)
    }

    return (
        <UserStateContext.Provider value={{userData, setData}}>
            {props.children}
        </UserStateContext.Provider>
    )

}

export { UserState, UserStateContext };