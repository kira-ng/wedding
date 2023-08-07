const Donate = () => {
  return (
    <div
      data-id="donate-fab"
      id="call-to-donate"
      className="animate__animated animate__fadeInUp animate__slow"
    >
      <div className="wrapper-donate">
        <div className="wrapper-icon">
          <a href="/album" target="_blank">
            <div>
              <img
                id="nt-sticky-outer"
                alt=""
                src="/images/theme/sticky-outer.png"
              />
              <div id="nt-sticky-inner">
                {/* <img src="/images/theme/album.png" alt="" /> */}
                <p className="font-oooh-baby color-1">Album</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Donate
