/// <reference types="cypress" />

it('Verifica resposta e primeiro elemento', () => {
    cy.request({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/',
    }).then(res => {
        expect(res.status).to.be.equals(200)            //O status da requisição foi realizado com sucesso e retornou 200;
        expect(res.body).is.not.empty                   //O retorno não foi vazio           
        expect(res.body).property('count').to.equal(1118)
        expect(res.body.results[0]).to.have.property('name') 
        expect(res.body.results[0]).to.have.property('url')
        expect(res.body.results[0]).property('name').to.equal('bulbasaur')
        expect(res.body.results[0]).property('url').to.equal('https://pokeapi.co/api/v2/pokemon/1/')        
    })
})

it('Verifica resposta do pokemom bulbasaur', () => {
    cy.request({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    }).then(res => {
        expect(res.status).to.be.equals(200)            //O status da requisição foi realizado com sucesso e retornou 200;
        expect(res.body).is.not.empty                   //O retorno não foi vazio           
        expect(res.body).property('abilities').to.be.an('array')
        expect(res.body).property('base_experience').to.be.a('number')
        expect(res.body.species).property('name').to.equal('bulbasaur') 
    })
})