# Documentation

All RadioShack Swap pairs consist of two different tokens.

Results are cached for 5 minutes (or 300 seconds).

## [`/summary`](https://api25.radioshack.org/api/summary)

Returns data for the top ~1000 RadioShack Swap pairs, sorted by reserves. 

### Request

`GET https://api25.radioshack.org/api/summary`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // BEP20 token addresses, joined by an underscore
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // last 24h volume denominated in token0
      "quote_volume": "...",          // last 24h volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_RADIO": "..."          // liquidity denominated in RADIO
    },
    // ...
  }
}
```

## [`/tokens`](https://api25.radioshack.org/api/tokens)

Returns the tokens in the top ~1000 pairs on RadioShack Swap, sorted by reserves.

### Request

`GET https://api25.radioshack.org/api/tokens`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x...": {                        // the address of the BEP20 token
      "name": "...",                  // not necessarily included for BEP20 tokens
      "symbol": "...",                // not necessarily included for BEP20 tokens
      "price": "...",                 // price denominated in USD
      "price_RADIO": "...",             // price denominated in RADIO
    },
    // ...
  }
}
```

## [`/tokens/0x...`](https://api25.radioshack.org/api/tokens/0xf899e3909B4492859d44260E1de41A9E663e70F5)

Returns the token information, based on address.

### Request

`GET https://api25.radioshack.org/api/tokens/0xf899e3909B4492859d44260E1de41A9E663e70F5`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "name": "...",                    // not necessarily included for BEP20 tokens
    "symbol": "...",                  // not necessarily included for BEP20 tokens
    "price": "...",                   // price denominated in USD
    "price_RADIO": "...",               // price denominated in RADIO
  }
}
```

## [`/pairs`](https://api25.radioshack.org/api/pairs)

Returns data for the top ~1000 RadioShack Swap pairs, sorted by reserves.

### Request

`GET https://api25.radioshack.org/api/pairs`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // the asset ids of RADIO and BEP20 tokens, joined by an underscore
      "pair_address": "0x...",        // pair address
      "base_name": "...",             // token0 name
      "base_symbol": "...",           // token0 symbol
      "base_address": "0x...",        // token0 address
      "quote_name": "...",            // token1 name
      "quote_symbol": "...",          // token1 symbol
      "quote_address": "0x...",       // token1 address
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // volume denominated in token0
      "quote_volume": "...",          // volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_RADIO": "..."          // liquidity denominated in RADIO
    },
    // ...
  }
}
```
