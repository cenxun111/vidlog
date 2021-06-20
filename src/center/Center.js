import React from 'react'
import CenteredGrid from './CenterLay'
import head2 from '../images/head2.jpeg'
import c2 from '../images/c2.PNG'
const center = () => {
    return (
        <div className="rounded-md">
            <h1 className="bg-gray-50 text-3xl mt-20">内容列表</h1>
            <h1 className="bg-gray-50 text-xl pt-8">本頁面預設以更新順序排序，最近更新的動畫會在最上面。</h1>
            {/* <div className = "flex pt-10 "> */}
                {/* <h1 className="bg-gray-50 text-xl pt-2" >櫻花莊的寵物女孩</h1>
                <h1 className="bg-gray-50 text-xl pt-2" >櫻花莊的寵物女孩</h1>

                <h1 className="bg-gray-50 text-xl pt-2" >櫻花莊的寵物女孩</h1>
                <h1 className="bg-gray-50 text-xl pt-2" >櫻花莊的寵物女孩</h1>
                <h1 className="bg-gray-50 text-xl pt-2" >櫻花莊的寵物女孩</h1>
                <h1 className="bg-gray-50 text-xl pt-2" >櫻花莊的寵物女孩</h1>
                <h1 className="bg-gray-50 text-xl pt-2" >櫻花莊的寵物女孩</h1> */}
                <CenteredGrid />
                {/* <img className="pr-2 mr-6" src={c2} alt=""
                height="202"
                width="360"/>
                  <img className="pr-2 mr-6" src={c2} alt=""
                height="202"
                width="360"/>
                  <img className="pr-2 mr-6" src={c2} alt=""
                height="202"
                width="360"/>
                  <img className="pr-2 mr-6" src={c2} alt=""
                height="202"
                width="360"/>
                  <img className="pr-2 mr-6" src={c2} alt=""
                height="202"
                width="360"/> */}
                {/* <img className="h-96 w-60 pt-6 pr-2" src={head2} alt=""/>
                <img className="h-96 w-60 pt-6 pr-2" src={head2} alt=""/>
                <img className="h-96 w-60 pt-6 pr-2" src={head2} alt=""/> */}
                
                
                
              
            
            {/* </div> */}
                
        </div>
    )
}

export default center
