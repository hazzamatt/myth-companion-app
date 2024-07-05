import React, { PropsWithChildren } from 'react';

// Interfaces
import { IEnemyHealthBar } from '../types';

interface ILoadGame {
    type: 'LOAD_GAME';
}

interface IUpdateDarkness {
    type: 'UPDATE_DARKNESS';
    payload: {
        q: number,
        r: number,
    };
}

interface IAddEnemy {
    type: 'ADD_ENEMY';
    payload: IEnemyHealthBar;
}

type StateActions = 
    | ILoadGame
    | IUpdateDarkness
    | IAddEnemy;

    
type Dispatch = (action: StateActions, payload?: unknown) => void;

interface IGameState {
    ap: number;
    darknessCount: number;
    enemies: IEnemyHealthBar[];
}

const defaultGameState: IGameState = {
    ap: 0,
    darknessCount: 0,
    enemies: [],
};
    
const GameStateContext = React.createContext<{state: IGameState, dispatch: Dispatch} | undefined>(undefined);
    
const GameStateReducer = (state: IGameState, action: StateActions) => {
    switch(action.type) {
        case 'LOAD_GAME':
            return {
                ...state
            };
        case 'UPDATE_DARKNESS':
            return {
                ...state,
                ap: action.payload.r,
                darknessCount: action.payload.q,
            };
        case 'ADD_ENEMY': {
            const tempEnemies = [...state.enemies];
            tempEnemies.push(action.payload);
            return {
                ...state,
                enemies: tempEnemies,
            }
        }
        default:
            return {
                ...state
            };
    }
}

const GameStateProvider: React.FC<PropsWithChildren<unknown>> = ({children}) => {
    const [state, dispatch] = React.useReducer(GameStateReducer, defaultGameState);

    const value = {state, dispatch};

    return <GameStateContext.Provider value={value}>{children}</GameStateContext.Provider>
};

const useGameState = () => {
    const context = React.useContext(GameStateContext);
    if(context === undefined) {
        throw new Error('useGameState must be within a GameStateProvider');
    }
    return context;
};

export {GameStateProvider, useGameState};