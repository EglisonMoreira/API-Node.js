# API-Node.js
ESBAM-ADS 3º PERÍODO NOITE   
Nome: Eglison dos Santos Moreira

Projeto de desenvolvimento Web2:                                                                      
O objetivo deste projeto é desenvolver uma API RESTful utilizando Node.js, Express, Sequelize,                                                                    
dotenv e MySQL para gerenciar informações relacionadas a viagens e clientes.                                                                                           
A API permitirá a criação, leitura, atualização e exclusão de registros de clientes e viagens.                                                                      
Este sistema é útil para empresas de turismo, agências de viagens ou qualquer organização que                                                                    
precise gerenciar itinerários e dados dos clientes de maneira eficiente.

## Funcionalidades

#### Gestão de Clientes:

Listar Clientes: Permite visualizar todos os clientes cadastrados no sistema.                                                                                      
Obter Cliente: Recupera detalhes de um cliente específico pelo seu ID.                                                                                             
Criar Cliente: Adiciona um novo cliente ao sistema.                                                                                                            
Atualizar Cliente: Modifica as informações de um cliente existente.                                                                                              
Deletar Cliente: Remove um cliente do sistema.                                                                                                                    
 
#### Gestão de Viagens:

Listar Viagens: Exibe todas as viagens disponíveis no sistema.                                                                                                     
Obter Viagem: Recupera detalhes de uma viagem específica pelo seu ID.                                                                                          
Criar Viagem: Adiciona uma nova viagem ao sistema.                                                                                                             
Atualizar Viagem: Modifica as informações de uma viagem existente.                                                                                               
Deletar Viagem: Remove uma viagem do sistema.

### Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript para o backend.                                                                                                     
Express.js: Framework para desenvolvimento de APIs RESTful.                                                                                                   
Sequelize: ORM (Object-Relational Mapping) para interação com o banco de dados MySQL.                                                                             
MySQL: Banco de dados relacional para armazenamento das informações.                                                                                             
dotenv: Gerenciamento de variáveis de ambiente.

#### Instruções                                                                                                                                                 

Executar Migrações:                                                                                                                                                  
npx sequelize-cli db:migrate

Iniciar o Servidor:                                                                                                                                                 
node app.js                                                                                                                                                         
node index.js

Obs: Você podera escolher uma das opções para iniciar o servidor,                                                                                                  
sendo que "node app.js" lidarar informações e a porta que o servidor                                                                                                    
esta rodando, como mostra a baixo.

Executing (default): DROP TABLE IF EXISTS `XXXXXX`;                                                                                                            
Executing (default): DROP TABLE IF EXISTS `XXXXXXX`;
...                                                                                                                                                                    
O servidor está rodando na porta XXXX

Já o "node index.js" lidarar informações somente                                                                                                                      
da porta em que esta rodando.

Fiz desse modo para que eu possa ter duas opções sendo                                                                                                            
que a primeira me dará informação assim que eu iniciar o Servidor.                                                                                             
Diferente da segunda que so me dará informações da porta em que está rodando.                                                                                       
Você pode usalas como desejar

