import profilepic from '../assets/profilepic.jpg'
export default function Header(){
    return(
      <div>
          <a href="https://react.dev" target="_blank">
            <img src={profilepic}/*Here the image is redering/ loading dynamically*/  className="logo react" alt="Profile Photo" /> 
          </a>
        </div>
    );
  }
  