export class TodoPage {
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    addTodo(todoText: string){
        cy.get('.new-todo').type(todoText + "{enter}")
    }

    validateTodoText(todoIndex: number, expectedText: string){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }
}