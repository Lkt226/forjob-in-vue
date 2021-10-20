# Ideia do projeto

## Sistema de conexão

[x] registrar nome

## Principal

[] sistema de modulos
**[x] mostrar no grid os modulos listados
**[x] guardar id do modulo no formato de api
**[] guardar configurações do modulo
**[] adicionar um modulo
\*\*[] deletar modulo

## Modulos

[] modulos
**[] criar um modulo
**[] mudar estado do modulo

[] lista de to dos
**[] nome da lista
**[] adicionar um valor a lista
**[] ver os itens da lista
**[] editar um item da lista
**[] remover um item da lista
**[] deletar uma lista inteira

[] timer
**[] guardar a configuração de tempo padrão
**[] fazer contagem do tempo
**[] resetar o tempo
**[] pausar o tempo

## API

-Users
--[user] / id do usuario
---[nome] / nome do usuario
---[application] / forjob

----[item] / no caso do forjob um modulo: [modulo]\_[id]
-----[id] / id do item/modulo para o usuario final
-----[name] / nome do item/modulo
-----[typeId] / id do item/modulo base
-----[content] / conteúdo do item/modulo: exemplo lista de todos

-Shop
--[item] / modulo\_[id]
---[typeId] / id do item/modulo
---[content] / conteúdo do item
---[path] / caminho do modelo
