import Script from "next/script";
import Head from "next/head";
export default function explain() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        {/* <script>AOS.init();</script> */}
      </Head>
      <Script src="https://unpkg.com/aos@next/dist/aos.js" />
      <div className="item" data-aos="fade-up">
        1
      </div>
      <div className="item" data-aos="fade-down">
        2
      </div>
      <div className="item" data-aos="fade-right">
        3
      </div>
      <div className="item" data-aos="fade-left">
        4
      </div>

      <div className="item" data-aos="zoom-in">
        5
      </div>
      <div className="item" data-aos="zoom-out">
        6
      </div>

      <div className="item" data-aos="slide-up">
        7
      </div>

      <div className="item" data-aos="flip-up">
        8
      </div>
      <div className="item" data-aos="flip-down">
        9
      </div>
      <div className="item" data-aos="flip-right">
        10
      </div>
      <div className="item" data-aos="flip-left">
        11
      </div>

      <style jsx>
        {`
          * {
            box-sizing: border-box;
          }

          .item {
            width: 200px;
            height: 200px;
            margin: 50px auto;
            padding-top: 75px;
            background: #ccc;
            text-align: center;
            color: #fff;
            font-size: 3em;
          }
        `}
      </style>
    </>
  );
}
