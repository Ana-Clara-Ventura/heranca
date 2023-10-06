import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado(`Miroslav Klose`, `201420142014`, 1500);
a1.setNome("Ana Clara");
a1.setCpf("102912932819");
a1.setSalario(2000);
console.log(`Nome: ${a1.getNome()}, Cpf: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new Comissionado (`Slipkenot`,`661661661`,4000,0.10);
c1.setNome(`Stratovarius`);
c1.setCpf(`79143221721`)
c1.setTotalVendas(3200);
c1.setTaxaComissao(0.09);
console.log(`Nome: ${c1.getNome()}, Cpf: ${c1.getCpf()}`);
console.log(`Comissão: ${c1.getTaxaComissao()}, Vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);

const h1 = new Horista (`Jubileu`,`12345678910`,22,9);
h1.setNome(`Jubileia`);
h1.setCpf(`01987654321`);
h1.setValorHora(31);
h1.setHorasTrabalhadas(10);
console.log(`Nome: ${h1.getNome()}, Cpf: ${h1.getCpf()}`);
console.log(`Valor hora: ${h1.getValorHora()}, Horas Trabalhadas: ${h1.getHorasTrabalhadas()}`);
console.log(`Vencimento: ${h1.vencimento()}`);
