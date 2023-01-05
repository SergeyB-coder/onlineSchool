import React from 'react';

export function ButtonCreate(props) {
    return (
      <div className='btn-create d-flex justify-content-center rounded p-2 cur-p' onClick={props.handleClick}>
        Создать
      </div>
    );
}
