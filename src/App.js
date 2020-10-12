import React, {useRef} from 'react';
import classes from "./style.module.scss"

function App(props) {
    let input = React.createRef();


  return (

    <div className={classes.mainWindow}>

          <div className={classes.links}>
              <form method={"get"} action={"https://www.google.com/search"}>
                  <input ref={input} type={"text"} name={"q"}  placeholder={"Search"} className={classes.search}></input>
              </form>
              <div style={{marginTop: "70px"}} className={classes.row}>
                  <a href={"https://mail.google.com/mail/u/1/#inbox"}>
                    <div className={classes.gmail + " " + classes.icons}>
                    </div>
                  </a>
                  <a href={"https://www.youtube.com/"}>
                      <div className={classes.youtube + " " + classes.icons}>
                      </div>
                  </a>
                  <a href={"https://www.netflix.com/browse"}>
                      <div className={classes.netflix + " " + classes.icons}>
                      </div>
                  </a>
                  <a href={"https://canvas.oregonstate.edu/"}>
                      <div className={classes.canvas + " " + classes.icons}>
                      </div>
                  </a>
            </div>

            <div className={classes.row}>
                <a href={"https://github.com/"}>
                    <div className={classes.git + " " + classes.icons}>
                    </div>
                </a>
                <a href={"https://oregonstate.edu/"}>
                    <div className={classes.osu + " " + classes.icons}>
                    </div>
                </a>
                <a href={"https://www.reddit.com/"}>
                    <div className={classes.redit + " " + classes.icons}>
                    </div>
                </a>
                <a href={"https://www.udemy.com/home/my-courses/learning/"}>
                    <div className={classes.udemy + " " + classes.icons}>
                    </div>
                </a>

            </div>
          </div>
    </div>
  );
}

export default App;
