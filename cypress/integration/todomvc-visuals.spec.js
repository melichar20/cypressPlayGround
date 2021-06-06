/// <reference types="cypress" />
import { TodoPage } from "../page-objects/todo-page"

describe('visual validation', () => {
  const todoPage = new TodoPage()
  
  before(() =>  todoPage.navigate())
  beforeEach(() =>
    cy.eyesOpen({
      appName: 'TAU TodoMVC',
      testName: 'Navigate ToDoMVC'
    })
  )

  afterEach(() => cy.eyesClose())

  it('should look good', () => {
    cy.eyesCheckWindow('empty todo list')

    todoPage.addTodo('Clean room')
    todoPage.addTodo('Learn javascript')

    cy.eyesCheckWindow('two todos')

    cy.get('.todo-list li:nth-child(1) .toggle').click()

    cy.eyesCheckWindow('mark as completed')
  })
})