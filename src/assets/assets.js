import Logo from './Logo.png';
import searchicon from './searchicon.png';
import menu_1 from './advil.png';
import menu_2 from './bandaid.png';
import bandaid1 from './bandaid1.png';
import menu_3 from './cap1.png';
import capsule from './capsule.png';
import capsule1  from './capsule1.png';
import menu_4 from './injection.png';
import menu_5 from './liquid.png';
import liquid1 from './liquid1.png';
import liquid2 from './liquid2.png';
import liquid3 from './liquid3.png';
import  menu_6 from './sanitizer.png';
import menu_7 from './strip.png';
import tab1 from './tab1.png';
import cart from './cart.png';
import menu_8 from './wrapper.png';
import header from './header.png';
import starrating from './starrating.png';
import addicon from './add_icon.png';
import delicon from './delete_icon.png';
import reduceicon from './reduce_icon.png';
import linkedinicon from './linkedin_icon.png';
import twittericon from './twitter_icon.png';
import facebookicon from './facebook_icon.png';
import googleplayicon from './googleplayicon.png';
import appstoreicon from './appstoreicon.png';
import crossicon from './cross_icon.png';
export const assets={
     Logo,
searchicon,
menu_1,
 menu_2 ,
 bandaid1 ,
 menu_8, 
 capsule ,
 capsule1 , 
 menu_4 ,
 menu_3 ,
 liquid1 ,
 liquid2 ,
 liquid3 ,
 menu_6, 
 menu_7,
 tab1 ,
 menu_5,
 cart,
 header,
 starrating,
 addicon,
 delicon,
 reduceicon,
 linkedinicon,
 facebookicon,
 twittericon,
 googleplayicon,
 appstoreicon,
 crossicon
}
export const menu_list=[
     {
     menu_name:"Tablet",
     menu_image:menu_1
     },
     {
     menu_name:"Bandaid",
     menu_image:menu_2
     },
     {
     menu_name:"Capsule",
     menu_image:menu_3
     
     },
     {
     menu_name:"Injection",
     menu_image:menu_4
     },
      {
     menu_name:"Liquid",
     menu_image:menu_5
     },
      {
     menu_name:"Sanitizer",
     menu_image:menu_6
     },
      {
     menu_name:"Strip",
     menu_image:menu_7
     },
      {
     menu_name:"Wrapper",
     menu_image:menu_8
     }
]
export const medicine_list=[
     {
          _id:"1",
          name:"Advil",
          image:tab1,
          price:8,
          description:"Relief from cold and body pain",
          category:"Tablet"
     },
      {
          _id:"2",
          name:"Capsule",
          image:capsule,
          price:5,
          description:"Relief from cold ",
          category:"Capsule"
     },
      {
          _id:"3",
          name:"Capsule",
          image:capsule1,
          price:8,
          description:"Relief from cold",
          category:"Capsule"
     },
      {
          _id:"4",
          name:"Liquid",
          image:liquid1,
          price:10,
          description:"Medicine For Toddler Relief from cold and sorethroat",
          category:"Bandaid"
     },
      {
          _id:"5",
          name:"Bandaid",
          image:bandaid1,
          price:18,
          description:"Protect and Heal your wounds Quickly",
          category:"Bandaid"
     },
      {
          _id:"6",
          name:"Wrapper",
          image:menu_8,
          price:18,
          description:"Protect your Wounds from Sharp Objects and Water",
          category:"Wrapper"
     },
      {
          _id:"7",
          name:"Injection",
          image:menu_4,
          price:30,
          description:"Immediate Relief from Diabetic Dizziness",
          category:"Injection"
     },
      {
          _id:"8",
          name:"Sanitizer",
          image:menu_6,
          price:20,
          description:"Protects from Germs",
          category:"Sanitizer"
     },
      {
          _id:"9",
          name:"Strip",
          image:menu_7,
          price:10,
          description:"Relief from Fever and flu",
          category:"Tablet"
     },
      {
          _id:"10",
          name:"Capsule",
          image:capsule1,
          price:9,
          description:"Relief from Rashes",
          category:"Capsule"
     }   

]


export default assets;