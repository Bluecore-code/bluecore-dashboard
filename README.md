# Como publicar no NPM

# Passo 1
Testando pacote:
    1. Na pasta /pacote pelo cmd/terminal rode o comando npm link ou sudo npm link, ira exibir o pacote para todos os projetos
    2. Na pasta /example (ou qualquer outro projeto) pelo cmd/terminal rode o comando npm link bluecore-dashbord, ira linkar o pacote como se estivesse instalando
    3. Na pasta /pacote de um npm run build para salvar as alteracoes, ou npm start para deixar rodando as alteracoes

# Passo 2
Publicando o pacote
    1. Alterar a versao do pacote com npm version patch
    2. publicar com npm publish

    