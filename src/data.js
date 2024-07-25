import componentsImg from './assets/black-eagle.jpg';
import propsImg from './assets/black-eagle.jpg';
import jsxImg from './assets/black-eagle.jpg';
import stateImg from './assets/black-eagle.jpg';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export const Example ={
  components :{
    title: 'Components',
    description: 'This is an example of a React component',
    code : `function Welcome(){
      return <h1> Components </h1>
    }`,
  },
  jsx :{
    title: 'JSX',
    description: 'This is an example of a React Jsx',
    code : `function Welcome(){
      return <h1> Jsx</h1>
    }`,
  },
  childrenprop :{
    title: 'Props',
    description: 'This is an example of a React Props, you are so sweet you are kind, u are talking skills are good. i love you, My heart is beating for you',
    code : `function Welcome(){
      return <h1> props </h1>
    }`,
  },
  state :{
    title: 'State',
    description: 'Kuch logo se baat band ho jaati hai pr ye ittefak kum nhi hote,Ristoon ke gehraiya num ho jaati pr aaj bhi khafa rehte haikehne ko shayad bahot kuch hota hai pr aab lafz nahi bachte, Himmat nahi hoti kyu ki aankhe milti to hai pr aab theer nahi paati kuch logo ke sath itne pal bitaye hote hai pr aab vo anjane lagne lagte hai ye toote rishte aaj bhi soch mein daal dete hai ke waqt ke saath jasbaat kaise badal jaate hai.',
    code : `function Welcome(){
      return <h1> State </h1>
    }`,
  }
}