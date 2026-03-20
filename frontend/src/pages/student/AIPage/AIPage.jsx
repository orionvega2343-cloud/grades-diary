// TODO: страница чата с ИИ-помощником
import styles from './AI.module.css'
import SendIcon from '../../../assets/free-icon-send-9333991.png'
import {useRef, useState} from 'react'
function Agent () {
    const [response, setResponse] = useState(false)
    function handleSend () {
        setResponse(true)
    }
    const textareaRef = useRef(null)
    function  handleInput () {
        const el = textareaRef.current
        if(el.value === '') {
            return
        }
        else {
            el.style.height = 'auto'
            el.style.height = el.scrollHeight + 'px'
        }
    }
    return (
      <section className={styles.agent}>
        <div className={styles.agentInner}>
          <div className={styles.agentTitle}>
            <span className={styles.agentIcon}>🤖</span>
            <span>Чем могу помочь?</span>
          </div>
            {response && <div className={styles.response}></div>}
          <form className={styles.agentInput}>
            <textarea
              onInput={handleInput}
              ref={textareaRef}
              rows={1}
              className={styles.input}
              placeholder="Сообщение для ассистента"
            />
            <button className={styles.send} type='submit'>
              <img src={SendIcon} alt="Отправить" />
            </button>
          </form>
        </div>
      </section>
    )
  }

export default Agent