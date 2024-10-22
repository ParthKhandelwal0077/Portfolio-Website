      import React from "react"
      import "../styles/About.css"
      import picture from "../images/File_222.jpg" 
      
  
      export default function About(){

          const cards = [
              
              {
                body: [
                  `ख़ुद को  भुला कर
                  ख़ुद को बस दफ़्न ही कर देती 
                  कि खींच लाया मेरा खुदा
                  उस सपनों के मुक़ाम पर`,
                ]
              },
              {
                body: [
                  `Cry without a reason
                  Sadness is the season 
                  I know your mess, it's bigger than mine 
                  Can't anymore" but our souls still tryin 
                  All I wanna know is what's making us so             weak 
                  It's a long long sea but my God's 
                  with me...`,
                ]
              },
              {
                body: [
                  `She saw him before turning back! 
                  And that's when she knew! Nothing was same             now! 
                  He was now her soul's peace and 
                  she knew..... peace was something 
                  she couldn't live without!
      `
                ]
              },{
                  body: [
                    `Is it just a temporal anomaly!
        Or the world, it would actually smother me
        I control it all, but I wanna subdue 
        Stuck in my black, take me to the blue 
        They all hallucinate, am I the only one awake!
        I carry much, they mould me to a ware.
        
        I wanna yell, I wanna roar 
        But how will they listen, if I'm the only one on shore
        My soul wants to burn, but it yanks me of my tears
        How will they know? How will I tell them of my fear?
        Bodies voice, but why are our souls still
        What did I do 'em wrong? Why did they rob me of my life, quill? 
        Maybe at last they'll let me be,
        No longer secluded, I'll be  FREE  
            `,
                  ]
                }
            ];
          return (
          
              <div className="aboutPage">
                  <div className="aboutPage__main">
                    <figure className="aboutPage__image">
                        <img src={`${picture}`} alt="Derershika Pandit"/>
                    </figure>
                    <div className="aboutPage__content">
                       <h2>Devershika Pandit</h2>
                       <p>is a captivating model and actor who consistently impresses with her talent and intellect. Her confidence precedes her, and her work speaks for itself. Hailing from a city where society often overlooks dreams, she boldly pursued her aspiration to become a butterfly soaring in the open sky.</p>
                       <p>Born and raised in Mathura, she is 21 years old and graduated from one of India's most prestigious institutions, Miranda House, in 2024 with a Bachelor's degree in Chemistry.</p>
                       <p>Since late 2022, she has been working as a model, participating in some of the most innovative and unique projects over the past two years. Throughout her journey, one thing has remained constant: her relentless determination for self-improvement and growth.

</p>
                       <p>Devershika is someone who dares to stand out and speaks her mind with conviction. She is also an articulate writer, occasionally expressing her thoughts through profound reflections.</p>
                    </div>
                  </div>
                  <div className="card_stack">
                    <h2>Writings</h2>
                      {cards.map((card, index) => (
                        <div key={index} className="card_container">
                          {["card", "card ghost"].map((className, classIndex) => (
                            <div key={classIndex} className={className}>
                            
                              {card.body.map((paragraph, paraIndex) => (
                                <>
                                <p key={paraIndex}>{paragraph}</p>
                                <p>-D</p>
                                </>
                              ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                
              </div>
              
          )
      }