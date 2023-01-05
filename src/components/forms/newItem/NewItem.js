




import React, { useState, useEffect } from 'react';

export function NewItem(props) {
    const is_adm = props.is_adm
    const item_id = props.item_id
    const fetchNewItem = props.fetchNewItem
    const handleFetchItems = props.handleFetchItems

    const [nameItem, setNameItem] = useState('');
    const [showFormNewItem, setShowFormNewItem] = useState('');

    const handleChangeNameItem = (e) => {
        setNameItem(e.target.value)
        // console.log('e.target.value', e.target.value)
    }
    
    const handleFetchNewItem = (e) => {
        setShowFormNewItem(false)
        fetchNewItem({name: nameItem, item_id: item_id}, function(data) {
            // console.log(data.id)
            handleFetchItems()
        })
    }

    const handleClickNewItem = () => {
        setShowFormNewItem(true)
      }

    return (
        
        <div className='' 
        >
            {is_adm && !showFormNewItem ? (
                <div className='mt-5 cur-p new_item' onClick={handleClickNewItem}>
                Создать
                </div>
            ): (<></>)}

            {showFormNewItem ? (
                <div className='p-5'>
                <input type='text' class="form-control w-25" value={nameItem} onChange={handleChangeNameItem}/>
                <div className='row w-25'>
                    <div className='col-3 cur-p' onClick={handleFetchNewItem}>
                    Ок
                    </div>
                    <div className='col-3 cur-p' onClick={() => {setShowFormNewItem(false)}}>
                    Отмена
                    </div>
                </div>
                </div>): null}
        </div>
        
    );
}
