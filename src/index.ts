import { Assalariado} from "./model/Assalariado";

const a1 = new Assalariado(`Miroslav Klose`, `201420142014`,1500);

a1.setNome("Ana Clara");
a1.setCpf("102912932819");
a1.setSalario(2000);
console.log(`Nome: ${a1.getNome()}, Cpf: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);