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
              <li>
                <a href="https://unsplash.com/ko">unsplash</a>: 무료 고화질
                이미지.
              </li>
              <br />
              <li>
                <a href="https://unsplash.com/ko">unsplash</a>: 무료 고화질
                이미지.
              </li>
            </ul>
          </div>
          <div className="design-box1">
            <div className="box1-title">
              <h3>아이콘</h3>
            </div>
            <ul>
              <li>
                <a href="https://www.iconfinder.com/">iconfinder</a>: 아이콘을
                구할 수 있는 사이트.
              </li>
              <br></br>
              <li>
                <a href="https://thenounproject.com/">thenounproject</a>: 다양한
                무료 템플릿을 사용할 수 있는 서비스.
              </li>
              <br></br>
              <li>
                <a href="https://www.ebs.co.kr/main?NaPm=ct%3Dhf2bview%7Cci%3D0Gy1001FZzHfpCO600-M%7Ctr%3Dsa%7Cet%3Dhf3rbd2w%7Cba%3D1%2E0%7Caa%3D1%2E0%7Chk%3Db03c9555b13a8cdb2e0c58e6759281a4efcd510d">
                  미리캔버스
                </a>
                : 다양한 무료 템플릿을 사용할 수 <br></br>있는 서비스.
              </li>
              <br></br>
            </ul>
          </div>
          <div className="design-box1">
            <div className="box1-title">
              <h3>아잉몰랑</h3>
            </div>
            <ul>
              <li>
                <a href="https://www.ebs.co.kr/main?NaPm=ct%3Dhf2bview%7Cci%3D0Gy1001FZzHfpCO600-M%7Ctr%3Dsa%7Cet%3Dhf3rbd2w%7Cba%3D1%2E0%7Caa%3D1%2E0%7Chk%3Db03c9555b13a8cdb2e0c58e6759281a4efcd510d">
                  EBS
                </a>
                : 프레젠테이션, 포스터, 문서 및 기타 시각 콘텐츠를 만들기 위해
                사용되는 디자인 플랫폼.
              </li>
            </ul>
          </div>
        </div>
        <div className="DesignSection-subtitle">
          <h2>다른 카테고리</h2>
        </div>
        <hr className="line"></hr>
      </div>
    </div>
  );
}
