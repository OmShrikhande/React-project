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
    title: 'Components',
    description: 'This is an example of a React component',
    code : `function Welcome(){
      return <h1> Components </h1>
    }`,
  },
  props :{
    title: 'Components',
    description: 'This is an example of a React component',
    code : `function Welcome(){
      return <h1> Components </h1>
    }`,
  },
  state :{
    title: 'Components',
    description: 'This is an example of a React component',
    code : `function Welcome(){
      return <h1> Components </h1>
    }`,
  }
}