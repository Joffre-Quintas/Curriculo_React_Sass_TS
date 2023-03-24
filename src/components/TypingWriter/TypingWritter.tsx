// @ts-nocheck
import { useEffect, useState } from "react"

import './TypingWritter.scss'

export function TypingWritter() {
    const [text, setText] = useState('')
    const [text2,setText2] = useState('')

    const messages = [' Web Developer', ' Estudante de SI', ' Pai de Pet']

    const messageDefault = 'Me chamo Joffre Quintas e sou ';
        
    function typeAndErase(msg, pos) {
        let index = 0;   
        const type = setInterval(() => {
            setText2(currentText => currentText + msg[pos][index])
            index++
            if (index >= msg[pos].length -1) {
                clearInterval(type)
                setTimeout(() => {
                    const erase = setInterval(()=> {
                        setText2((currentText) => currentText.substring(0, currentText.length -1))
                        index--
                        if(index == 0) {
                            clearInterval(erase)
                        }
                    },75)
                },2000)
            }
        },75)
    } 
    
    useEffect(() => {    
            
            let index = -1;
            const typing = setInterval(() => {
                index++
                setText(currentText => currentText + messageDefault[index])
                if (index >= messageDefault.length-1) {
                    clearInterval(typing)
                    
                    typeAndErase(messages,0)
                    let pos = 1;
                    setInterval(() => {
                        typeAndErase(messages,pos)
                        pos++
                        
                        if(pos >= messages.length) {
                            pos = 0;   
                        }
                    },5000)
                }
            },75)          
    },[])
    
    return <h3>{text}<b className="alternativeText">{text2}</b><span>|</span></h3>
}
// messages[pos].length*2*75 