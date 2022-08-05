import './Todo.scss'
import iconLight from '../images/icon-moon.svg'
import closeIcon from '../images/icon-cross.svg'

export default function Todo(){
  return(
    <div className="Todo">
      <header className='header-todo'>
          <h2>TODO</h2>
          <img src={iconLight} alt="icon" />
      </header>

      <div className="input-todo">
        <form className="wrapper-input">
          <div className="button"></div>
          <input type="text" placeholder='Digite sua task aqui...'/>
        </form>
      </div>

      <div className="list-todo">
        <div className="item-task">
          <div className="wrapper-item">
            <div className="button"></div>
            <input type="text" name="text" id="text" value='text' readOnly/>
            <img src={closeIcon} />
          </div>
        </div>

        <div className="item-task">
          <div className="wrapper-item">
            <div className="button"></div>
            <input type="text" name="text" id="text" value='text' readOnly/>
            <img src={closeIcon} />
          </div>
        </div>

        <div className="item-task">
          <div className="wrapper-item">
            <div className="button"></div>
            <input type="text" name="text" id="text" value='text' readOnly/>
            <img src={closeIcon} />
          </div>
        </div>

        <div className="item-task">
          <div className="wrapper-item">
            <div className="button"></div>
            <input type="text" name="text" id="text" value='text' readOnly/>
            <img src={closeIcon} />
          </div>
        </div>

        <div className="item-task">
          <div className="wrapper-item">
            <div className="button"></div>
            <input type="text" name="text" id="text" value='text' readOnly/>
            <img src={closeIcon} />
          </div>
        </div>

        <div className="item-task">
          <div className="wrapper-item">
            <div className="button"></div>
            <input type="text" name="text" id="text" value='text' readOnly/>
            <img src={closeIcon} />
          </div>
        </div>

        {/* itens */}

        <div className="status-tasks">
          <span>5 items left</span>
          <span>Clear Completed</span>
        </div>
      </div>
      <div className="filter-list">
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
      </div>
    </div>
  )
}