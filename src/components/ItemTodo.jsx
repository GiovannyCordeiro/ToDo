import closeIcon from '../images/icon-cross.svg'

import check from '../images/icon-check.svg'

function ItemTodo() {
  return (
    <div className="item-task">
      <div className="wrapper-item">
        <div className="button-active">
          <img src={check} alt='check'/>
        </div>
        <input type="text" name="text" id="text" value='text' readOnly/>
        <img id='close-icon' src={closeIcon} />
      </div>
    </div>
  )
}

export default ItemTodo