import React from 'react'
import "../styles/Restricted.css"
import  { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


import {storage} from '../config/firebase';
const Restricted = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();
  

  useEffect(() => {
   
    const fetchImages = async () => {
      
      const imagesRef = ref(storage, 'gs://devershika-7da8a.appspot.com/us');

      try {
        const imageList = await listAll(imagesRef);
        if (imageList.items.length === 0) {
          console.warn("No images found in Firebase Storage.");
          setLoading(false);
          return;
        }

        const imagePromises = imageList.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return {
            name: itemRef.name,
            url: url
          };
        });

        let fetchedImages = await Promise.all(imagePromises);
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images from Firebase Storage:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);


  const signOutFnc = async()=>{
    try{
    await signOut(auth);
    navigate('/')
    }catch(err){
      console.error(err)
    }

  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }


  return (

    <div className="Restricted">
     <div className="Restricted__content 1">
     <figure className='Restricted__content-figure'>
      <img src={`${images[0].url}`} loading="lazy"  alt='usimage'/>
     </figure>
    <p>
    <span><span>Happy Birthday Devu♥️ </span>
Sorry for being the last one to wish but my wishes would have already reached you through krishna.
Thank you for being best person I ever met. </span>

if you were wondering why i didn't text you or call you yesterday, I would just say that it was not easy for me to not call you on your birthday but I did it for me . The thing is complex Devu.  And I know you know that how much I still wanted to celebrate this day.
I wanted to see you that day on call but i think god knew that i wasn’t ready . If you think you will get to know....

    </p>
     </div>
     


     


     <div className="Restricted__content 3">
     <figure className='Restricted__content-figure'>
      <img src={`${images[2].url}`} loading="lazy"  alt='usimage'/>
     </figure>
    <p>
    This website  is something that I wanted to gift you since last year , but kept procrastinating . I think I am still not much late . This is my interpretation and have features which I could think of are required right now . As you soar , more Pages like Covers and Media Blogs can be added as there wasn’t much content for them right now . 
This was created in rush and still need a lot of fixes but I hope “the efforts say the unsaid”. 

This is product of my own intensions and does’t bind you for anything Devu.
    </p>
     </div>



     <div className="Restricted__content 4">
     <figure className='Restricted__content-figure'>
       <img src={`${images[3].url}`} loading="lazy"  alt='usimage'/>
      </figure>
     <p>I hope you like the minimalism in this website , some photos in the gallery might not be that clear as they were sourced from your Instagram . 15 days from now , I will re-deploy the code with new feature which will enable you to upload pictures directly from your side , as well add more projects without much hassle . If you think ki koi shoot aisa h jisko projects mai daal sakte h toh let me know . 
      I confused about if I should add your height and all in about page , after all this can serve as a portfolio as well .  If you want ,we can add your mesurements too.
abhi devu if you want to send me suggestions for the design you want toh n just message me
or if you don’t wanna talk directly send me message through that contact form 😂 and we can mark this our most formal period 😂.
and if you want you can share this in your bio ,but i would suggest to wait for some days and let me test with the security of this website first .
For now all the messages hat we will get from contact page, will be stored in the dataset . Mai wo bhi dekh lunga ki whenever someone sends us the message through contact us page , toh wo apke mail pe aajae. 

     </p>
  
       
      </div>
      <div className="Restricted__content 2">
     <figure className='Restricted__content-figure'>
      <img src={`${images[1].url}`} loading="lazy"  alt='usimage'/>
     </figure>
      
    <p>
    <span>While typing this all out I just wrote something, words just kept flowing out of my mind.</span>
    <span>
    ab ye raatien suni si h , 
n teri awaaz h , naah tere nakhro ki gooz si h,
pata h mujhe ki hum jaha h wahi hona h humko , sab likha hua h , aur usmai khona h humko ,
par mehnat se upr naah kuch tha naah kuch h, 
ab wahi h, iss khamoshi aur teri awaaz ke beech...
</span> 
  </p>
   
     </div>


      <div className="Restricted__content 5">
     <figure className='Restricted__content-figure'>
      <img src={`${images[4].url}`} loading="lazy"  alt='usimage'/>
     </figure>
    <p>I am sorry again chotu,I feet very bad. Sometimes, I just miss you a lot but for the same unsaid reason which liberates me from a lot of post decision pain and regret, I just can't call you . 
    And ye sab cheez meri sript se kyu nhi hoti 😭 this was supposed to reach out to yesterday , but issues came up with website jo ki apke sar ke upr se jaenge if I tried expaining. 
      A lot of things are unsaid here, I tried to keep things simple for us. But I think every thing is complex in it's vital nature and that's the best way it is.
    There a line that reminds me of you everytime 
    and it’s very significant :
    <span>“चाँद teri roshni ka, halka sa ek saya hai” </span>
Talk to you soon Devu. 
    <span>shine the brightest!</span>
    <span>Love you</span>



<span>-pigli</span>
    </p>
     </div>


    <button className="signOut-button"onClick={(signOutFnc)}>Sign Out</button>

    </div>

  )
}

export default Restricted
