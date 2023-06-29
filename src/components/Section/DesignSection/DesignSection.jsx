import Header from "../../Header/Header";
import "./DesignSection.css";

export default function DesignSection() {
  return (
    <div>
      <Header />
      <div className="DesignSection">
        <div className="DesignSection-title">
          <h2>추천하는 디자인 사이트</h2>
        </div>
        <hr className="line" />
        <div className="box1-container">
          <div className="design-box1">
            <div className="box1-title">
              <h3>이미지</h3>
            </div>
            <ul>
              <li className="box1-content">
                <a href="https://pixabay.com/ko/">pixabay</a>: 무료 고화질
                이미지.
              </li>
              <br />
              <li>
                <a href="https://unsplash.com/ko">unsplash</a>: 무료 고화질
                이미지.
              </li>
              <br />
            </ul>
          </div>
          <div className="design-box1">
            <div className="box1-title">
              <h3>아이콘</h3>
            </div>
            <ul>
              <li>
                <a href="https://www.iconfinder.com/">iconfinder</a> : 아이콘을
                구할 수 있는 사이트.
              </li>
              <br></br>
              <li>
                <a href="https://thenounproject.com/">thenounproject</a> :
                다양한 무료 템플릿을 사용할 수 있는 서비스.
              </li>
              <br></br>
            </ul>
          </div>
          <div className="design-box1">
            <div className="box1-title">
              <h3>폰트</h3>
            </div>
            <ul>
              <li>
                <a href="https://noonnu.cc/">눈누</a> : 무료 한글 폰트 사용.
              </li>
            </ul>
          </div>
        </div>
        <div className="DesignSection-subtitle">
          <h2>기타</h2>
        </div>
        <hr className="line"></hr>
      </div>
    </div>
  );
}
