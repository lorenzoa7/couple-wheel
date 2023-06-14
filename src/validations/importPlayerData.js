const isValidPlayerJson = (jsonData, setMessage, t) => {
    const requiredKeys = ['player1', 'player2']

    for (const key of requiredKeys) {
        if (!(key in jsonData)) {
            setMessage({ text: `${t('message.import.missing_key')}: ${key}`, type: 'error' })
            return false
        }
    }

    for (const playerKey in jsonData) {
        const player = jsonData[playerKey]

        if (!isValidPlayer(player, setMessage, t)) {
            return false
        }

        for (const activity of player.activities) {
            if (!isValidActivity(activity, setMessage, t)) {
                return false
            }
        }
    }

    return true
}

const isValidPlayer = (player, setMessage, t) => {
    const requiredKeys = ['name', 'theme', 'coins', 'activities']

    for (const key of requiredKeys) {
        if (!(key in player)) {
            setMessage({ text: `${t('message.import.missing_key_player')}: ${key}`, type: 'error' })
            return false
        }
    }

    if (!isValidCoins(player.coins)) {
        setMessage({ text: t('message.import.invalid_coins_value'), type: 'error' })
        return false
    }

    if (!isValidTheme(player.theme)) {
        setMessage({ text: t('message.import.invalid_theme_value'), type: 'error' })
        return false
    }

    return true
}

const isValidActivity = (activity, setMessage, t) => {
    const requiredKeys = ['id', 'name', 'reroll_cost', 'weight']

    for (const key of requiredKeys) {
        if (!(key in activity)) {
            setMessage({ text: `${t('message.import.missing_key_activity')}: ${key}`, type: 'error' })
            return false
        }
    }

    if (!isValidId(activity.id)) {
        setMessage({ text: t('message.import.invalid_id_activity'), type: 'error' })
        return false
    }

    if (!isValidRerollCost(activity.reroll_cost)) {
        setMessage({ text: t('message.import.invalid_reroll_cost_activity'), type: 'error' })
        return false
    }

    if (!isValidWeight(activity.weight)) {
        setMessage({ text: t('message.import.invalid_weight_activity'), type: 'error' })
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


export default isValidPlayerJson