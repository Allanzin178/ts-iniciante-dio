import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    depositVip = (valor: number): void =>{
        this.deposit((valor + 10))
        console.log('Por ser vip você recebe uma bonificação de 10 reais! Obrigado por usar nosso banco')
    };
}