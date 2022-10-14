import { useState } from 'react'
import './App.css';
import { things } from './things';


function App () {

  const [list, setList] = useState(things);

  const hideItem = (id) => {
    const listFiltered = list.filter(item => {
      if (id !== item.id) {
        return item
      }
    });
    setList(listFiltered);

  }


  function  toggleList () {

    if (list.length === 0) {
      setList(things);
    }
    else {
      setList([]);
    }

  }
  return (    
    <div className="main">
        <div className="container">
            <div className="things">
                <h1 className="things_header">Как интересно провести время - 10 идей</h1>
                <p className="things_text">Конечно, ты можешь самостоятельно придумать способы провести время вместе, но если фантазия неожиданно отказала, воспользуйся этими подсказками.</p>
                <div className="wrapper">
                  {list.map(element => {
                    const {id, image, header, descr, stus} = element;
                    return (                      
                    <div className="card" key={id}>
                      <div className="card_img">
                          <img src={image} alt="idea" />
                      </div>
                      <button className="card_btn" onClick={() => hideItem(id)}>Скрыть</button>
                      <div className="card_descr">
                          <h2 className="card_header">{header}</h2>
                          <p className="card_text">{descr}</p>
                      </div>
                    </div>
                    )
                  })}
                </div>
                <button className="hide_btn" onClick={toggleList}> {list.length === 0 ? 'Отобразить все' : 'Скрыть все' }</button>
            </div>
        </div>
    </div>
  )
}

export default App;