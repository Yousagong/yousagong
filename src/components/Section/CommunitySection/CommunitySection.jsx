import Header from "../../Header/Header";
import "./CommunitySection.css";

export default function CommunitySection() {
  return (
    <div>
      <Header />
      <div className="CommunitySection">
        <div>
          <div className="Community-title">
            <h2>추천하는 커뮤니티</h2>
          </div>
          <hr className="line" />
          <div className="box1-container">
            <div className="community-box1">
              <div className="box1-title">
                <h3>직장인 커뮤니티</h3>
              </div>
              <ul>
                <li className="box1-content">
                  <a href="https://corp.univ.me/Media/Jikjangnaeil">직장내일</a>
                  : 파급력 있는 직장인 타깃 미디어.
                </li>
                <br />
                <li>
                  <a href="https://www.teamblind.com/kr/">blind</a>: 직장인 기업
                  연봉 & 이직 커리어
                </li>
                <br></br>
              </ul>
            </div>
            <div className="community-box1">
              <div className="box1-title">
                <h3>학생 커뮤니티</h3>
              </div>
              <ul>
                <li>
                  <a href="https://everytime.kr/">에브리타임</a>: 대학 생활을 더
                  편하고 즐겁게
                </li>
                <br></br>
              </ul>
            </div>
            <div className="community-box1">
              <div className="box1-title">
                <h3>종합 커뮤니티</h3>
              </div>
              <ul>
                <li>
                  <a href="https://www.ebs.co.kr/main?NaPm=ct%3Dhf2bview%7Cci%3D0Gy1001FZzHfpCO600-M%7Ctr%3Dsa%7Cet%3Dhf3rbd2w%7Cba%3D1%2E0%7Caa%3D1%2E0%7Chk%3Db03c9555b13a8cdb2e0c58e6759281a4efcd510d">
                    디시인사이드
                  </a>
                  : 종합커뮤니티
                </li>
                <br />
                <li>
                  <a href="https://www.ebs.co.kr/main?NaPm=ct%3Dhf2bview%7Cci%3D0Gy1001FZzHfpCO600-M%7Ctr%3Dsa%7Cet%3Dhf3rbd2w%7Cba%3D1%2E0%7Caa%3D1%2E0%7Chk%3Db03c9555b13a8cdb2e0c58e6759281a4efcd510d">
                    에펨코리아
                  </a>
                  : 종합커뮤니티 & 스포츠
                </li>
                <br />
              </ul>
            </div>
          </div>
          <div className="CommunitySection-subtitle">
            <h2>기타</h2>
          </div>
          <hr className="line"></hr>
        </div>
      </div>
    </div>
  );
}
