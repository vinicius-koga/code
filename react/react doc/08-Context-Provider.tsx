
//@ts-nocheck

//================
//CONTEXT PROVIDER
//================

/*
O Context permite compartilhar dados entre componentes sem precisar
passá-los manualmente por props em cada nível da árvore.
O Provider disponibiliza esses dados aos componentes descendentes.
*/

import { createContext, useState, useContext, type ReactNode } from "react";

//===================
//CRIANDO UM CONTEXTO
//===================

/*
O createContext() cria um contexto que poderá armazenar
um valor compartilhado entre componentes.
*/
// arquivo -> UserContext.tsx


type UserContextType = {
    user: string;
    setUser: (user: string) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<string>("Vinícius");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


//==========================
//ENVOLVENDO OS COMPONENTES
//==========================

/*
Envolvemos os componentes com o Provider para disponibilizar
o contexto a todos os seus descendentes.
*/
// arquivo -> App.tsx

import { UserProvider } from "./UserContext";
import Profile from "./Profile";

function App() {
    return (
        <UserProvider>
            <Profile />
        </UserProvider>
    );
}

export default App;


//==========================
//ACESSANDO O CONTEXTO
//==========================

/*
O useContext() permite acessar os dados disponibilizados pelo Provider.
Como o contexto pode ser null, verificamos se ele existe antes de usá-lo.
*/
// arquivo -> Profile.tsx

import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function useUserContext() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("Profile deve estar dentro de UserProvider.");
    }

    return context;
}

// Consumindo:
const { user, setUser } = useUserContext();
