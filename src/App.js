import { useState } from 'react'
import './App.css';
import { things } from './things';


function App () {

  const [list, setList] = useState(things);
  const [idea, setIdea] = useState(declOfNum(list.length));

  const hideItem = (id) => {
    const listFiltered = list.filter(item => id !== item.id);
    setList(listFiltered);
    setIdea(declOfNum(listFiltered.length));
  }

  function declOfNum (number) {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ['идея', 'идеи', 'идей'];
    return titles[
        number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ];
    };



  function  toggleList () {
    if (list.length === 0) {
      setList(things);
    }
    else {
      setList([]);
    };
    setIdea(declOfNum(list.length));
  }

  return (    
    <div className="main">
        <div className="container">
            <div className="things">
                <h1 className="things_header">Как интересно провести время - {list.length} {idea} </h1>
                <p className="things_text">Конечно, ты можешь самостоятельно придумать способы провести время вместе, но если фантазия неожиданно отказала, воспользуйся этими подсказками.</p>
                <div className="wrapper">
                  {list.map(element => {
                    const {id, image, header, descr} = element;
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