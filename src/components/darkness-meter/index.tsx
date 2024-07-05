import React from "react";

// Context
import { useGameState } from "../context.gameState";

const DarknessMeter: React.FC = () => {
    const gsc = useGameState();
    return (
        <div>
            Meter Count: {gsc.state.ap}
            Darkness Count: {gsc.state.darknessCount}
        </div>
    )
};

export default DarknessMeter;