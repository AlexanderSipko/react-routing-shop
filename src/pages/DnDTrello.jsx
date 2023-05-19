import {useNavigate} from 'react-router-dom'
import { useState, useRef} from 'react'

function DnDTrello () {
    
    const inputValue = useRef()
    const [boards, setBoards] = useState([
        {id:1, title:"Сделать", items:[{id:1, title:"Поити в магазин"}, {id:2, title:"Выкинуть мусор"}]},
        {id:2, title:"Делаю", items:[{id:3, title:"Написать код"}, {id:4, title:"Совершить прогулку"}]},
        {id:3, title:"Сделано", items:[{id:5, title:"Согласовать задачу"}, {id:6, title:"Решить задачу"}]}
    ]);

    const [maxID, setMaxID] = useState(6)
    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)


    

    const handlerSubmit = () => {
        setBoards(boards.map(b => {
            if(b.id === 1) {
                b.items.push({
                    id:maxID + 1,
                    title:`${inputValue.current.value}`
                })
                return b
            }
            return b
        }))

        setMaxID(maxID + 1)
        inputValue.current.value = ''
    }

    const handleKeyDown = event => {
        if(event.key === 'Enter'){
            handlerSubmit()
          }
      };

    const dragOverHandler = (e) => {
        e.preventDefault()
        if (e.target.className === "item") {
            e.target.style.boxShadow= '0 2px 3px gray'
        }
    }

    const dragLeaveHandler = (e) => { 
        // console.log('Leave', e)
        e.target.style.boxShadow= 'none'
    }

    const dragStartHandler = (e, board, item) => {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    const dragEndHandler = (e) => {
        // e.target.style.background = 'blue'
        e.target.style.boxShadow= 'none'
    }
    

    const dragDropHandler = (e, board, item) => {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)

        board.items.splice(dropIndex + 1, 0,  currentItem)
        setBoards(boards.map(b => {
            if(b.id === board.id) {
                return board
            }
            if(b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }


    const dragDropCardHandler = (e, board) => {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)

        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if(b.id === board.id) {
                return board
            }
            if(b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
 
    }




    const navigate = useNavigate()
    return (
        <div className='container'>
            <button className="btn blue" onClick={() => navigate(-1)}>go back</button>

            <input
                type="text"
                placeholder='add task'
                ref={inputValue}
                onKeyDown={handleKeyDown}
            />
            <button className="btn blue" onClick={handlerSubmit}>add task</button>
            <h1>analog trello</h1>
                <div className='board-content'>
                    {boards.map((board) => 
                    <div
                        className='board'
                        key={board.id}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dragDropCardHandler(e, board)}
                        
                    >
                        <div className="border_title">
                            {board.title}
                        </div>
                        {board.items.map(item => 
                            <div
                                key={item.id}
                                onDragStart={(e) => dragStartHandler(e, board, item)}
                                onDragLeave={(e) => dragLeaveHandler(e)} 
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dragDropHandler(e, board, item)}
                                draggable={true}
                                className='item'
                            >
                                {item.title}
                            </div>
                        )}
                    </div>
                    )}
                </div>
            </div>
    )
}

export default DnDTrello