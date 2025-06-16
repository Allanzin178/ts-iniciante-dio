export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.balance += valor
      console.log('Voce depositou')
    }
  }

  withdraw = (valor: number): void => {
    if(!this.validateStatus()){
      return
    }
    if(this.balance >= valor){
      this.balance -= valor
      console.log('Voce sacou')
    }else{
      console.log('Valor excede quantidade de dinheiro armazenada')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}