import {publicKey} from "../index";

export interface Txs {
}

export interface ValidationTime {
  publicKey: publicKey
  startCycle: number
  endCycle: number
  rewardRate: number
}

export interface Record {
  serviceQueue: ValidationTime[]
}
