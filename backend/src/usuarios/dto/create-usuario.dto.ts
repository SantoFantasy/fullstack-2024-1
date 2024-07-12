export class CreateUsuarioDto {
  nome: string;
  cpf: string;
  data_nascimento: Date;
  sexo: string;
  endereco: string;
  bairro: string;
  cidade: string;
  cep: string;
  telefone: string;
  email: string;
  func_status: boolean;
  admin_status: boolean;
  usuario: string;
  senha: string;
}
