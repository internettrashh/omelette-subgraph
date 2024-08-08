import {
  UserAdded as UserAddedEvent,
  RelayerAdded as RelayerAddedEvent,
  RelayerRemoved as RelayerRemovedEvent
} from "../generated/Contract/Contract"
import { UserAdded, RelayerAdded, RelayerRemoved } from "../generated/schema"

export function handleUserAdded(event: UserAddedEvent): void {
  let entity = new UserAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.nullifier = event.params.nullifier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRelayerAdded(event: RelayerAddedEvent): void {
  let entity = new RelayerAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.relayer = event.params.relayer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRelayerRemoved(event: RelayerRemovedEvent): void {
  let entity = new RelayerRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.relayer = event.params.relayer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
