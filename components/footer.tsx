export default function Footer() {
  return (
    <div>
      <footer>
        <div id="footer_top">
          <div id="footer_top_max">
            <div id="footer_top_text">
              <p>
                믿을 수 있는
                <br />
                판다마켓 중고거래
              </p>
            </div>
            <img id="footer_top_img" src="/img/Img_home_bottom.png" alt="" />
          </div>
        </div>
        <div id="footer_bottom">
          <div id="footer_bottom_contents">
            <div id="footer_copyright">
              <p>©codeit - 2024</p>
            </div>
            <div id="footer_faq">
              <a href="privacy/">
                <p>Privacy Policy</p>
              </a>
              <a href="faq/">
                <p>FAQ</p>
              </a>
            </div>
            <div id="footer_ad">
              <a target="_blank" href="https://www.facebook.com/">
                <Link href={"/bulletin-board"}></Link>
                <Image
                  src={"/assets/ic_facebook.svg"}
                  alt={"headerPandaImg"}
                  width={153}
                  height={51}
                ></Image>
                <address id="facebook"></address>
              </a>
              <a target="_blank" href="https://x.com/">
                <address id="twitter"></address>
              </a>
              <a target="_blank" href="https://www.youtube.com/">
                <address id="yotube"></address>
              </a>
              <a target="_blank" href="https://www.instagram.com/">
                <address id="instagram"></address>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
