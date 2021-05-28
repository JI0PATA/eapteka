module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/_vars.scss";
        `
      }
    }
  }
};
