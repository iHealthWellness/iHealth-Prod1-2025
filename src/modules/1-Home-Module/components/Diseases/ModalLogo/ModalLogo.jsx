import classes from "./default.module.css"

function ModalLogo() {
  return (
    <>
      <div className={classes.Logo}>
      </div>
    </>
  )
}

function ModalMobileLogo() {
  return (
    <>
      <div className={classes.LogoMobile}>
      </div>
    </>
  )
}

function ModalContentLogo() {
  return (
    <>
      <div className={classes.logoWrapper}>
        <div className={`${classes.contentLogo} ${classes.showOnMobileOnly}`}>
        </div>
      </div>
    </>
  )
}

export default ModalLogo;
export {
  ModalMobileLogo,
  ModalContentLogo,
};
