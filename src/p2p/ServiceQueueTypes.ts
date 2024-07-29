export interface Txs {
}

export interface NetworkTx {
  type: string
  txData: any // todo: better type here?
}

export interface Record {
  txadd: NetworkTx[]
  txremove: string[]
  txlisthash: string
}
