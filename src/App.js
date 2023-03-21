import "./App.css";
import toggleicon from "./toggle.png";
import Home from "./HomeIcon.png";
import Setting from "./SettingIcon.png";
import Notifcation from "./Notificationicon.png";
import Profile from "./ProfileIcon.png";
import Close from "./CloseIcon.png";
import Bulb from "./BulbIcon.png";
import Message from "./MessageIcon.png";
import Question from "./QuestionIcon.png";
import Flower from "./FlowerIcon.png";
import LeftArrow from "./LeftArrowIcon.png";
import RightArrow from "./RightArrowIcon.png";
import FullScreen from "./FullScreenIcon.png";
import QuestionMarkIcon from "./QuestionMarkIcon.png";
import MeetingIcon from "./MeetingIcon.png";
import Calender from "./CalenderIcon.png";
import { useState } from "react";

let Asset = [
  {
    asset_id: 18883,
    asset_title: "Technical Project Management",
    asset_description:
      "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
    asset_content: " https://www.youtube.com/embed/TiMRwri1xJ8",
    asset_type: "display_asset",
    asset_content_type: "video",
  },
  {
    asset_id: 18884,
    asset_title: "Threadbuild",
    asset_description:
      "Watch the video and thread build, and jot out key threads while watching that video.",
    asset_content: " ",
    asset_type: "input_asset",
    asset_content_type: "threadbuilder",
  },
  {
    asset_id: 18885,
    asset_title: "Structure you pointers",
    asset_description:
      "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
    asset_content: " ",
    asset_type: "input_asset",
    asset_content_type: "article",
  },
  {
    asset_id: 18886,
    asset_title: "4SA Method",
    asset_description: "To explore more read more",
    asset_content:
      " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
    asset_type: "display_asset",
    asset_content_type: "article",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <ContentBox />
      <div className="QuestonMarkIcon">
        <img src={QuestionMarkIcon} alt="QuestionMark" />
      </div>
      <div className="MeetingIcon">
        <img src={MeetingIcon} alt="MeetingIcon" />
      </div>
      <div className="CalenderIcon">
        <img src={Calender} alt="CalenderIcon" />
      </div>
    </div>
  );
}

export default App;

function Header() {
  return (
    <div className="headerStyles">
      <img
        src="https://deepthought.education/assets/images/logo/logo.svg"
        alt="logo"
      />
      <div className="NavBarIconsDiv">
        <img src={Home} alt="HomeIcon" />
        <img src={Setting} alt="SettingsIcon" />
        <img src={Notifcation} alt="NotificationIcon" />
        <img src={Profile} alt="ProfileImage" />
        <div
          style={{
            height: "32.37px",
            width: "32.37px",
            transform: "rotateZ(90deg)",
            color: "#3683F0",
            cursor: "pointer",
          }}
        >
          ...
        </div>
      </div>
    </div>
  );
}

function ContentBox() {
  const [open, setOpen] = useState(false);

  const displayStyles = {
    width: open ? "392px" : "132px",
    overflow: "hidden",
    transition: "height 0.5s ease-in-out",
  };
  function OpenMenu() {
    setOpen(!open);
  }

  const borderStyle = {
    border: open ? "none" : "solid",
    cursor: "pointer",
  };
  const topDivStyle = {
    width: open ? "392px" : "132px",
  };
  return (
    <div className="contentContainer">
      <div className="leftBox" style={displayStyles}>
        <div className="leftBoxTop" style={topDivStyle}></div>
        <div
          className="leftCenterDiv"
          onClick={() => OpenMenu()}
          style={borderStyle}
        >
          {open ? <ShowPointers /> : "1"}
        </div>
      </div>
      <div className="centreBox">
        <div className="centerDivTopContainer">
          <p className="headingTop">Technical Project Management</p>
          <button className="submitButton" style={{ cursor: "pointer" }}>
            Submit Task
          </button>
        </div>
        <div className="subTextTopDiv">
          <h2 className="subTextHeader">Explore the world of management</h2>
          <p className="subTextpars">
            As a project manager, you play an important reole in leading a
            project through initiation, planning, execution, monitoring,
            controlling and completion. How? Do you want to manage each and
            every step of your life?
          </p>
        </div>
        <div className="tabContainer">
          {Asset.map((data, index) => (
            <DisplayTab
              title={data.asset_title}
              description={data.asset_description}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="rightBox">
        <div className="rightBoxDiv">
          <img src={Close} alt="closeIcon" width="19.83px" height="19.83px" />
          <div>NOTICE BOARD</div>
        </div>
      </div>
    </div>
  );
}

function ShowPointers() {
  return (
    <div className="pointersDiv">
      <ul>
        <li>Explore the World of Management</li>
        {Asset.map((ele, index) => {
          return <li key={index}>{ele.asset_title}</li>;
        })}
      </ul>
    </div>
  );
}

function DisplayTab({ title, description }) {
  return (
    <div className="tab">
      <div className="tabHeadingDiv">
        <p className="tabHeading">{title}</p>
        <div className="infoButton" style={{ cursor: "pointer" }}>
          i
        </div>
      </div>
      <div className="descriptionDiv">
        Description:<span style={{ fontWeight: "400" }}>{description}</span>
      </div>
      <div>
        {title === "Technical Project Management" ? (
          <DisplayVideo />
        ) : title === "Threadbuild" ? (
          <DisplayForm1 />
        ) : title === "Structure you pointers" ? (
          <Article1 />
        ) : (
          <Article2 />
        )}
      </div>
    </div>
  );
}

function DisplayVideo() {
  return (
    <div>
      <iframe
        width="480px"
        height="291px"
        src="https://www.youtube.com/embed/TiMRwri1xJ8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

function DisplayForm1() {
  const [display1, setDisplay1] = useState(true);
  const form1Style = {
    display: display1 ? "flex" : "none",
  };

  const formToggleIcon = {
    transform: display1 ? "rotate(180deg)" : "rotate(0deg)",
  };

  function toggle1() {
    setDisplay1(!display1);
  }
  return (
    <div>
      <div className="form1TopDiv">
        <div className="form1TopDivText">
          <img
            src={toggleicon}
            alt="toggle"
            width="15.98px"
            height="9.6px"
            onClick={() => toggle1()}
            style={formToggleIcon}
          />
          <div>Thread A</div>
        </div>
      </div>
      <div className="form1CenterDiv" style={form1Style}>
        <div className="form1CenterDiv1">
          <span style={{ marginLeft: "5px" }}>Sub thread 1</span>
          <textarea
            className="form1InnerCenterDiv"
            placeholder="Enter Text Here"
          ></textarea>
        </div>
        <div className="form1CenterDiv1">
          <span style={{ marginLeft: "5px" }}>Sub Interpretation 1</span>
          <textarea
            className="form1InnerCenterDiv"
            placeholder="Enter Text Here"
          ></textarea>
        </div>
      </div>
      <div className="form1centerOptions">
        <div className="form1Icons">
          <img src={Bulb} alt="bulbIcon" />
          <img src={Message} alt="bulbIcon" />
          <img src={Question} alt="bulbIcon" />
          <img src={Flower} alt="bulbIcon" />
        </div>
        <div className="form1Options">
          <select className="form1Option" style={{ cursor: "pointer" }}>
            <option>select category</option>
          </select>
          <select className="form1Option" style={{ cursor: "pointer" }}>
            <option>select process</option>
          </select>
        </div>
      </div>
      <div className="form1SubmitButtonDiv">
        <button className="form1SubmitButton" style={{ cursor: "pointer" }}>
          sub-thread
        </button>
      </div>
      <div className="form1CenterDiv2">
        <span style={{ marginLeft: "5px" }}>Summary for Thread A</span>
        <textarea
          className="form1InnerCenterDiv2"
          placeholder="Enter Text Here"
        ></textarea>
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div>
      <div className="article1TopDiv">
        <div className="Article1Heading">Title</div>
        <textarea className="Article1TextAria"></textarea>
      </div>

      <div className="article1BottomDiv">
        <div className="Article1Heading">Content</div>
        <div className="Article1ContentContainer">
          <div className="ArticleContentTopDiv">
            <div className="Article1Buttons">
              <div>File</div>
              <div>Edit</div>
              <div>View</div>
              <div>Insert</div>
              <div>Format</div>
              <div>Tools</div>
              <div>Table</div>
              <div>Help</div>
            </div>
            <div
              style={{
                justifyContent: "flex-start",
                marginLeft: "16px",
                gap: "16px",
              }}
              className="Article1Buttons"
            >
              <img src={LeftArrow} alt="leftArrow" />
              <img src={RightArrow} alt="RightArrow" />
              <img src={FullScreen} alt="FullScreen" />
              <div
                style={{
                  width: "102px",
                  height: "18px",
                  background: "#EBEBEB",
                  marginBottom: "10px",
                }}
              >
                paragraph
              </div>
              <div
                style={{
                  width: "15px",
                  height: "5px",
                  color: "#616161",
                  fontSize: "26px",
                  paddingBottom: "20px",
                }}
              >
                ...
              </div>
            </div>
          </div>
          <div className="ArticleContentBottomDiv">
            <textarea className="Article1ContentBottomText"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

function Article2() {
  const [display2, setDisplay2] = useState(true);
  const [display3, setDisplay3] = useState(true);
  const form12Style = {
    display: display2 ? "block" : "none",
  };
  const form1Style3 = {
    display: display3 ? "block" : "none",
  };
  function toggle2() {
    setDisplay2(!display2);
  }
  function toggle3() {
    setDisplay3(!display3);
  }

  const ArticleToggle1Display = {
    transform: display2 ? "rotate(180deg)" : "rotate(0deg)",
  };

  const ArticleToggle2Display = {
    transform: display3 ? "rotate(180deg)" : "rotate(0deg)",
  };
  return (
    <div>
      <div className="article2Heading">
        <img
          src={toggleicon}
          alt="toggle"
          width="15.98px"
          height="9.6px"
          onClick={() => toggle2()}
          style={ArticleToggle1Display}
        />
        <div>Introduction</div>
      </div>
      <p className="article2SubHeading" style={form12Style}>
        The 4SA Method , How to bring a idea into progress ?
      </p>
      <div className="seeMoreDiv">
        <button className="seeMoreButton" style={{ cursor: "pointer" }}>
          See More
        </button>
      </div>
      <div className="article2Heading2">
        <img
          src={toggleicon}
          alt="toggle"
          width="15.98px"
          height="9.6px"
          onClick={() => toggle3()}
          style={ArticleToggle2Display}
        />
        <div>Thread A</div>
      </div>
      <div style={{ width: "424px", height: "67px" }}>
        <p className="article2SubHeading2" style={form1Style3}>
          How are you going to develop your stratergy ? Which method are you
          going to use to develop a stratergy ? What if the project is lengthy?
        </p>
      </div>
      <div className="seeMoreDiv">
        <button className="seeMoreButton" style={{ cursor: "pointer" }}>
          See More
        </button>
      </div>
      <div className="article2ExampleHeading">Example 1</div>
      <div className="article2ExampleText">
        You have a concept , How will you put into progress?
      </div>
    </div>
  );
}
