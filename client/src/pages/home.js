import React from "react";
// import Modal from "../components/ImageContentModal";
import Modal2 from "../components/imageFileDropModal";
function Home() {
  return (
    <div>
      <h1>홈페이지</h1>
      <div>사진으로 강아지 품종 판별하기</div>
      <div>사진을 업로드 해주세요</div>
      {/* <div>{<Modal />}</div> */}
      <div>{<Modal2 />}</div>
    </div>
  );
}

export default Home;
