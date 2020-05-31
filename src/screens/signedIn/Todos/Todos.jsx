import React from 'react'
import Layout from '../../../components/Layout'
import Nav from '../../../components/Nav'
import Calendar from 'react-calendar'

export default function Todos(props) {
    const { user, todos } = props

    const changeColor = value => {
        return (value ? 'success' : 'danger')
    }

    const renderTodos = () => {
        if(todos) {
            return todos.map(todo => {
                // console.log(changeColor(todo.completed));
                // let slicedDate = todo.date.toString().slice(0,10)
                // console.log(slicedDate)
                return (
                    <>
                        <div className="todo is-flex flex-col" key={todo.id}>
                            <form className={`has-background-${changeColor(todo.completed)} to-do`}>
                                <input className='todo-input center' type="checkbox" name="title" checked={todo.completed} />
                                {/* <p className="subtitle">{todo.date}</p> */}
                        <label className='is-size-4 todo-title' for="title">{todo.title}<br></br>{<p className="subtitle">{todo.completed ? 'Completed!' : 'Not complete' }</p>}
                        </label>
                                <input className='todo-input center' type="submit" value="Edit Task" disabled={todo.completed}/>
                            </form>
                        </div>
                    </>
                )
            })
        } else {
            return null
        }
    }
    if(user) {
        let dateArr = [];
        todos.map(todo => {
            // let slicedDate = todo.date.slice(0,10)
            return dateArr.push(new Date(todo.date))
        })
        console.log('this is dateArr',dateArr);
        
        // let dateArr = [new Date('06-06-2020'), new Date('06-05-2020')]
        // console.log('this is dateArr',dateArr);
        return (
            <Layout>
                <Nav/>
                <div className="todo-container columns">
                    <div className="container column">
                        <h2 className="has-text-white is-size-2 calendar-title">To Do Calendar</h2>
                        <Calendar
                        value={dateArr}
                        defaultActiveStartDate={new Date()}
                        className='center'
                        />
                    </div>
                    
                    {!todos ? <h3 className='is-family-secondary is-size-4'>No Todos Currently</h3> : null}
                    <div className="todo-container columm">
                        <h1 className='is-size-2 list-title'>To Do List</h1>
                        {renderTodos()}
                    </div>
                </div>
                
            </Layout>
        )
    } else {
        return (
            <Layout>
                <h1 className="title has-text-white is-size-3">Welcome!</h1>
                <div>
                    {!todos ? <h3 className='is-family-secondary is-size-4'>Sign in or create an account to begin</h3> : null }
                    <div className="todo-container">{renderTodos()}</div>
                </div>
            </Layout>
        )
    }

}
