import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/layout/main";
import BasicExample from "./components/layout/navigation/navar";
import Project from "./components/layout/project";
function App() {
  return (
    <div className="app">
      <BasicExample />
      <Main />
      <div className="ViewProjects">
        <Project />
        <Project />
        <div className="Middle">
          <div className="Tag"># 바로 사용하는 마케팅 콘텐츠</div>
          <div>
            <h2>
              많은 채널, 반복 제작 하는
              <br />
              <span className="Highlight">마케팅 콘텐츠</span>
              <br />
              힘들지 않으신가요?
            </h2>
            <div className="Desc">
              키워드, 로고등 일부분만 바꾸고 빠르게, 한 곳에서 제작하세요!
            </div>
          </div>
          <button>더 많은 템플릿 보기</button>
        </div>
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default App;
