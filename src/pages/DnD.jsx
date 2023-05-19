import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

function DnD () {
     
    const [cardList, setCardList] = useState([
        {id:1, order:4, text:'Карточка 1'},
        {id:2, order:2, text:'Карточка 2'},
        {id:3, order:1, text:'Карточка 3'},
        {id:4, order:3, text:'Карточка 4'},
    ]);

    const [currentCard, setCurrentCard] = useState(null)

    const dragStartHandler = (e, card) => {
        // console.log('start', card)
        setCurrentCard(card)
        
    }

    const dragLeaveHandler = (e) => { 
        // console.log('Leave', e)
        e.target.style.background = 'white'
        
    }

    const dragEndHandler = (e) => {
       
        // e.target.style.background = 'blue'
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
        e.target.style.background = 'lightgray'
        
    }

    const dragDropHandler = (e, card) => {
        e.preventDefault()
        
        // console.log('drop', card)
        setCardList(cardList.map(c => {
            if (c.id === card.id) {
                // console.log(c)
                return {...c, order:currentCard.order}
            }
            if (c.id === currentCard.id) {
                // console.log(currentCard.id, c.id, card.order)
                return {...c, order:card.order}
            }
            return c
        }
        ))
        e.target.style.background = 'white'
    }

    const sortCards = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }


    const navigate = useNavigate()
    return (
        <div className='container'>
            <button className="btn blue" onClick={() => navigate(-1)}>go back</button>
            <h1>drag and drop page</h1>
            <div className='content-card'>
                {cardList.sort(sortCards).map((card) => 
                    <div key={card.id}
                        onDragStart={(e) => dragStartHandler(e, card)}
                        onDragLeave={(e) => dragLeaveHandler(e)} 
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dragDropHandler(e, card)}
                        className='card-dnd'
                        draggable={true}
                    >
                        {card.text}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DnD