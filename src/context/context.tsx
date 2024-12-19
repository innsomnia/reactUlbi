import { createContext } from 'react'
import { IAuthTypes, IModalTypes } from '../typeModules/modules'

export const AuthContext = createContext({} as IAuthTypes)

export const ModalContext = createContext({} as IModalTypes)
