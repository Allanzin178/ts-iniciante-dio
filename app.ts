import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

console.log('------PEOPLE------')

const conta1: PeopleAccount = new PeopleAccount(1, 'Allan', 10)
conta1.deposit(100)
conta1.getBalance()
conta1.getName()
conta1.withdraw(11)
conta1.getBalance()

console.log('------COMPANY------')

const conta2: CompanyAccount = new CompanyAccount('Tesla', 1)
conta2.deposit(100)
conta2.getBalance()
conta2.getName()
conta2.withdraw(11)
conta2.getBalance()
conta2.getLoan(100)
conta2.getBalance()

console.log('------VIP------')

const conta3: VipAccount = new VipAccount('Roberto', 2)
conta3.deposit(100)
conta3.getBalance()
conta3.getName()
conta3.withdraw(11)
conta3.getBalance()
conta3.depositVip(11)
conta3.getBalance()
