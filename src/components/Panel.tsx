import React, {useState} from 'react';

interface IProps{
    color:string,
    locked:boolean,
    setLocked:any,
}

function Panel({color , setLocked , locked}:IProps) {

    return (
        <div
            className="h-[100vh] w-1/6 flex justify-center items-center text-white text-xl flex-col"
            style={{backgroundColor:color}}
            onClick={() => {

            }}
        >
            <span>{color}</span>
            <div
                className="text-white cursor-pointer"
                onClick={() => {
                    setLocked(!locked)
                }}
            >
                {
                    locked && 'locked'
                }
                {
                    !locked && 'unlocked'
                }
            </div>
        </div>
    );
}

export default Panel;