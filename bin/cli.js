#!/usr/bin/env node

import minimist from 'minimist'

import roll from "../lib/roll.js"

//const lib = require("./roll")

const args = minimist(process.argv.slice(2))

let sides = 6
let dice = 2
let rolls = 1

if (args.sides)
	sides = args.sides
if (args.dice)
	dice = args.dice
if (args.rolls)
	rolls = args.rolls
const results = roll(sides,dice,rolls)
console.log(JSON.stringify({ sides: sides, dice: dice, rolls: rolls, results: results}))



