import {publicKey} from "../index";

export interface Txs {
}

export interface ServiceEntry {
  publicKey: publicKey
  startCycle: number
  endCycle?: number
  rewardRate: number
}

export interface Record {
  serviceQueue: ServiceEntry[]
}
