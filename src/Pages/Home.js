import React from 'react'
import {Catigoris,  SortPopup, PizzaBlock} from '../components'

function Home({items}) {

    return (
        <div className="container">
        <div className="content__top">
           <Catigoris 
           
           onClickItem={(item)=> console.log(item)}
           items={[
            'Мясные',
            'Вегенетарианские',
            'Гриль',
            'Острые',
            'Закрытые',
        ]}
            />
          {/* sortComponent */}

          <SortPopup items={['Популярность', 'Цена', 'Алфавит']} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
                items.map((obj) => <PizzaBlock 
                
                key={obj.id}
              {...obj}
        
                />)
            } 
               
     
           
        </div>
    </div>
    )
}

export default Home
