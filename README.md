# Read-me - Challenge MEI-Fácil 

Project built following the book of community [Node Best Practices](https://github.com/i0natan/nodebestpractices)

## Built With
##### [MongoDB Community Server - Version: 4.0.10](https://www.mongodb.com/) 
##### [Node.js - Version: 10.16.0](https://nodejs.org) 

## Configuring the environment
Create a file `.env` with the environment variables looks like in file `env.example`.

## Creating seeds in the database
You can run the seeds using `npm`:

`npm run seeds`

Or you can run the seeds using `yarn`:

`yarn seeds`



## Testing
You can test using `npm`:

`npm run test`

Or you can test using `yarn`:

`yarn test`


## Installation
You can install using `npm`:

`npm install`

Or you can install using `yarn`:

`yarn`

## Running
You can run using `npm`
`npm run dev`

Or you can run using `yarn`
`yarn dev`

## Routes

### Account
The account of a client.

**Paths**

| Method HTTP | Path    | 
|----------|---------|
|GET ALL     |`api/accounts`     | 
|GET BY ID   |`api/accounts/:id` |
|POST        |`api/accounts`     | 
|PUT      |`api/accounts/:id` |
|DELETE      |`api/accounts/:id` |

**Arguments**

| Argument | Type    | 
|----------|---------|
|`cpf`               |*string* | 
|`balance`           |*number* |

**Body example**
```json 
{
	"cpf":"007.251.150-84",
	"balance":5000.75
}
```


### Payment
Performs the payment in the system, debit value in an origin accounnt and credit in destiny account.

**Paths**

| Method HTTP | Path    | 
|----------|---------|
|GET ALL     |`api/payments`     | 
|GET BY ID   |`api/payments/:id` |
|POST        |`api/payments`     | 
|DELETE      |`api/payments/:id` |


**Arguments**

| Argument | Type    | 
|----------|---------|
|`value`               |*number* | 
|`plots`               |*number* |
|`originAccout`        |*number* | 
|`destinyAccount`      |*number*|



**Body example**

```json 
{
    "value":100,
    "plots":5,
    "originAccount":8080,
    "destinyAccount":1313
}
```


## Theoretical questions

#### Explique com suas palavras o que é domain driven design e sua importância na estratégia de desenvolvimento de software.
<div style="text-align: justify">
Domain driven design é um padrão de modelagem. Portanto, todo o domínio da aplicação deve ser analisado antes de iniciar a programar. Com isso, são analisados as regras de negócios, os conceitos e os propósitos do sistema. Dessa forma, o domínio gerará o modelo, composto pelas informações, fluxos e módulos. Porém tais aspectos devem ser analisados, de modo que, todas as partes do domínio sejam atendidas. Após a compreensão é necessário também compartilhar as informações aos clientes e desenvolvedores. Sendo assim, deve-se realizar a documentação (diagramas e/ou textos) para se minimize a ambiguidade. Após entender e documentar todo o domínio, que se iniciará o processo desenvolvimento. 
 </div>


#### Explique com suas palavras o que é e como funciona uma arquitetura baseada em micro-serviços. Explique ganhos com este modelo, desafios em sua implementação e desvantagens.
<div style="text-align: justify">
Arquitetura baseada em micro-serviços, possibilita desenvolver componentes de um sistema de modo distribuído, por meio de comunicações. Dessa forma, desacopla responsabilidades e garante a isola possíveis falhas de sistema. Além disso, possibilita o mesmo sistema, ter componentes desenvolvidos em diferentes linguagens e tecnologias, com escalabilidade e flexibilidade maior que a de sistemas monolíticos e/ou legados. Porém ao adotar tal arquitetura, dados podem ficar descentralizados demais, de modo que, em casos de falhas logs e registros são difíceis de serem depurados e analisados.
 </div>


#### Explique qual a diferença entre processamento sincrono e assincrono e qual o melhor cenário para utilizar um ou outro.
<div style="text-align: justify">
<p> No processamento síncrono, todo o fluxo é realizado de modo sequencial ou em fila, porém tal abordagem em um sistema mono-thread é bloqueante, ou seja, enquanto a tarefa não for concluída o sistema não executará outra tarefa. Tem-se como vantagem utilizar tal funcionalidade ao invés da assincronia, quando são realizadas diversas tarefas dependentes entre si.

Enquanto no processamento assíncrono, as requisições não são bloqueantes, de modo que, o fluxo não dependerá de outra tarefa terminar para que outras sejam realizadas. Portanto tem como vantagem utilizar essa abordagem ao invés do processamento síncrono principalmente em sistemas web, ao qual o cliente não deve ter todo o fluxo de navegação bloqueado por causa de uma requisição enviada ao servidor.
 </div>



#### Referências:
<div style="text-align: justify">

AVRAM, Abel; MARINESCU, Floyd. Domain Driven Design - Quickly. [S. l.]: C4Media, 2016. Disponível em: <https://www.infoq.com/minibooks/domain-driven-design-quickly >. Acesso em: 21 jun. 2019.

CUKIER, Daniel. DDD – Introdução a Domain Driven Design. AgileAndArt, 16 jul. 2010. Disponível em: <http://www.agileandart.com/2010/07/16/ddd-introducao-a-domain-driven-design >. Acesso em: 21 jun. 2019.

NAMIOT, Dmitry; SNEPS-SNEPPE, Manfred. On micro-services architecture. International Journal of Open Information Technologies, v. 2, n. 9, p. 24-27, 2014.
 </div>


## Author
| ![Vilson Júnior](https://avatars0.githubusercontent.com/u/31261715?s=460&v=4)|
|:---------------------:|
|  [Vilson Júnior](https://github.com/VilsonJrCorrea)   |
