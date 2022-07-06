function solve() {
    canCast = (state) => ({
        cast: (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    })
    
    function mage(name) {
        let state = {
            name,
            health: 100,
            mana: 100
        };
        return Object.assign(state, canCast(state));
    }
    
    canFight = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    })
    
    function fighter(name) {
        let state = {
            name,
            health: 100,
            stamina: 100
        };
        return Object.assign(state, canFight(state));
    }
    return {mage, fighter};
}