const isValidJson = (jsonData, setMessage) => {
    const requiredKeys = ['player1', 'player2']

    for (const key of requiredKeys) {
        if (!(key in jsonData)) {
            setMessage({ text: `Missing key: ${key}`, type: 'error' })
            return false
        }
    }

    for (const playerKey in jsonData) {
        const player = jsonData[playerKey]

        if (!isValidPlayer(player, setMessage)) {
            return false
        }

        for (const activity of player.activities) {
            if (!isValidActivity(activity, setMessage)) {
                return false
            }
        }
    }

    return true
}

const isValidPlayer = (player, setMessage) => {
    const requiredKeys = ['name', 'theme', 'coins', 'activities']

    for (const key of requiredKeys) {
        if (!(key in player)) {
            setMessage({ text: `Missing key in player: ${key}`, type: 'error' })
            return false
        }
    }

    if (!isValidCoins(player.coins, setMessage)) {
        setMessage({ text: `Invalid coins value in player`, type: 'error' })
        return false
    }

    if (!isValidTheme(player.theme, setMessage)) {
        setMessage({ text: 'Invalid theme value in player', type: 'error' })
        return false
    }

    return true
}

const isValidActivity = (activity, setMessage) => {
    const requiredKeys = ['id', 'name', 'reroll_cost', 'weight']

    for (const key of requiredKeys) {
        if (!(key in activity)) {
            setMessage({ text: `Missing key in activity: ${key}`, type: 'error' })
            return false
        }
    }

    if (!isValidId(activity.id, setMessage)) {
        setMessage({ text: 'Invalid id value in activity', type: 'error' })
        return false
    }

    if (!isValidRerollCost(activity.reroll_cost, setMessage)) {
        setMessage({ text: 'Invalid reroll_cost value in activity', type: 'error' })
        return false
    }

    if (!isValidWeight(activity.weight, setMessage)) {
        setMessage({ text: 'Invalid weight value in activity', type: 'error' })
        return false
    }

    return true
}

const isValidCoins = coins => {
    return typeof coins === 'number' && coins >= 0
}

const isValidTheme = theme => {
    const validThemes = ['blue', 'green', 'lime', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow']
    return validThemes.includes(theme)
}

const isValidId = id => {
    return typeof id === 'number'
}

const isValidRerollCost = rerollCost => {
    return typeof rerollCost === 'number' && rerollCost >= 2 && rerollCost <= 9
}

const isValidWeight = weight => {
    return typeof weight === 'number' && weight >= 1 && weight <= 10
}


export default isValidJson