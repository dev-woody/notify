"use client";

export default function HomePage() {
  return (
    <>
      <main id="container">
        {/* [S] #visual */}
        <article id="visual">
          <section className="visual_box">
            <div className="inner">
              <img
                src="/_resources/img/web/visual_logo.svg"
                alt="Visual Logo"
              />
              <h1>
                <span>핫플레이스</span>로 만드는
              </h1>
              <h2>
                우리 가게
                <span>
                  맞춤 <br className="mob-view" />
                  체험단 리뷰
                </span>
                마케팅
              </h2>
              <p>
                <span>첫 광고주</span> 대상,
                <br className="mob-view" />
                <span>당일 계약</span> 혜택 받으세요!
              </p>
            </div>
          </section>
          <section className="form_box">
            <h2>
              체험단 마케팅 <br />
              무료 상담 받기
            </h2>
            <div className="form">
              <form
                name="frm"
                method="post"
                autoComplete="off"
                action="./__complete.php"
                onSubmit={(e) => {
                  e.preventDefault();
                  // formCheck 로직 추가
                }}
              >
                <input type="hidden" name="dd_customer" value="ad" />
                <input type="hidden" name="dd_code" value="naver_sa" />
                <input
                  type="hidden"
                  name="dd_landing"
                  value="https://reviewplace.co.kr/biz/local/?code=naver_sa&utm_source=naver&utm_medium=PC&utm_campaign=product&utm_content=contents92&utm_term=%EC%B2%B4%ED%97%98%EB%8B%A8%EC%82%AC%EC%9D%B4%ED%8A%B8&NaPm=ct%3Dm7h4wn7s%7Cci%3D0A800015DpDBJHKTuKY%2D%7Ctr%3Dsa%7Chk%3D32b67dad459dbde669e2daa4755bc50521edb1dd%7Cnacn%3DbbaYBggb96Ts"
                />
                <div className="input">
                  <input
                    type="text"
                    name="user_company"
                    placeholder="회사명"
                    maxLength={20}
                  />
                  <input
                    type="text"
                    name="user_name"
                    placeholder="성함과 직책"
                    maxLength={20}
                  />
                  <input
                    className="number"
                    type="text"
                    name="user_cell"
                    placeholder="연락처"
                    maxLength={13}
                    onCopy={(e) => e.preventDefault()}
                    onPaste={(e) => e.preventDefault()}
                  />
                  <input
                    type="text"
                    name="user_location"
                    placeholder="지역"
                    maxLength={20}
                  />
                  <textarea
                    name="user_text"
                    placeholder="상세 문의 내용"
                  ></textarea>
                </div>
                <div className="agreement">
                  <input
                    type="checkbox"
                    id="agree01"
                    name="privacy"
                    value="동의"
                  />
                  <label htmlFor="agree01">
                    <span></span>개인정보 수집 및 이용, 마케팅 활용 전체
                    동의하기
                  </label>
                  <p className="privacy_info">
                    <a href="#">자세히보기</a>
                  </p>
                </div>
                <div className="submit">
                  <button type="submit">
                    무료상담
                    <br />
                    신청하기
                  </button>
                </div>
              </form>
            </div>
          </section>
        </article>
        {/* [E] #visual */}
        {/* 나머지 섹션들 생략 */}
      </main>
      <footer>{/* Footer 내용 */}</footer>
    </>
  );
}
