import React from 'react'
import DatePicker from 'react-date-picker'


const TodoForm = ({
    todo,
    handleSubmit,
    handleChange,
    handleDate,
    handleTitle,
    cancelPath,
    history
}) => (
    <div className="todo-form">
        <form   onSubmit={handleSubmit}>
            <h4 className="subtitle has-text-white is-size-4 is-capitalized">add a task</h4>
            <div className="title-input">
                <input
                    placeholder='Task Name'
                    className="input is-rounded is-large has-text-centered is-family-secondary"
                    value={todo.title}
                    name='title'
                    required
                    onChange={handleChange}
                />
            </div>
            <DatePicker
                onChange={handleDate}
                value={todo.date}
            />
            <div className="button-div is-flex justify-content">
					<button className='button is-success is-large' type='submit'>Submit</button>
					<button className='button is-danger is-large' onClick={() => history.push(cancelPath)}>
						Cancel
					</button>
				</div>
        </form>
    </div>
)

export default TodoForm