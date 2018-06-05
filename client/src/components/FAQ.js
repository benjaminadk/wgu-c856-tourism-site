import React, { Component } from 'react'

const DATA = [
  { q: 'What is the standard currency on the island ?',
    a: 'The official currency of Taniti is the US Dollar. Businesses often accept euros or yen as well as credit cards. Many banks facilite currency exchange.' },
  { q: 'What do I do if I get hurt or have a medical emergency ?',
    a: 'Taniti has one major hospital, with many of the employees fluent in multiple languages. There are also various smaller clinics located throughout the island.' },
  { q: 'Do I have to worry about crime while in Taniti ?', 
    a: 'No. Violent crime is extremely low on Taniti. However, as tourism increases there has been more reports of pickpocketing and other minor crimes.' },
  { q: 'Is there a big language barrier between tourists and native Tanitians ?',
    a: 'In Tanity City English is spoken often. Most younger people speak English fluently. In rural areas, older residents often do not speak English.' },
  { q: 'What is the legal drinking age ?',
    a: 'The drinking age on Taniti is 18. This law is not strictly enforced.' },
  { q: 'When can I purchase alcohol ?',
    a: 'Alcohol can be served from 9:00 AM until midnight daily.' },
  { q: 'Do I need to bring a power outlet adapter for my electronics ?',
    a: 'No. Taniti power outlets are 120 volts, the same as in the US' },
  { q: 'Do Tanitians celebrate any special holidays ?',
    a: 'Yes. Tanitians celebrate many national holidays. Many businesses will be closed so tourists should plan ahead carefully.'},
  { q: 'Where can I find telephone numbers for important places like the hospital ?',
    a: <div>
        <p>Right Here.</p>
        <p>Taniti Hospital: 555-911-9111</p>
        <p>Tourism Deptartment: 555-123-4567</p>
        <p>Taniti City Police: 555-945-1545</p>
        <p>Tanitian Resort: 555-555-5454</p>
        <p>Car Rental Agency: 555-879-5241</p>
        <p>Airport: 555-156-6366</p>
      </div>}
]

class FAQ extends Component {

  renderQuestions = () => DATA.map((faq, i) => {
    return (
      <a key={`question-${i}`} href={`#${i}`}>
        <h3>{faq.q}</h3>
      </a>
    )
  })

  renderAnswers = () => DATA.map((faq, i) => {
    return (
      <div key={`answer-${i}`} style={styles.qAndA}>
         <h3>{faq.q}</h3>
            <p id={i + 1} style={styles.answer}>{faq.a}</p>
      </div>
    )
  })

  render() {
    return(
      <div>
        <h1 style={styles.headline}>Frequently Asked Questions</h1>
        <div style={styles.questions}>
          {this.renderQuestions()}
        </div>
        <hr id={0}/>
        <div style={styles.answers}>
          {this.renderAnswers()}
        </div>
      </div>
    )
  }
}

const styles = {
  headline: {
    fontSize: 60,
    textAlign: 'center',
    marginTop: '15vh'
  },
  questions: {
    marginTop: '10vh',
    marginLeft: '20vw',
    marginBottom: '10vh'
  },
  answers: {
    marginTop: '15vh',
    marginLeft: '20vw',
    marginRight: '20vw'
  },
  answer: {
    fontSize: 16
  },
  qAndA: {
    marginBottom: '5vh'
  } 
}

export default FAQ