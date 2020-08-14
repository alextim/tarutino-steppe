const useBanner = (cover) => {
  if (!cover || !cover.default) {
    return { img: undefined, alt: undefined, imgTitle: undefined };
  }

  let img;
  if (cover.mobile) {
    img = [cover.mobile.childImageSharp.fluid, cover.default.childImageSharp.fluid];
    /*
    img = [
      {
        ...cover.mobile.childImageSharp.fluid,
        media: '(max-width: 1023px)',
      },
      {
        ...cover.default.childImageSharp.fluid,
        media: '(min-width: 1024px)',
      },
    ];
    */
  } else {
    img = cover.default.childImageSharp.fluid;
  }
  return {
    img,
    alt: cover.alt,
    imgTitle: cover.alt,
  };
};

export default useBanner;
