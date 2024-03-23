import { writable } from 'svelte/store'

export const myData = writable()

export const myColl = writable(1)

export const selectedOption = writable()