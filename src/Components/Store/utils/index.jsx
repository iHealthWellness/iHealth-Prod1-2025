// custom axios instance

import axios from "axios"
// tem store api base url (fake store)
const baseUrl = 'https://fakestoreapi.com/'

export const customFetch = axios.create({
    baseURL:baseUrl
})


export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 1).toFixed(2)) //=> price/100 for cents
    return dollarsAmount
}

//Sequence generator (range)
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}

