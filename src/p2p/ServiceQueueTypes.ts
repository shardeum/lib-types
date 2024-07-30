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

export interface Record {
  txadd: AddNetworkTx[]
  txremove: RemoveNetworkTx[]
  txlisthash: string
}
