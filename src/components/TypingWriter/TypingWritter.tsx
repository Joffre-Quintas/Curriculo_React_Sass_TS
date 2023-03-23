// @ts-nocheck
import { useEffect, useState } from "react"

import './TypingWritter.scss'

export function TypingWritter() {
    const [text, setText] = useState('')

    useEffect(() => {    
            const newText = 'Me chamo Joffre Quintas e sou Web Desenvolvedor'
            const newTextArray = newText.split('')

            let index = -1;
            const typing = setInterval(() => {
                index++
                setText(prevtext => prevtext + newTextArray[index])

                if(index >= newTextArray.length - 1) {
                    clearInterval(typing)

                    const erasing = setInterval(() => {
                        setText(prevText => prevText.substring(0, prevText.length-1)) 
                        if (index <= 23) {
                            clearInterval(erasing)
                        }
                        index--                        
                        
                    },75)
                }
            },75)
            
    },[])
    
    return <h3>{text}<span>|</span></h3>
}