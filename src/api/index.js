
export const fetchCoins = async () => {
    const response = await fetch("https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=btc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
		"x-rapidapi-key": "b07fbbf3bbmsh6f7588cdc01674fp1e669cjsnf2f06b7c8fb3"
	}
    })
    const data = await response.json()     
    if(response.status >= 400){
        throw new Error(data.error)
    }
    return data
}