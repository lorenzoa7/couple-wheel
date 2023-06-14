const isValidConfigJson = (jsonData, setMessage, t) => {
    const requiredKeys = [
      "collected_coins",
      "reroll_skill_cost",
      "reroll_cost_increase",
      "reroll_cost_decrease",
      "reroll_min_cost",
      "reset_weight_multiplier",
      "weight_decrease_rate",
    ]
  
    for (const key of requiredKeys) {
      if (!(key in jsonData)) {
        setMessage({ text: `${t('message.import.missing_key_config')}: ${key}`, type: "error" })
        return false
      }
    }
  
    if (!isValidCollectedCoins(jsonData.collected_coins)) {
      setMessage({ text: t('message.import.invalid_collected_coins'), type: "error" })
      return false
    }
  
    if (!isValidNumber(jsonData.reroll_skill_cost)) {
      setMessage({ text: t('message.import.invalid_reroll_skill_cost'), type: "error" })
      return false
    }

    if (!isValidNumber(jsonData.reset_weight_multiplier)) {
        setMessage({ text: t('message.import.invalid_reset_weigth_multiplier'), type: "error" })
        return false
      }
  
    if (!isValidNumberInRange(jsonData.reroll_cost_increase, 1, 7)) {
      setMessage({ text: t('message.import.invalid_reroll_cost_increase'), type: "error" })
      return false
    }
  
    if (!isValidNumberInRange(jsonData.reroll_cost_decrease, 1, 7)) {
      setMessage({ text: t('message.import.invalid_reroll_cost_decrease'), type: "error" })
      return false
    }
  
    if (!isValidNumberInRange(jsonData.reroll_min_cost, 1, 9)) {
      setMessage({ text: t('message.import.invalid_reroll_min_cost'), type: "error" })
      return false
    }
  
    if (!isValidNumberInRange(jsonData.weight_decrease_rate, 1, 9)) {
      setMessage({ text: t('message.import.invalid_weigth_decrease_rate'), type: "error" })
      return false
    }
  
    return true
  }
  
  const isValidCollectedCoins = (collectedCoins) => {
    const requiredKeys = ["drawn_player", "opposite_player"]
  
    for (const key of requiredKeys) {
      if (!(key in collectedCoins) || !isValidNumber(collectedCoins[key])) {
        return false
      }
    }
  
    return true
  }
  
  const isValidNumber = (value) => {
    return typeof value === "number" && !isNaN(value) && value >= 0
  }
  
  const isValidNumberInRange = (value, min, max) => {
    return isValidNumber(value) && value >= min && value <= max
  }
  
  export default isValidConfigJson
  