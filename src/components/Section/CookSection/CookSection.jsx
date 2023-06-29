import "./CookSection.css";
import Header from "../../Header/Header";

export default function CookSection() {
  return (
    <div>
      <Header />
      <div className="CookSection">
        <div className="CookSection-title">
          <h2>추천하는 요리 관련 사이트</h2>
        </div>
        <hr className="line" />
        <div className="box1-container">
          <div className="cook-box1">
            <div className="box1-title">
              <h3>레시피</h3>
            </div>
            <ul>
              <li className="box1-content">
                <a href="http://www.82cook.com/">82cook</a> : 요리 레시피 공유
                사이트.
              </li>
              <br />
              <li>
                <a href="https://www.10000recipe.com/">만개의레시피</a> : 10만개
                이상의 레시피.
              </li>
              <br />
            </ul>
          </div>
          <div className="cook-box1">
            <div className="box1-title">
              <h3>요리 블로그</h3>
            </div>
            <ul>
              <li>
                <a href="https://blog.naver.com/umyo2000">
                  어묘의 맛있는 이야기
                </a>
                : 이것저것 이국적인 것도 하는 요리 블로거
              </li>
              <br />
            </ul>
          </div>
          <div className="cook-box1">
            <div className="box1-title">
              <h3>요리 블로그</h3>
            </div>
            <ul>
              <li>
                <a href="https://blog.naver.com/umyo2000">
                  어묘의 맛있는 이야기
                </a>
                : 이것저것 이국적인 것도 하는 요리 블로거
              </li>
              <br />
            </ul>
          </div>
        </div>
        <div className="CookSection-subtitle">
          <h2>기타</h2>
        </div>
        <hr className="line"></hr>
      </div>
    </div>
  );
}
