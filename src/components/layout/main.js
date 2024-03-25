import "./main.css";

function Main() {
  return (
    <>
      <section>
        <div className="container-max">
          <div className="text-container">
            <div className="text">
              <h1 className="Title">
                웨이브온 하나로 <br />
                <div>
                  <span className="Highlight">가장 쉽고 빠른 </span>
                  <span>콘텐츠 마케팅</span>
                </div>
              </h1>
            </div>
            <div className="desc">
              업종에 상관없는 다양한 마케팅 콘텐츠를 템플릿과 AI로 빠르게
              제작하세요!
            </div>
            <div className="contactJoin">무료로 시작하기</div>
          </div>
          <figure>
            <img
              width="1100"
              height="726"
              src="/asset/image-waveon.webp"
              alt="mainIamge"
            />
          </figure>
        </div>
      </section>
      <section className="Partners">
        <h2>
          이미 <span className="Highlight">1500+ </span>개 이상의 기업이 사용중{" "}
        </h2>
        <div className="brandsLogos">
          <img
            width="113"
            height="35"
            src="/asset/Logo/cardoc.webp"
            alt="cardoc"
          />
          <img width="40" height="35" src="/asset/Logo/cj.webp" alt="cj" />
          <img
            width="69"
            height="35"
            src="/asset/Logo/cjenm.webp"
            alt="cjenm"
          />
          <img
            width="105"
            height="35"
            src="/asset/Logo/com2us.webp"
            alt="com2us"
          />
          <img
            width="150"
            height="35"
            src="/asset/Logo/crowdworks.webp"
            alt="crowdworks"
          />
          <img
            width="106"
            height="35"
            src="/asset/Logo/hyundaisteel.webp"
            alt="hyundaisteel"
          />
          <img
            width="100"
            height="35"
            src="/asset/Logo/emart.webp"
            alt="emart"
          />
          <img
            width="97"
            height="35"
            src="/asset/Logo/kakao.webp"
            alt="kakao"
          />
          <img
            width="120"
            height="35"
            src="/asset/Logo/lottemart.webp"
            alt="lottemart"
          />
          <img
            width="120"
            height="35"
            src="/asset/Logo/naver.webp"
            alt="naver"
          />
          <img width="63" height="35" src="/asset/Logo/ridi.webp" alt="ridi" />
          <img
            width="127"
            height="35"
            src="/asset/Logo/sparkplus.webp"
            alt="sparkplus"
          />
        </div>
        <div className="Testimonials">
          <div className="Quotation1">
            <img
              src="/asset/rtf_markdown_begin_quotes_icon_260512.png"
              width="65"
              height="44"
              alt="Quotation Mark"
              loading="lazy"
              className="QuotationMark"
            />
          </div>{" "}
          <div className="userReview-Box">
            <p className="userReview">
              외주 개발을 검토하였으나, 간단한 랜딩페이지인데도 수백만원이 드는
              것을 알게 되었습니다. 반면 웨이브온은 가격적으로 메리트가 있고,
              제가 스스로 업데이트 할 수 있어서 매우 효율적이었습니다.
            </p>{" "}
            <div className="Person">
              <span className="fw-bold">손범규님</span>
              <span className="PersonRole"> 법무법인 태승</span>
            </div>
          </div>{" "}
          <div className="userReview-Box">
            <p className="userReview">
              바이럴을 목적으로 트렌디한 이슈 콘텐츠를 웨이브온을 사용하여
              제작했는데, 놀라운 CPC (거의 10원 미만의) 와 많은 공유 수를
              이끌어내 자연스럽게 자사 사이트로 유도할 수 있었습니다.
            </p>{" "}
            <div className="Person">
              <span className="fw-bold">김남균님</span>
              <span className="PersonRole"> 매쓰팡 마케터</span>
            </div>
          </div>{" "}
          <div className="Quotation2">
            <img
              src="/asset/inline_quote_blockquote_rtf_markdown_end_quotes_icon_260504.png"
              width="65"
              height="44"
              alt="Quotation Mark"
              loading="lazy"
              className="QuotationMark"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
