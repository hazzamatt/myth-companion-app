import React from "react";

// Custom Components
import DefaultButton from "../../shared-components/button";

// Context
import { useGameState } from "../context.gameState";

// Types
import { IEnemyHealthBar } from "../../types";

const EnemyTracker: React.FC = () => {
    const gsc = useGameState();

    const addEnemy = () => {
        gsc.dispatch({type: 'ADD_ENEMY', payload: {enemyName: 'Steve', currentHealth: 3}});
    }
    return (
        <>
            <DefaultButton buttonFunction={addEnemy}>Add Enemy</DefaultButton>
            <div>
                {
                    gsc.state.enemies.map((enemy: IEnemyHealthBar, index: number) => {
                        return (
                            <div>{`${index}: ${enemy.enemyName} - ${enemy.currentHealth}`}</div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default EnemyTracker;