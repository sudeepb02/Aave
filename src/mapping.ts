import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Deposit,
  RedeemUnderlying,
  Borrow,
  Repay,
  LiquidationCall,
  Swap,
  FlashLoan,
  ReserveUsedAsCollateralEnabled,
  ReserveUsedAsCollateralDisabled
} from "../generated/Contract/Contract"
import { ExampleEntity,
         FlashLoanSummary,
         AaveSummary,
         User
} from "../generated/schema"

export function handleDeposit(event: Deposit): void {

  //Load the global summary entity
  let summary = AaveSummary.load("1")
  if (summary == null) {
    summary = new AaveSummary("1")
    summary.totalUsers = BigInt.fromI32(0)
    summary.depositCount = BigInt.fromI32(0)
    summary.borrowCount = BigInt.fromI32(0)
    summary.stableBorrowCount = BigInt.fromI32(0)
    summary.variableBorrowCount = BigInt.fromI32(0)
    summary.repayCount = BigInt.fromI32(0)
    summary.liquidationCount = BigInt.fromI32(0)
    summary.rebalanceCount = BigInt.fromI32(0)
    summary.flashLoanCount = BigInt.fromI32(0)
  }
  //Load user 
  let user = User.load(event.transaction.from.toHexString())

  //If user does not exist, create and increment user count
  if (user == null) {
    user = new User(event.transaction.from.toHexString())
    summary.totalUsers.plus(BigInt.fromI32(1))
  }
  user.save()
  summary.depositCount.plus(BigInt.fromI32(1))
  summary.save()

}

export function handleRedeemUnderlying(event: RedeemUnderlying): void {
  
}

export function handleBorrow(event: Borrow): void {

  //Load the global summary entity
  let summary = AaveSummary.load("1")
  if (summary == null) {
    summary = new AaveSummary("1")
    summary.totalUsers = BigInt.fromI32(0)
    summary.depositCount = BigInt.fromI32(0)
    summary.borrowCount = BigInt.fromI32(0)
    summary.stableBorrowCount = BigInt.fromI32(0)
    summary.variableBorrowCount = BigInt.fromI32(0)
    summary.repayCount = BigInt.fromI32(0)
    summary.liquidationCount = BigInt.fromI32(0)
    summary.rebalanceCount = BigInt.fromI32(0)
    summary.flashLoanCount = BigInt.fromI32(0)
  }
  //Load user 
  let user = User.load(event.transaction.from.toHexString())

  //If user does not exist, create and increment user count
  if (user == null) {
    user = new User(event.transaction.from.toHexString())
    summary.totalUsers.plus(BigInt.fromI32(1))
  }
  user.save()
  //TO-DO - Get the params of borrow to distinguish between stable and variable
  // rate loans
  
  summary.borrowCount.plus(BigInt.fromI32(1))
  summary.save()

}

export function handleRepay(event: Repay): void {
  //Load the global summary entity
  let summary = AaveSummary.load("1")
  if (summary == null) {
    summary = new AaveSummary("1")
    summary.totalUsers = BigInt.fromI32(0)
    summary.depositCount = BigInt.fromI32(0)
    summary.borrowCount = BigInt.fromI32(0)
    summary.stableBorrowCount = BigInt.fromI32(0)
    summary.variableBorrowCount = BigInt.fromI32(0)
    summary.repayCount = BigInt.fromI32(0)
    summary.liquidationCount = BigInt.fromI32(0)
    summary.rebalanceCount = BigInt.fromI32(0)
    summary.flashLoanCount = BigInt.fromI32(0)
  }
  //Load user 
  let user = User.load(event.transaction.from.toHexString())

  //If user does not exist, create and increment user count
  if (user == null) {
    user = new User(event.transaction.from.toHexString())
    summary.totalUsers.plus(BigInt.fromI32(1))
  }
  user.save()
  summary.repayCount.plus(BigInt.fromI32(1))
  summary.save()
}

export function handleLiquidationCall(event: LiquidationCall): void {
  //Load the global summary entity
  let summary = AaveSummary.load("1")
  if (summary == null) {
    summary = new AaveSummary("1")
    summary.totalUsers = BigInt.fromI32(0)
    summary.depositCount = BigInt.fromI32(0)
    summary.borrowCount = BigInt.fromI32(0)
    summary.stableBorrowCount = BigInt.fromI32(0)
    summary.variableBorrowCount = BigInt.fromI32(0)
    summary.repayCount = BigInt.fromI32(0)
    summary.liquidationCount = BigInt.fromI32(0)
    summary.rebalanceCount = BigInt.fromI32(0)
    summary.flashLoanCount = BigInt.fromI32(0)
  }
  //Load user 
  let user = User.load(event.transaction.from.toHexString())

  //If user does not exist, create and increment user count
  if (user == null) {
    user = new User(event.transaction.from.toHexString())
    summary.totalUsers.plus(BigInt.fromI32(1))
  }
  user.save()

  summary.repayCount.plus(BigInt.fromI32(1))
  summary.save()
}

export function handleSwap(event: Swap): void {}

export function handleFlashLoan(event: FlashLoan): void {

  //Update Flash Loan summary 
  let flashLoanSummary = FlashLoanSummary.load("1")
  if (flashLoanSummary == null) {
    flashLoanSummary = new FlashLoanSummary("1")
    flashLoanSummary.count = BigInt.fromI32(0)
  }
  flashLoanSummary.count = flashLoanSummary.count.plus(BigInt.fromI32(1))
  flashLoanSummary.save()

  //Load the global summary entity
  let summary = AaveSummary.load("1")
  if (summary == null) {
    summary = new AaveSummary("1")
    summary.totalUsers = BigInt.fromI32(0)
    summary.depositCount = BigInt.fromI32(0)
    summary.borrowCount = BigInt.fromI32(0)
    summary.stableBorrowCount = BigInt.fromI32(0)
    summary.variableBorrowCount = BigInt.fromI32(0)
    summary.repayCount = BigInt.fromI32(0)
    summary.liquidationCount = BigInt.fromI32(0)
    summary.rebalanceCount = BigInt.fromI32(0)
    summary.flashLoanCount = BigInt.fromI32(0)
  }
  //Load user 
  let user = User.load(event.transaction.from.toHexString())

  //If user does not exist, create and increment user count
  if (user == null) {
    user = new User(event.transaction.from.toHexString())
    summary.totalUsers.plus(BigInt.fromI32(1))
  }
  user.save()

  summary.flashLoanCount.plus(BigInt.fromI32(1))
  summary.save()
}

export function handleReserveUsedAsCollateralEnabled(
  event: ReserveUsedAsCollateralEnabled
): void {}

export function handleReserveUsedAsCollateralDisabled(
  event: ReserveUsedAsCollateralDisabled
): void {}
