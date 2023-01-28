import { BsFillTelephoneFill as Phone } from 'react-icons/bs'
import { AiTwotoneMail as Email } from 'react-icons/ai'

const Head = () => {
  return (
    <>
        <section className="head">
            <div className="container flex-d">
                <div className="left">
                    <i><Phone /></i>
                    <label>(11) 99434-1245</label>
                    <i><Email /></i>
                    <label>dev.marcioreis@gmail.com</label>
                </div>
                <div className="right">
                    <label>FAQ</label>
                    <label>Ajuda</label>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head