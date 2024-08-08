import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  UserAdded,
  RelayerAdded,
  RelayerRemoved
} from "../generated/Contract/Contract"

export function createUserAddedEvent(
  userAddress: Address,
  nullifier: BigInt
): UserAdded {
  let userAddedEvent = changetype<UserAdded>(newMockEvent())

  userAddedEvent.parameters = new Array()

  userAddedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  userAddedEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromUnsignedBigInt(nullifier)
    )
  )

  return userAddedEvent
}

export function createRelayerAddedEvent(relayer: Address): RelayerAdded {
  let relayerAddedEvent = changetype<RelayerAdded>(newMockEvent())

  relayerAddedEvent.parameters = new Array()

  relayerAddedEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )

  return relayerAddedEvent
}

export function createRelayerRemovedEvent(relayer: Address): RelayerRemoved {
  let relayerRemovedEvent = changetype<RelayerRemoved>(newMockEvent())

  relayerRemovedEvent.parameters = new Array()

  relayerRemovedEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )

  return relayerRemovedEvent
}
