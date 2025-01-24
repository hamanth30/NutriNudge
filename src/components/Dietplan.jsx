import React, { useState } from 'react'

const Dietplan = () => {
  const [name,setName] = useState
  (
    [
        {
            id: 1,
            checked: true,
            item: "Walk 5,000 Steps"
        },
        {
            id:2,
            checked: true,
            item: "Drink 3 Liters of water"
        },
        {
            id:3,
            checked:true,
            item: "Do full body stretching and dynamic warmup"
        }
    ]
  );
  
  
  
    return (
    <div>
        <ul>
            {/* <div className="min-h-screen flex items-center justify-center bg-purple-200">
                <div className="max-w-100 h-50 p-10 bg-purple-100 rounded-lg shadow-lg text-center"> */}
                    {name.map((item) =>
                        {
                        <li>
                            <input 
                            type="checkbox"
                            checked={item.checked}
                            />
                            <p>{name.item}</p>
                        </li>
                        }
                    
                    )}
            
            
                {/* </div>
            </div> */}
        </ul>
    </div>
  )
}

export default Dietplan