import { SignedObject } from "./P2PTypes"

export interface Txs {
}

export interface AddNetworkTx {
  type: string
  txData: any // todo: better type here?
  cycle: number // cycle the tx was added
}

export interface RemoveNetworkTx {
  txHash: string
  cycle: number // cycle the tx was added
}

export type SignedRemoveNetworkTx = RemoveNetworkTx & SignedObject;
export type SignedAddNetworkTx = AddNetworkTx & SignedObject;

export interface Record {
  txadd: AddNetworkTx[]
  txremove: RemoveNetworkTx[]
  txlisthash: string
}
