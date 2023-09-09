class Attack {
    setTactics(attackTactics) {
        return "Attack is applied";
    }
}

class Defense {
    setTactics(defenseTactics) {
        return "Defense is applied";
    }
}

class Blanace {
    setTactics(balanceTactics) {
        return "Balance is applied";
    }
}

class Tactics {
    constructor(tacticType) {
        this.tacticType = tacticType;
    }
    setTacticPlan() {
        return this.tacticType.setTactics();
    }
}

    const attack = new Attack();
    const defense = new Defense();
    const balance = new Blanace();
    const tactic = new Tactics(defense);
    console.log(tactic.setTacticPlan());