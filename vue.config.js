module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import"@/global-styles/color.scss";
                @import "@/global-styles/typography.scss";
                
                `
            }
        }
    }
}